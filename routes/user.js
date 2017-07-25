const passport = require('passport');
const express = require('express');
const Router = express.Router();

// Controllers
const register = require('../controllers/user/register');
const authenticate = require('../controllers/user/authenticate');
const index = require('../controllers/user/index');

Router.post('/register', register);
Router.post('/authenticate', authenticate);
Router.get('/', passport.authenticate('jwt', { session: false }), index);

module.exports = Router;