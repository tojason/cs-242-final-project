module.exports = function(router, passport) {

  router.post('/register',
    passport.authenticate('local-signup'),
    function(req, res) {
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
    res.redirect('/');
  });

  return router;
}
