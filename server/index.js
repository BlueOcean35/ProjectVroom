const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const morgan = require("morgan");
const axios = require('axios');
require('dotenv').config();
const { router } = require('./Routes/Routes');
const API_KEY = 'AIzaSyC4JTb8HXtNdYA6ero9OZ5AZSVB7BUGFpk';

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/maps/*', function (req, res, next) {
  const url = `https://maps.googleapis.com${req.url}&key=${API_KEY}`;
  axios.get(url)
    .then((response) => {
      console.log('successful!');
      res.status(response.status).send(response.data.results);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at Port ${port}`);
});


