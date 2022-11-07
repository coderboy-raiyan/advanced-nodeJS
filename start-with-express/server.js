const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer(app);

app.use("/", (req, res, next) => {
  console.log("It always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In the middleware");
  res.send(`<h1>Add Product Page</h1>`);
});

app.use("/", (req, res, next) => {
  console.log("In the middleware");
  res.send(`<h1>Hello Express</h1>`);
});

server.listen(5000, () => {
  console.log("Listening....");
});
