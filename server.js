const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport')
const router = express.Router();
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

var doc = require('./backend/routes/document');

app.use(express.static('./public/'));
app.use(express.static('./public/assets/'));

// Allow CORS so that backend and frontend could be put on different servers
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};
app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Static routes
app.route('/').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './source/html/index.html'));
});
app.route('/SignUp').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './source/html/index.html'));
});
app.route('/LogIn').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './source/html/index.html'));
});
app.route('/Create').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './source/html/index.html'));
});
app.route('/Profile').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './source/html/index.html'));
});
app.route('/View').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './source/html/index.html'));
});
app.route('/Status').get(function(req, res) {
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

app.use('/api/document', doc);

// start the server
// NOTE: 127.0.0.1 will not work on the API call, it must use the following address
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
