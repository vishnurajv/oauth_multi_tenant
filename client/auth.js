module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/auth/sso') // if not auth
  },

  forwardAuthenticated: (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next()
    }
    res.redirect('/');  // if auth    
  }
}