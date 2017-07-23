const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use native promises
    mongoose.Promise = global.Promise;

// User Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.register = function (user, callback) {
  User.findOne({ username: user.username }, (err, userAlreadyRegistered) => {
    if (err) {
      throw err; 
    } else if (userAlreadyRegistered) {
      callback(null, null, 0, true);
    } else {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) {
            throw err;
          } else {
            user.password = hash;
            user.save(callback);
          }
        });
      });
    }
  });
};

module.exports.comparePasswords = function (passwordToCheck, hash, callback) {
  bcrypt.compare(passwordToCheck, hash, function (err, res) {
    callback(err, res);
  });
};

module.exports.findByUsername = function (username, callback) {
  const query = { username: username };
  User.findOne( query, callback);
}