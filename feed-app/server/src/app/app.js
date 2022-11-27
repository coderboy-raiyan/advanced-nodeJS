const express = require('express');
require('dotenv').config();
const path = require('path');
const db = require('../config/db/connectDb');

const app = express();
const middlewares = require('./middlewares');
const errorHandlers = require('./error');
const routes = require('./routers');

app.use('/images', express.static(path.join(__dirname, '..', 'images')));

db();
// middlewares
app.use(middlewares);

// Routers
app.use(routes);

// Error handlers
app.use(errorHandlers);

module.exports = app;
