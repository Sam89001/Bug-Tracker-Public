function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
     return res.redirect('/');
    }
    next();
  }

  function userDetailsCheck(req, res, next) {
    if (req.user.firstname == ' ' || req.user.lastname == ' ') {
      res.redirect('/mainpage/user-account-details');
       // Proceed to the next middleware or route handler
    }
    next(); 
  }
  
  module.exports = { checkAuthenticated, checkNotAuthenticated, userDetailsCheck };
  