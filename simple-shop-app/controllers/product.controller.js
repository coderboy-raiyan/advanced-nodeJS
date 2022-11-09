async function getAddProduct(req, res, next) {
  try {
    res.render("add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAddProduct };
