var express = require('express'),
    router = express.Router(),
    DocDB = require('../models/document');

router.get('/', function(req, res) {
  var query = {}
  if (req.query.title) {
    query.title = req.query.title;
  }
  DocDB.find(req.query, function(err, doc) {
    if (err) {
      res.status(500).send({
        message: 'Server Error'
      });
    } else if (doc) {
      console.log("doc found");
      res.status(200).send({
        data: doc
      });
    } else {
      console.log('doc not found');
      res.status(404).send({
        message: 'Not Found'
      });
    }
  });
});

router.post('/', function(req, res) {

  var new_document = {};

  new_document.title = req.body.title;
  new_document.user = req.body.user;
  // new_document.data = req.body.data;
  var pd = req.body.data;
  var dd = [];
  for (var i = 0; i < pd.length; i++) {
    dd.push({
      title: pd[i].title,
      point: pd[i].point,
      content: pd[i].content,
      mc: pd[i].mc
    });
  }
  new_document.data = dd;

  DocDB.findOne({ title : new_document.title}, function(err, post) {
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
          console.log('Doc Update');
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
          console.log('Doc Created');
          res.status(201).send({
            message: "Document Created"
          });
        }
      });
    }
  });
});

module.exports = router;
