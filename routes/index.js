const express = require('express');
const router = express.Router();
const { checkAuthenticated, checkNotAuthenticated } = require('../functions/authentication-check.js');

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    // User is authenticated, redirect to the main page
    res.redirect('/mainpage');
  } else {
    // User is not authenticated, redirect to the login page
    res.redirect('/login');
  }
});

module.exports = router;
