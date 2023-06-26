const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const passport = require('passport');
const { checkAuthenticated, checkNotAuthenticated, userDetailsCheck } = require('../functions/authentication-check.js');
const AccountSchema = require('../models/accountsSchema');
const projectSchema = require('../models/projectSchema');
const sprintSchema = require('../models/sprintSchema');
const groupSchema = require('../models/groupSchema');
const groupMemberSchema = require('../models/groupMemberSchema');
const bugSchema = require('../models/bugSchema');

let projectId 

router.get('/', checkAuthenticated, userDetailsCheck, async (req, res) => {
  if (!req.user) {
    res.redirect('/login');
    return;
  }
  
  const username = req.user.firstname; 
  const lastname = req.user.lastname;
  const id = req.user._id; // Extract the ID from req.user
  
  try {
    const projects = await projectSchema.find({ userid: id });
    const sprints = await sprintSchema.find({ projectid: { $in: projects.map(p => p._id) } });
    const firstSprintsMap = new Map()

    // Access the properties of each project and sprint as needed
    projects.forEach(project => {
      const projectId = project._id;
      //console.log('Project:', projectId, project.projectName);
    });

    sprints.forEach(sprint => {
      const projectId = sprint.projectid.toString();
      if (!firstSprintsMap.has(projectId)) {
        firstSprintsMap.set(projectId, sprint);
      }
    })

   // console.log(firstSprintsMap);
    
    res.render('mainscreen/main-screen', { lastname: lastname, firstname: username, id: id, projects: projects, firstSprintsMap: firstSprintsMap });
  } catch (err) {
    console.error(err);
    // Handle the error
  }
});


//working past here

router.get('/user-account-details', checkAuthenticated, (req, res) => {
  const username = req.user.username;
  res.render('accounts/account', { username: username })
})

router.get('/user-account-details/:id', checkAuthenticated, (req, res) => {
  const id = req.user._id;
  res.render('accounts/account', { id: id });
})

router.get('/user-account-details/:id/edit', checkAuthenticated, (req, res) => {
  try {
    const id = req.user._id;
    const firstname = req.user.firstname
    const lastname = req.user.lastname
  res.render('accounts/account-edit', { id: id, firstname: firstname, lastname: lastname });
  } catch {
    res.redirect("/mainpage")
  }
})

router.put('/:id', checkAuthenticated, async (req, res) => {
  try {
    const id = req.params.id;
    const { firstname, lastname } = req.body;

    const updatedUser = await AccountSchema.findByIdAndUpdate(
      id,
      { $set: { firstname: firstname, lastname: lastname } },
      { new: true }
    );

    if (updatedUser) {
      res.redirect('/mainpage');
    } else {
      res.redirect(`/mainpage/user-account-details/${id}/edit`);
    }
  } catch (err) {
    console.error(err);
    res.redirect(`/mainpage/user-account-details/${id}/edit`);
  }
});



//VV FUCKING WORKING LETS GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

router.post('/', async (req, res, next) => {
  try {
    const id = req.user.id;
    const projectName = req.body.projectname;
    const sprintName = req.body.sprintname
    const groupName = req.body.groupname

    // Save the data to the database
    const projectSave = new projectSchema({
      userid: id,
      groupid: ' ',
      projectName: projectName
    });
    const groupSave = new groupSchema({
      userid: id,
      projectid: ' ',
      groupName: groupName
    });
    const sprintSave = new sprintSchema({
      projectid: ' ',
      sprintName: sprintName
    });

    const savedProject = await projectSave.save();
    const savedGroup = await groupSave.save();
    const savedSprint = await sprintSave.save();

    const projectId = savedProject._id;
    const groupId = savedGroup._id;
    const sprintId = savedSprint._id

    // Update the project ID in groupSchema and sprintSchema
    await groupSchema.findByIdAndUpdate(savedGroup._id, { projectid: projectId });
    await sprintSchema.findByIdAndUpdate(savedSprint._id, { projectid: projectId });
    await projectSchema.findByIdAndUpdate(savedProject._id, { groupid: groupId });

    res.redirect(`/mainpage/bugscreen/${id}/${projectName}/${sprintName}/${projectId}/${sprintId}`); //want this to be in this format, /mainpage/bugscreen/:/projectId/:/sprintId

  } catch (err) {
    console.log(err);
    // Handle the error
  }
});

router.get('/bugscreen/:projectName/:sprintName/:projectId/:sprintId', checkAuthenticated, userDetailsCheck, (req, res) => { 
  const projectId = req.params.projectId
  const sprintId = req.params.sprintId
  const projectName = req.params.projectName
  const sprintName = req.params.sprintName
  res.render('mainscreen/bug-page', { projectName, sprintName, projectId, sprintId }); //want this to be in this format, /mainpage/bugscreen/:/projectId/:/sprintId
});

//VV buttons

router.get('/projectEdit/:projectId', checkAuthenticated, userDetailsCheck, async (req, res) => {
  
  const projectId = req.params.projectId

  try {

    const project = await projectSchema.findById( projectId )
    const group = await groupSchema.findOne({ projectid: projectId })

    const projectName = project.projectName
    const groupName = group.groupName
    const groupId = group._id

    res.render('accounts/project-edit', { projectId, projectName, groupName, groupId })
    
  } catch (err) {
    console.log(err)
    console.log("OH NO AN ERROR!!!!!")
  }
  
})

//V Update project/group name  *NEEDS TO HAVE AN OPTION TO ONLY UPDATE THE PROJECT OR GROUP NAME*

router.put('/:projectId/:groupId', async (req, res) => {
  projectId = req.params.projectId
  groupId = req.params.groupId
  //res.send('Working Project Update ' + projectId)

  try {

    const projectName = req.body.projectName;
    const groupName = req.body.groupName

    const updatedProjectName = await projectSchema.findByIdAndUpdate(
      projectId,
      { $set: { projectName: projectName } },
      { new: true }
    );

    const updatedGroupName = await groupSchema.findByIdAndUpdate(
      groupId,
      { $set: { groupName: groupName }},
      { new: true}
    );
    
    if (updatedProjectName && updatedGroupName) {
      res.redirect('/mainpage');
    } else {
      res.redirect(`/mainpage/projectEdit/${projectId}`);
    }
  } catch (err) {
    console.error(err);
    res.redirect(`/mainpage/projectEdit/${projectId}`);
  }
});

//vvv - Delete Project Section

router.delete('/ProjectDelete/:projectId', async (req, res, next) => {
  projectId = req.params.projectId

  try {
    const projectDel = await projectSchema.findOneAndDelete (({_id: projectId}))

    const groupDel = await groupSchema.findOneAndDelete (({projectid: projectId}))

    const sprintDel = await sprintSchema.deleteMany({ projectid: projectId })

    const bugDel = await bugSchema.deleteMany({ projectId: projectId })

  } catch (err) {
    console.log(err)
  }

  res.redirect('/mainpage');
})


//VV logout button

router.delete('/logout', (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/login');
  });
}); 


module.exports = router;
