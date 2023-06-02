const express = require('express');
const router = express.Router();
const { checkAuthenticated, checkNotAuthenticated } = require('../routes/authentication-check.js');

router.get('/', checkAuthenticated, (req, res) => {
  if (!req.user) {
    res.redirect('/login');
    return;
  }
  const username = req.user.username; // Extract the username from req.user
  res.render('mainscreen/main-screen', { username: username });
});

router.get('/bugscreen', checkAuthenticated, (req, res) => {
  res.render('mainscreen/bug-page');
});

module.exports = router;
