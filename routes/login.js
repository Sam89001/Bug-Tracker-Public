//this is where the page takes you after submit, im assumiing this is where the website reads the data

const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')


const AccountSchema = require('../models/accountsSchema')
const UserDetails = require('../models/accountsSchema')


router.get('/', (req, res) => {
    res.render('login/login')
}) 

router.get('/register', (req, res) => {

    res.render('login/register', {
      email: new UserDetails(),
      password: new UserDetails(),
      username: new UserDetails()
    });
  });

// VV new test block using brypt below

router.post('/', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const user = new AccountSchema({
    email: req.body.email,
    password: hashedPassword,
    username: req.body.username
  });

  try {
    await user.save();
    res.redirect('/login'); 
  } catch (err) {
    res.render('login/register', {
      user: user,
      errorMessage: 'Error' 
    });
  }
});

//VV login post

router.post('/login', passport.authenticate('local', {
  successRedirect: '/mainpage/',
  failureRedirect: '/login',
  failureFlash: true
}))

const initializePassport = require('../routes/passport-config')
initializePassport(passport, async (email) => {
  try {
    const user = await AccountSchema.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
  
});

    //^^ this looks for database which is useraccount.



module.exports = router