const { getProducts } = require('./product.controller');

const shopRouter = require('express').Router();

shopRouter.get('/', getProducts);

module.exports = shopRouter;
