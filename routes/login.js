const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const AccountSchema = require('../models/accountsSchema');
const UserDetails = require('../models/accountsSchema');
const { checkAuthenticated, checkNotAuthenticated } = require('../routes/authentication-check.js');

router.get('/', (req, res) => {
  res.render('login/login');
});

router.get('/register', (req, res) => {
  res.render('login/register', {
    email: new UserDetails(),
    password: new UserDetails(),
    username: new UserDetails()
  });
});

router.post('/', async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new AccountSchema({
      email: req.body.email,
      password: hashedPassword,
      username: req.body.username
    });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    res.render('login/register', {
      user: user,
      errorMessage: 'Error'
    });
  }
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/mainpage',
  failureRedirect: '/login',
  failureFlash: true
}));

const initializePassport = require('../routes/passport-config');
initializePassport(passport, async (email) => {
  try {
    const user = await AccountSchema.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
});

module.exports = router;
