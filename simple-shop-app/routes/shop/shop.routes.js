const shopRouter = require("express").Router();
const rootDir = require("../../utils/path");
const path = require("path");
const { products } = require("../admin/admin.routes");

shopRouter.get("/", (req, res) => {
  console.log(products);
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = shopRouter;
