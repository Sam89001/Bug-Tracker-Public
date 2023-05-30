const express = require('express')
const router = express.Router()
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
    const email = new Email({
      email: req.body.email
    });
    const password = new Password({
      password: req.body.password
    });
    const username = new Username({
      username: req.body.username
    });
  
    try {
      const Email = await email.save();
      const Password = await password.save();
      const Username = await username.save();
  
      res.redirect('/login');
    } catch (err) {
      res.render('login/register', {
        email: email,
        password: password,
        username: username,
        
        errorMessage: 'Error' 
      });
    }
  });

  //this isnt sending data for some reason not sure why

//this is where the page takes you after submit, im assumiing this is where the website reads the data

module.exports = router