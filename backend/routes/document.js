var express = require('express'),
    router = express.Router(),
    DocDB = require('../models/document');

router.get('/', function(req, res) {
  res.status(200).send({
    message: "OK",
    data: 'empty'
  });
});

router.post('/', function(req, res) {

  var new_document = {};

  new_document.name = req.body.title;
  new_document.user = req.body.user;
  new_document.data = req.body.data;

  DocDB.findOne({ title : new_document.name}, function(err, post) {
    if (err) {
      res.status(500).send({
        message: 'Server Error'
      });
    } else if (post) { // document exist
      DocDB.findByIdAndUpdate(post.id, new_document, function(error, update_doc) {
        if (error) {
          res.status(500).send({
            message: 'Server Error'
          });
        } else {
          res.status(200).send({
            message: 'Document Updated'
          });
        }
      });
    } else { // title is not exist
      DocDB.create(new_document, function(err, new_doc) {
        if (err) {
          res.status(500).send({
            message: "Server Error"
          });
        } else {
          res.status(201).send({
            message: "Document Created"
          });
        }
      });
    }
  });
  res.status(200).send({
    message: "OK",
    data: 'modified'
  });
});

module.exports = router;
