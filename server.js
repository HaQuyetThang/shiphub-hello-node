const http = require("node:http");

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("ok");
    return;
  }
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("not found");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`hello-node listening on ${port}`);
});
