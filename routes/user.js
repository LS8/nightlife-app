const passport = require('passport');
const express = require('express');
const Router = express.Router();

// Controllers
const register = require('../controllers/user/register');
const authenticate = require('../controllers/user/authenticate');
const attend = require('../controllers/user/attend');
const index = require('../controllers/user/index');

Router.post('/register', register);
Router.post('/authenticate', authenticate);
Router.post('/attend', attend);
Router.get('/', passport.authenticate('jwt', { session: false }), index);

module.exports = Router;
