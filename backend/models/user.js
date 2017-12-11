var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  description: {type: String, default: ''},
  avatar: {type: String, require: false},
  name: {type: String, default: ''},
  email: {type: String, require: true},
  major: {type: String, default: ''},
  password: {type: String, require: true},
  courses: {type: [String], default: []},
  dateCreated: {type: Date, default: Date.now}
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
