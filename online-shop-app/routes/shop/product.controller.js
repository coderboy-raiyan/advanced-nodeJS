const { Product } = require('../../models/product.model');

async function getAddProduct(req, res) {
    try {
        res.render('admin/add-product', {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true,
        });
    } catch (error) {
        console.log(error);
    }
}
async function postAddProduct(req, res) {
    try {
        const product = new Product({ title: req.body.title });
        product.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}
async function getProducts(req, res) {
    const products = await Product.fetchAll();

    try {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAddProduct, postAddProduct, getProducts };
