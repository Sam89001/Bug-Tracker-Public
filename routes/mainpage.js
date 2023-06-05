const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const passport = require('passport');
const { checkAuthenticated, checkNotAuthenticated, userDetailsCheck } = require('../functions/authentication-check.js');
const AccountSchema = require('../models/accountsSchema');

router.get('/', checkAuthenticated, userDetailsCheck, (req, res) => {
  if (!req.user) {
    res.redirect('/login');
    return;
  }
  const username = req.user.username; 
  const id = req.user._id // Extract the username from req.user
  res.render('mainscreen/main-screen', { username: username, id: id });
});

router.get('/bugscreen', checkAuthenticated, (req, res) => {
  res.render('mainscreen/bug-page');
});

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

router.put('/:id', async (req, res) => {
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
