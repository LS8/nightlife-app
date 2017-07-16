const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports.registerUser = function (newUser, callback) {
  User.findOne({ username: newUser.username }, (err, userAlreadyRegistered) => {
    if (err) {
      throw err; 
    } else if (userAlreadyRegistered) {
      callback(null, true);
    } else {
      console.log('user is able to register');
      callback(null, null, true);
    }
  });
};