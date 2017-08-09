const Bar = require('../../models/Bar');

module.exports = (req, res) => {
  Bar.findAttendees(req.body.barId, (err, bar) => {
    if (err) {
      res.json({ success: false, msg: 'Error while querying bar data' });
    } else if (bar) {
      const attendees = bar.attendees;
      res.json({ success: true, msg: 'Bar data retrieved successfully', attendees });
    } else {
      const attendees = [];
      res.json({ success: false, msg: 'Error nothing found', attendees });
    }
  });
};
