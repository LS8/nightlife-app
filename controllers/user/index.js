const User = require('../../models/User');

module.exports = (req, res) => {
  User.findByUsername(req.user.username, (err, user) => {
    if (err) {
      res.json({ success: false, msg: 'Error while querying user data' });
    } else if (user) {
      res.json({ success: true, msg: 'User data retrieved successfully', user });
    } else {
      res.json({ success: false, msg: 'Error nothing found' });
    }
  });
}