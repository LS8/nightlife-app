const express = require('express');
const app = express();

// Add Middleware
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const mongoose = require('mongoose');
// Connect To Database
mongoose.connect('mongodb://localhost:27017/nightlife', { useMongoClient: true });
// On Connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database`);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

// Add Routes
const user = require('./routes/user');
app.use('/api/user', user);

// Index Route

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});