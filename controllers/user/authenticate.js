const User = require('../../models/User');

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findByUsername(username, (err, user) => {
    if (err) {
      res.json({ success: false, msg: 'Error' });
    } else if (!user) {
      res.json({ success: false, msg: 'Account not found' });
    } else {
      User.comparePasswords(password, user.password, (err, isMatch) => {
        if (err) {
          res.json({ success: false, msg: 'Error' });
        } else if (isMatch) {
          res.json({ success: true, msg: 'Correct password' });
        } else if (!isMatch) {
          res.json({ success: false, msg: 'Wrong password' });
        } else {
          res.json({ success: false, msg: 'Error' });
        }
      });
    }
  });
};