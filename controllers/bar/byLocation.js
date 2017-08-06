// const Bar = require('../../models/Bar');
const request = require('request');
const yelpAuthToken = require ('../../secrets.js').yelpToken;

module.exports = (req, res) => {
  const location = req.params.location;

  let headers = {
    'Content-Type': 'application/json',
    'Authorization': process.env.YELP_TOKEN || yelpAuthToken
  };

  let options = {
    url: `https://api.yelp.com/v3/businesses/search?location=${location}&categories=nightlife`,
    method: 'GET',
    headers: headers
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json({ success: true, msg: 'Successfully fetched', info: body });
    } else {
      res.json({ success: false, msg: 'Error while querying Yelp', info: body });
    }
  })
};
