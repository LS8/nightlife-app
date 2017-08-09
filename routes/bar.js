const express = require('express');
const Router = express.Router();

// Controllers
const getAttendees = require('../controllers/bar/getAttendees');
const byLocation = require('../controllers/bar/byLocation');
const addBar = require('../controllers/bar/addBar');
const addUserToBar = require('../controllers/bar/addUserToBar');
const removeUserFromBar = require('../controllers/bar/removeUserFromBar');

Router.get('/location/:location', byLocation);
Router.post('/', addBar);
// Router.get('/:barId', getAttendees);
Router.post('/attendees', getAttendees);
Router.post('/attend', addUserToBar);
Router.put('/cancel', removeUserFromBar);

module.exports = Router;
