if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express') //these lines are running express
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

//folder it comes from

app.use(expressLayouts)
app.use(express.static('public')) //this adds public for all files, dosent appear in filepath
app.use(express.urlencoded({ extended: false })) //this allows us to access the req variable in our post method
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login') //dont need this either, setup for app.use login

app.set('views', 'views')
app.set('view engine', 'ejs') //sets the engine
app.set('layout', 'layouts/layout') //directory for template html, common html we will reuse for each file such as header and footer

app.use('/', indexRouter)
app.use('/login', loginRouter) //dont need this because i dont need 'index/login' would need this if i want this


//database connections vv

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true}) 
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.listen(process.env.PORT || 3000) //the port the server is listening on, right now we are using local host 3000 and therefore it is listening on port 3000.







//this will likely alllll change...sigh....

/*

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/javascript', express.static(__dirname + 'public/javascript'))
app.use('/icons', express.static(__dirname + 'public/icons'))




app.get('/', (req, res) => {
    res.render("index") //index file is the first file that the webpage will load
})

app.get('/login', (req, res) => { //this will be the address it will run at. this adress would be http://localhost:3000/register
    res.render("login") //these fields are what the render is looking for and then running
})

app.get('/register', (req, res) => {
    res.render("register") 
})

app.post('/login', (req, res) => {
    req.body.email //this needs to be completed
})

app.post('/register', (req, res) => {
    req.body.email //this needs to be completed
})

*/

