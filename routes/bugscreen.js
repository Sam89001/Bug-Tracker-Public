const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const passport = require('passport');
const { checkAuthenticated, checkNotAuthenticated, userDetailsCheck } = require('../functions/authentication-check.js');
const { urgencyColour } = require('../public/javascript/Main_Screen.js')
const AccountSchema = require('../models/accountsSchema');
const projectSchema = require('../models/projectSchema');
const sprintSchema = require('../models/sprintSchema');
const groupSchema = require('../models/groupSchema');
const groupMemberSchema = require('../models/groupMemberSchema');
const bugSchema = require('../models/bugSchema');

let filteredBugId;

router.get('/', checkAuthenticated, userDetailsCheck, async (req, res) => {
    res.redirect('/mainpage')
  });

  router.get('/:id/:projectName/:sprintName/:projectId/:sprintId', checkAuthenticated, userDetailsCheck, async (req, res) => { 
    const id = req.params.id;
    const projectId = req.params.projectId;
    const sprintId = req.params.sprintId;
    const projectName = req.params.projectName;
    const sprintName = req.params.sprintName;
    const filteredBugId = 'x' //what i want to populate with a value
  
    try {
      const bugs = await bugSchema.find({ sprintId: sprintId });
      const newSprints = await sprintSchema.find({ projectid: projectId });
      //console.log(newSprints)
      res.render('mainscreen/bug-page', { id, projectName, sprintName, projectId, sprintId, bugs: bugs, newSprints: newSprints, filteredBugId: filteredBugId });
    } catch (err) {
      console.error(err);
    }
  
    // Periodically load and update data every 2 minutes
   /* setInterval(async () => {
      await loadData();
    }, 60000); */
  });


router.post('/:id/:projectName/:sprintName/:projectId/:sprintId/newbug', async (req, res, next) => {
  try {
    const id = req.params.id;
    const projectId = req.params.projectId;
    const sprintId = req.params.sprintId;
    const projectName = req.params.projectName;
    const sprintName = req.params.sprintName;
    const bugSave = new bugSchema({
      projectId: req.params.projectId,
      sprintId: req.params.sprintId,
      userId: req.params.id,
      bugName: req.body.bugName,
      bugSummary: req.body.bugSummary,
      bugPriority: req.body.bugPriority,
      bugType: req.body.bugType,
      bugArea: req.body.bugArea,
      bugAssignedToo: req.body.bugAssignedToo,
      bugTimeFrame: req.body.bugTimeFrame,
      bugProgress: req.body.bugProgress,
    });
    await bugSave.save();
    res.redirect(`/mainpage/bugscreen/${id}/${projectName}/${sprintName}/${projectId}/${sprintId}`);
  } catch (err) {
    res.render('mainscreen/errorPosting', {
      errorMessage: 'Error'
    });
  }
});

router.post('/:id/:projectName/:sprintName/:projectId/:sprintId/newsprint', async (req, res, next) => {
  try {
    const id = req.params.id;
    const projectId = req.params.projectId;
    const sprintId = req.params.sprintId;
    const projectName = req.params.projectName;
    const sprintName = req.params.sprintName;
    
    const newSprintSave = new sprintSchema({
      projectid: req.params.projectId,
      sprintName: req.body.sprintName  
    })
    const savedNewSprint = await newSprintSave.save();
    const newSprintId = savedNewSprint._id
    const newSprintName = savedNewSprint.sprintName

    res.redirect(`/mainpage/bugscreen/${id}/${projectName}/${newSprintName}/${projectId}/${newSprintId}`);
  } catch (err) {
    console.log(err)
    res.render('mainscreen/errorPosting', {
      errorMessage: 'Error'
    });
  }
});
module.exports = router;