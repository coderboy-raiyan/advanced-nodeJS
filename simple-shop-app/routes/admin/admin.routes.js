const adminRouter = require("express").Router();
const rootDir = require("../../utils/path");
const path = require("path");
const { getAddProduct } = require("../../controllers/product.controller");

const products = [];

adminRouter.get("/add-product", getAddProduct);

adminRouter.post("/add-product", (req, res) => {
  products.push(req.body);
  res.redirect("/");
});

module.exports = { adminRouter, products };
