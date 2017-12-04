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
  res.status(200).send({
    message: "OK",
    data: 'modified'
  });
});

module.exports = router;
