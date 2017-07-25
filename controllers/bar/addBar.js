const Bar = require('../../models/Bar');

module.exports = (req, res) => {
  const bar = new Bar({
    barId: req.body.barId,
    attendees: req.body.username
  });
  Bar.addBar(bar, (err, bar) => {
    if (err) {
      res.json({ success: false, msg: 'Error while adding bar' });
    } else if (bar) {
      res.json({ success: true, msg: 'Bar added successfully', bar });
    } else {
      res.json({ success: false, msg: 'Error nothing happened' });
    }
  });
};