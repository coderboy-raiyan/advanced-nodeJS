const adminRouter = require("express").Router();
const rootDir = require("../../utils/path");
const path = require("path");

const products = [];

adminRouter.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

adminRouter.post("/add-product", (req, res) => {
  products.push(req.body);
  res.redirect("/");
});

module.exports = { adminRouter, products };
