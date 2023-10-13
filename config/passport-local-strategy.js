
const LocalStrategy = require("passport-local").Strategy;

const passport = require("passport");

const User = require('../models/user');

// Authentication using passport
passport.use(
  new LocalStrategy({
    usernameField: "email"
  },
      function (email, password, done) {
          // find a user establish the identity
          User.findOne({ email: email }, function (err, user) {
              if (err) {
                  console.log("error in finding user");
                  return done(err);
              }

              if (!user || user.password != password) {
                  console.log("Invalied username and password");
                  return done(null, false);
              }
              return done(null, user);
          });

      }
      
    ));
  

// serializing the user to decide which key is to be kept in the cookies
    
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// deserialize the user from the ket in the cookies

passport.deserializeUser(function (user, done) {
    User.findById(user.id, function (err, user) {
        if (err) {
            console.log("error");
            return done(err);
        }

        return done(null, user);
    });
});

// check if the user if authonticated
passport.checkAuthentication = function (req, res, next) {


    
    // if the user is sign in
    if (req.isAuthenticated()) {
        return next();
    }

    // if user is not sign in\
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        
        // req.user contains the current signed in user from the session cookies and we are just sending this to the locals for the views

        res.local.user = req.user;
    }
     next();
}


module.exports = passport;