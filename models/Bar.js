const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

// User Schema
const BarSchema = new Schema({
  barId: {
    type: String,
    required: true
  },
  attendees: {
    type: [String]
  }
});

const Bar = module.exports = mongoose.model('Bar', BarSchema);

module.exports.findAttendees = function (barId, callback) {
  Bar.findOne({ barId: barId }, callback);
};

module.exports.addBar = function (bar, callback) {
  bar.save(callback);
};

module.exports.addUserToBar = function (barId, username, callback) {
  Bar.findOne({ barId: barId }, (err, bar) => {
    if (err) {
      throw err;
    } else {
      bar.attendees.push(username);
      bar.save(callback);
    }
  });
};

module.exports.removeUserFromBar = function (barId, username, callback) {
  Bar.findOne({ barId: barId }, (err, bar) => {
    if (err) {
      throw err;
    } else {
      let posUser = bar.attendees.indexOf(username);
      bar.attendees.splice(posUser, 1);
      bar.save(callback);
    }
  });
};