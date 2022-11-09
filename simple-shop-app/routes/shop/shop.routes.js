const shopRouter = require("express").Router();
const rootDir = require("../../utils/path");
const path = require("path");
const { products } = require("../admin/admin.routes");

shopRouter.get("/", (req, res) => {
  console.log(products);
  res.render("shop");
});

module.exports = shopRouter;
