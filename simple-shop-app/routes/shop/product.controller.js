const products = [];

async function getAddProduct(req, res, next) {
    try {
        res.render('add-product', {
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
async function postAddProduct(req, res, next) {
    try {
        products.push(req.body);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}
async function getProducts(req, res, next) {
    try {
        res.render('shop', {
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
