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
      const id = req.user._id;
      res.redirect('/mainpage/user-account-details/' + id + '/edit');
       // Proceed to the next middleware or route handler
    }
    next(); 
  }
  
  function urlRefreshVerification() {
    const currentUrl = new URL(window.location.href);
    
    var blur = document.getElementById('blurBug')
    var popupnote = document.getElementById('popupnote')

    if (popupnote && popupnote.classList.contains('active')) {
      blur.classList.toggle('active')
      popupnote.classList.toggle('active')
    }

    if (currentUrl.searchParams.has("bugId")) {
      currentUrl.searchParams.delete("bugId");
      history.replaceState(null, null, currentUrl.toString());
    }
  }

  module.exports = { checkAuthenticated, checkNotAuthenticated, userDetailsCheck, urlRefreshVerification };
  