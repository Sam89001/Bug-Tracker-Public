const { authenticate } = require('passport');
const bcrypt = require('bcrypt');
const AccountSchema = require('../models/accountsSchema')

const LocalStrategy = require('passport-local').Strategy;

async function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    try {
      const user = await getUserByEmail(email);
      if (!user) {
        return done(null, false, { message: 'No user with that email' });
      }
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password did not match' });
      }
    } catch (error) {
      return done(error);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'login', passwordField: 'password' }, authenticateUser));
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await AccountSchema.findById(id);
    done(null, user);
    } catch (error) {
      done(error);
    }
  });
}

module.exports = initialize;






/* 
OLD VERSION

const { authenticate } = require('passport');
const bcrypt = require('bcrypt');

const LocalStrategy = require('passport-local').Strategy;

async function initialize(passport, getUserByEmail) {
    const authenticateUser = async (email, password, done) => {
      const user = getUserByEmail(email);
      if (user == null) {
        return done(null, false, { message: 'no user with that email' });
        //null would be replaced with an error message that would say if there was a server error
      }
      try {
        if (await bcrypt.compare(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Password did not match' });
        }
      } catch (error) {
        return done(error);
      }
    };
  
    passport.use(new LocalStrategy({ usernameField: 'login', passwordField: 'password' }, authenticateUser));
    
    passport.serializeUser((user, done) => {
      // Your serialization logic here
    });
  
    passport.deserializeUser((id, done) => {
      // Your deserialization logic here
    });
  }
  
  module.exports = initialize; */