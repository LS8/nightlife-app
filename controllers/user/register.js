const User = require('../../models/User');

module.exports = (req, res) => {
  const userToRegister = new User({
    username: req.body.username,
    password: req.body.password
  });

  User.register(userToRegister, (err, user, numAffected, alreadyRegistered) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register', status: 1 });
    } else if (alreadyRegistered) {
      res.json({ success: false, msg: 'Username already exists', status: 2 });
    } else if (user) {
      res.json({ success: true, msg: 'Account registered', status: 0 });
    } else {
      res.json({ success: false, msg: 'Oops, something went wrong..', status: 3 });
    }
  });
}