require('dotenv').config()
const passport =require("passport")
const jwt = require('jsonwebtoken');
const OAuth2Strategy = require("passport-oauth2").Strategy

passport.use(new OAuth2Strategy({
    authorizationURL: 'http://localhost:8000/o/authorize',
    tokenURL: 'http://localhost:8000/o/token/',
    clientID: "5hMyCyOQiZ3rGqbJc4VGTZcqPPjc097ofHJZaKEV",
    clientSecret: "enDumx1wVIoAGGuVOOvy45YScFToHCxUnTXJ01ADWt75O8ITxtWQxMBVSPicJOE3eCIEhPJ6wBMHxYwEqgcTOeBmob5czybNvWc52JGQuhvCoHFLODaonR4hAgTG4gD4",
    callbackURL: "http://localhost:3000/auth/sso/callback",
  },
  function(accessToken, refreshToken, params, profile, done) {
    const idToken = params['id_token'];
    user = jwt.decode(idToken)

    // profile = await User.getUserByEmployeeID(employeeID);
    done(null, user);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});