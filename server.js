if (process.env.NODE_ENV !== 'production') { //loads in environment variables in dev mode 
    require('dotenv').config();
  }
  
  const express = require('express')
  const app = express()
  const expressLayouts = require('express-ejs-layouts')
  const bodyParser = require('body-parser')
  const bcrypt = require('bcrypt')
  const passport = require('passport')
  const flash = require('express-flash')
  const session = require('express-session')
  
  app.use(expressLayouts) 
  app.use(express.static('public'))
  app.use(express.urlencoded({ extended: false }))
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
  
  const indexRouter = require('./routes/index')
  const loginRouter = require('./routes/login')
  const mainpageRouter = require('./routes/mainpage')

  app.set('views', 'views')
  app.set('view engine', 'ejs')
  app.set('layout', 'layouts/layout')
  app.use(flash())
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  
  app.use('/', indexRouter)
  app.use('/login', loginRouter)
  app.use('/mainpage', mainpageRouter) //this is the root name
  
  //database connections vv

  const mongoose = require('mongoose')
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  const db = mongoose.connection
  db.on('error', error => console.error(error))
  db.once('open', () => console.log('Connected to Mongoose'))
  
  app.listen(process.env.PORT || 3000)










/* MY VERSION

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
//loads in out environment variables in dev mode ^^

const express = require('express') //these lines are running express
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')


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
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter)
app.use('/login', loginRouter) //dont need this because i dont need 'index/login' would need this if i want this


//database connections vv

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true}) 
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))



app.listen(process.env.PORT || 3000) //the port the server is listening on, right now we are using local host 3000 and therefore it is listening on port 3000.

*/

