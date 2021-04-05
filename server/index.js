const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const morgan = require("morgan");
require('dotenv').config();

const { router } = require('./Routes/Routes');

app.use(morgan('dev'));
app.use(express.json());

app.use('/', router);

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(port, () => {
  console.log(`Example app listening at Port ${port}`);
});


