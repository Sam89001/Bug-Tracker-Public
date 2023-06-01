//this is where the page takes you after submit, im assumiing this is where the website reads the data

const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')


const AccountSchema = require('../models/accountsSchema')
const initialisePassport = require('../routes/passport-config')

/* const Email = require('../models/accountsSchema')
const Password = require('../models/accountsSchema')
const Username = require('../models/accountsSchema') */

router.get('/', (req, res) => {
    res.render('login/login')
}) 

// VV this get block isnt correct, but is working, this is the problem. Other code is fine

router.get('/register', (req, res) => {

    res.render('login/register', {
      email: new Email(),
      password: new Password(),
      username: new Username()
    });
  });

 /* router.post('/', async (req, res) => {
    const user = new AccountSchema({
      email: req.body.email,
      password: req.body.password,
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
  }); */

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
  successRedirect: '/working',
  failureRedirect: '/login',
  failureFlash: true
}))


initialisePassport ( passport, email => {
  try {
  const databaseCheck = AccountSchema.find(user => user.email === email)
  } catch {

  }
})
    //^^ this looks for database which is useraccount. needs to be reworked to accept into async await or promise



module.exports = router