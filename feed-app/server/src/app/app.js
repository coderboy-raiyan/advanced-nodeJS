const express = require('express');

const app = express();
const middlewares = require('./middlewares');
const routes = require('./routers');

// middlewares
app.use(middlewares);
// Routers
app.use(routes);
// Error handlers

module.exports = app;
