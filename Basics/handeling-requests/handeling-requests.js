const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-type", "text/html");
      res.end(
        `<form action="/message" method="POST"><input name="message"/> <button type="submit">send</button></form>`
      );
      return;

    case "/message":
      if (req.method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          body.push(chunk);
        });
        return req.on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split("=")[1];
          fs.writeFile("message.txt", message, (err) => {
            if (!err) {
              res.statusCode = 302;
              res.setHeader("Location", "/");
              res.end();
            }
          });
        });
      }
      return;

    default:
      break;
  }
});

server.listen(5000, () => {
  console.log("Listening...");
});
