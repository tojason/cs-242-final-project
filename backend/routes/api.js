var UserDB = require('../models/user');

module.exports = function(router, passport) {

  router.post('/register',
    passport.authenticate('local-signup'),
    function(req, res) {
      console.log(req.user);
      res.status(200).json({
        user: req.user.email
      });
  });

  router.post('/login',
    passport.authenticate('local-login'),
      function(req, res) {
        // console.log(req.isAuthenticated());
        res.status(200).json({
          user: req.user.email
        });
      }
  );

  router.get('/info', function(req, res) {
    if (req.query.email === undefined) {
      res.status(404).json({
        message: 'invalid query'
      });
    } else {
      UserDB.find(query, function(err, user_info){
        if (err) {
          res.status(500).json({
            message: err
          });
        } else {
          let info = {};
          info.name = user_info.name;
          info.description = user_info.description;
          info.major = user_info.major;
          info.avatar = user_info.avatar;
          console.log("length: " + user_info.courses.length);
          info.courseLength = user_info.courses.length;

          res.status(200).json({
            data: info
          });
        }
      });
    }
  });

  return router;
}
