const express = require('express') //this is the file that is handling my routing, running all webpages.
const router = express.Router()

module.exports = router

router.get('/', (req, res) => { //here is a route request, it is currently rendering index.
    //res.render('index')
    res.redirect('login')
})
