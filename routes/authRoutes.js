const passport = require('passport');

module.exports = app => {
  // Tell passport to use the Google strategy.
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  // Route for Google+ Redirect
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};