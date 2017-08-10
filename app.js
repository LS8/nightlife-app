const express = require('express');
const app = express();

// Add Middleware
const passport = require('passport');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const mongoUrl = require('./secrets').mongolab_uri || process.env.MONGOLAB_URI;

app.use(bodyparser.json());
app.use(cors());

// Connect To Database
mongoose.connect(mongoUrl, { useMongoClient: true });
// On Connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database`);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Passport Middleware
app.use(passport.initialize());
// app.use(passport.session());
require('./config/auth').passportStrategy(passport);

// Add Routes
const user = require('./routes/user');
app.use('/api/user', user);

const bar = require('./routes/bar');
app.use('/api/bar', bar);

// Index Route

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
