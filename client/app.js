require('dotenv').config()

const express = require('express')
const session = require('express-session')
const passport =require("passport")
require('./oauth');
const auth = require('./auth');

const app = express()

app.use(session({
  secret: 'your_secret_here',
  resave: false,
  saveUninitialized: true
}))

app.get('/', (req, res) => {
  console.log(req.isAuthenticated());
  res.send('Hello World!')
})

app.get('/auth/sso', passport.authenticate('oauth2', { scope:'openid'}));

app.get('/auth/sso/callback', passport.authenticate('oauth2', { 
   successRedirect: '/',
   failureRedirect: '/login' 
}), (req, res) => {
   res.redirect(req.session.returnTo || '/');
});

app.get('/logout', function (req, res) {
  req.session.destroy(() => res.redirect('/'));
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000')
})