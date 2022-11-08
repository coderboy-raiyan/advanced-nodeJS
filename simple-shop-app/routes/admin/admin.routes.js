const adminRouter = require("express").Router();
const rootDir = require("../../utils/path");
const path = require("path");

const products = [];

adminRouter.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

adminRouter.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = adminRouter;
