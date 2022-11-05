const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ message: "Working" }));
});

server.listen(5000, () => {
  console.log("Listening.....");
});
