var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

/**
* Specifies what strategy we'll use
*/
module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log(done);
      done(err, user);
    });
  });

  // Registration Strategy
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
  },
  function(email, password, done) {
    User.findOne({'email' : email}, function(err, user) {
      if ( err ) {
        return done(err);
      } else if ( user ) {
        return done(null, false);
      } else {
        console.log('register');
        console.log(user);
        var new_user = new User();

        new_user.email = email;
        new_user.password = new_user.generateHash(password);

        new_user.save(function(err) {
          return done(null, new_user);
        });
      }
    });
  }));

  // Login Strategy
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  function(email, password, done) {
    User.findOne({'email': email}, function(err, user) {
      if ( err ) {
        return done(err);
      } else if ( !user || !user.validPassword(password) ) {
        return done(null, false);
      }
      return done(null, user);
    });
  }));
};
