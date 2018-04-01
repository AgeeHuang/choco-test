const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Set up Mongoose
mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});

db.once('open', () => {
  console.log('DB connected successfully.');
});

// server side route
require('./server/routes')(app);

// all route not match.
app.use((req, res) => {
  res.status(404).send('');
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}.`);
});
