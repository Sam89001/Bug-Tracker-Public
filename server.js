const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(methodOverride('_method'));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const mainpageRouter = require('./routes/mainpage');
const bugscreenRouter = require('./routes/bugscreen');

app.set('views', 'views');
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

// Routes should come after middleware declarations
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/mainpage', mainpageRouter);
app.use('/mainpage/bugscreen', bugscreenRouter);
//app.use('/logout', mainpageRouter);

// Database connections...

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.listen(process.env.PORT || 3000);