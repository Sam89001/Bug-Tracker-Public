const { authenticate } = require('passport');
const bcrypt = require('bcrypt');

const LocalStrategy = require('passport-local').Strategy;

async function initialise(passport, getUserByEmail) {
    const authenticateUser = async (email, password, done) => {
      const user = getUserByEmail(email);
      if (user == null) {
        return done(null, false, { message: 'no user with that email' });
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
  
    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, authenticateUser));
    
    passport.serializeUser((user, done) => {
      // Your serialization logic here
    });
  
    passport.deserializeUser((id, done) => {
      // Your deserialization logic here
    });
  }
  
  module.exports = initialise;