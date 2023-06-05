const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const passport = require('passport');
const { checkAuthenticated, checkNotAuthenticated, userDetailsCheck } = require('../functions/authentication-check.js');

router.get('/', checkAuthenticated, userDetailsCheck, (req, res) => {
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

router.get('/user-account-details', checkAuthenticated, (req, res) => {
  const username = req.user.username;
  res.render('accounts/account', { username: username })
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
