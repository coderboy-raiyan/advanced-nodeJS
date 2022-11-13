const shopRouter = require('express').Router();
const { getProducts } = require('./product.controller');

shopRouter.get('/', getProducts);

module.exports = shopRouter;
