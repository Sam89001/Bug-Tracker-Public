const express = require('express')
const router = express.Router()


const AccountSchema = require('../models/accountsSchema')


const Email = require('../models/accountsSchema')
const Password = require('../models/accountsSchema')
const Username = require('../models/accountsSchema') 

router.get('/', (req, res) => {
    res.render('login/login')
}) 

router.get('/register', (req, res) => {
    res.render('login/register', {
      email: new Email(),
      password: new Password(),
      username: new Username()
    });
  });

  router.post('/', async (req, res) => {
    const user = new AccountSchema({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    });
  
    try {
      await user.save();
      res.redirect('/login'); // Redirect to the login page after successful registration
    } catch (err) {
      res.render('login/register', {
        user: user,
        errorMessage: 'Error' 
      });
    }
  });
  //this isnt sending data for some reason not sure why

  
//this is where the page takes you after submit, im assumiing this is where the website reads the data

module.exports = router