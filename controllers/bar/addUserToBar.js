const Bar = require('../../models/Bar');

module.exports = (req, res) => {
  Bar.addUserToBar(req.body.barId, req.body.username, (err, bar) => {
    if (err) {
      res.json({ success: false, msg: 'Error while querying bar data' });
    } else if (bar) {
      const attendees = bar.attendees;
      res.json({ success: true, msg: 'User successfully added to bar', attendees });
    } else {
      res.json({ success: false, msg: 'Error' });
    }
  });
};