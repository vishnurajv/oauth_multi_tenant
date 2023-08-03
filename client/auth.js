module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login') // if not auth
  },

  forwardAuthenticated: (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next()
    }
    res.redirect('/dashboard');  // if auth    
  }
}