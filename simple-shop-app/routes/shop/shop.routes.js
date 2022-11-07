const shopRouter = require("express").Router();
const rootDir = require("../../utils/path");
const path = require("path");

shopRouter.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = shopRouter;
