const app = require('../server');          // one line only
const mongoose = require('mongoose');

const ready =
  mongoose.connection.readyState === 1
    ? Promise.resolve()
    : new Promise(res => mongoose.connection.once('open', res));

module.exports = async (req, res) => {
  await ready;
  app(req, res);
};
