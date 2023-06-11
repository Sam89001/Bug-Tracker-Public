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



router.get('/', checkAuthenticated, userDetailsCheck, async (req, res) => {
    res.redirect('/mainpage')
  });

router.get('/:id/:projectName/:sprintName/:projectId/:sprintId', checkAuthenticated, userDetailsCheck, async (req, res) => { 
    const id = req.params.id
    const projectId = req.params.projectId
    const sprintId = req.params.sprintId
    const projectName = req.params.projectName
    const sprintName = req.params.sprintName
    try {
      const bugs = await bugSchema.find({ sprintId: sprintId })
     
      bugs.forEach(bug => {
        const bugData = bug.toString()
        console.log(bugData)
      })

      res.render('mainscreen/bug-page', { id, projectName, sprintName, projectId, sprintId, bugs: bugs});
    } catch (err) {
      console.error(err);
    }

    
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

module.exports = router;