var mongoose = require('mongoose');

var DocumentSchema = mongoose.Schema({
    name: {type: String, default: undefined},
    user: {type: String, default: undefined},
    dateCreated: {type: Date, default: Date.now},
    data: {type: [String], default: []},
});

module.exports = mongoose.model('Document', DocumentSchema);
