const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport')
const router = express.Router();
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

app.use(express.static('./public/'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Static routes
app.route('/SignUp').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './source/html/index.html'));
});
app.route('/Login').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './source/html/index.html'));
});

require('./backend/models').connect("mongodb://junsitu2:password@ds119446.mlab.com:19446/cs-242-final-project");
require('./backend/auth/passport')(passport);

app.use(cookieParser());
app.use(cookieSession({
  keys: ['asdf', 'asdf']
}));

// Initialize Passport
app.use(passport.initialize()); // Create an instance of Passport
app.use(passport.session());

// Get our routes
app.use('/api', require('./backend/routes/api')(router, passport));

// start the server
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080 or http://127.0.0.1:8080');
});
