const express = require("express");
const http = require("http");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const adminRouter = require("./routes/admin/admin.routes");
const shopRouter = require("./routes/shop/shop.routes");
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

server.listen(PORT, () => {
  console.log(`Listening...`);
});
