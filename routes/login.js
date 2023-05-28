const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login/login')
})

router.get('/register', (req, res) => {
    res.render('login/register')
})


router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router