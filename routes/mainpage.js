const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('mainscreen/main-screen') //this is where in the folders its looking at the file
}) 

module.exports = router