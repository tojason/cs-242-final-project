const mongoose = require('mongoose');

module.exports.connect = (uri) => {

  mongoose.Promise = global.Promise;

  mongoose.connect(uri, {
    useMongoClient: true,
  });

  // mongoose.connection.on('error', (err) => {
  //   console.error(`Mongoose connection error: ${err}`);
  //   process.exit(1);
  // });

  require('./user');
};
