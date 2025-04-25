const app = require('../server');
const mongoose = require('mongoose');

// Wait once (on cold-start) until the Atlas connection is open
const ready = mongoose.connection.readyState === 1
  ? Promise.resolve()
  : new Promise(res => mongoose.connection.once('open', res));

module.exports = async (req, res) => {
  await ready;          // make the first invocation wait for MongoDB
  app(req, res);        // then hand the request to Express
};
