'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messages = require('./routes/classifieds');
const port = process.env.PORT || 3000;

app.use('/classifieds',messages);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
