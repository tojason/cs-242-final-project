var mongoose = require('mongoose');

var DataSchema = new mongoose.Schema({
  title: String,
  point: Boolean,
  content: String,
  mc: [String]
});

var DocumentSchema = mongoose.Schema({
    title: {type: String, default: undefined},
    user: {type: String, default: undefined},
    dateCreated: {type: Date, default: Date.now},
    data: {type: [DataSchema], default: []},
});

module.exports = mongoose.model('Document', DocumentSchema);
