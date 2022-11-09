const adminRouter = require('express').Router();
const { getAddProduct, postAddProduct } = require('../shop/product.controller');

adminRouter.get('/add-product', getAddProduct);

adminRouter.post('/add-product', postAddProduct);

module.exports = { adminRouter };
