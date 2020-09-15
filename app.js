/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/router');

const app = express();
const port = process.env.PORT || 3344;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Accept, Origin, Content-Type, access_token',
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use('/api', router);

mongoose.connect('mongodb://localhost:27017/InfluencerStreamingDB', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}).catch((error) => {
  console.log(error);
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error(`Error while connecting to DB: ${error.message}`);
});
db.once('open', () => {
  console.log('Influencer Stream DB connected successfully!');
});
