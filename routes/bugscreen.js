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
const bugSchema = require('../models/groupMemberSchema');



router.get('/', checkAuthenticated, userDetailsCheck, async (req, res) => {
    res.redirect('/mainpage')
  });

router.get('/:projectName/:sprintName/:projectId/:sprintId', checkAuthenticated, userDetailsCheck, (req, res) => { 
    const projectId = req.params.projectId
    const sprintId = req.params.sprintId
    const projectName = req.params.projectName
    const sprintName = req.params.sprintName
    res.render('mainscreen/bug-page', { projectName, sprintName, projectId, sprintId }); 
    
});

router.post('/mainpage/bugscreen/'), async (req, res, next) => {
    const bugSave = new bugSchema({
        //fields to be saved here
      });
    await bugSave.save();
    res.redirect('/:projectName/:sprintName/:projectId/:sprintId')


}






module.exports = router;