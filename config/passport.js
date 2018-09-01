const bCrypt = require('bcrypt-nodejs');

module.exports = (passport, user) => {
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;

  passport.use('local-signup', new LocalStrategy( 
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    }, (req, username, password, done) => {
      var generateHash = (password) => { 
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      User.findOne({
        where: {
            username: username
        }
      }).then((user) => {
        if (user) {
          return done(null, false, {
            message: 'That name is already taken'
        });
        } else {
          var userPassword = generateHash(password);
          var data =
            {
              username: username,
              password: userPassword
            };
          User.create(data).then((newUser, created) => {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));

  passport.serializeUser((user, done) => {
 
    done(null, user.id);
 
  });

  passport.deserializeUser(function(id, done) {
 
    User.findById(id).then(function(user) { 
      if (user) {
        done(null, user.get());
      } else { 
        done(user.errors, null);
      }
    });
    
  });
}