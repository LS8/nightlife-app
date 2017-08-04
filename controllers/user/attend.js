const User = require('../../models/User');

module.exports = (req, res) => {
  const userId = req.body._id;
  const barName = req.body.barName;

  User.attendBar(userId, barName, (err, user, numAffected ) => {
    if (err) {
      console.log(err);
      res.json({ success: false, msg: 'Failed to add to attended Bars', status: 1 });
    } else if (user) {
      res.json({ success: true, msg: 'Successfully added to attended Bars', status: 0 });
    } else {
      res.json({ success: false, msg: 'Oops, something went wrong..', status: 3 });
    }
  });
}
