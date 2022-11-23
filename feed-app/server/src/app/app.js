const express = require('express');
require('dotenv').config();
const db = require('../config/db/connectDb');

const app = express();
const middlewares = require('./middlewares');
const routes = require('./routers');

db();
// middlewares
app.use(middlewares);

// Routers
app.use(routes);
// Error handlers

module.exports = app;
