const express = require('express');
const Router = express.Router();

// Controllers
const register = require('../controllers/user/register');
const authenticate = require('../controllers/user/authenticate');

Router.post('/register', register);
// Router.post('/authenticate', authenticate);

module.exports = Router;