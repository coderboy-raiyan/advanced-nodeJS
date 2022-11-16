const express = require('express');

const app = express();
const middlewares = require('./middlewares');

app.use(middlewares);

module.exports = app;
