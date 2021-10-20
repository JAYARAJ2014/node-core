process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
//is the file being executed in master mode ?
if (cluster.isMaster) {
  console.log(`cluster.isMaster = ${cluster.isMaster}`);
  cluster.fork();
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
} else {
  const express = require("express");
  const app = express();
  const crypto = require("crypto");
  const port = process.env.PORT || 3000;
  console.log(`cluster.isMaster = ${cluster.isMaster}`);

  // function doWork(duration) {
  //   const start = Date.now();
  //   while (Date.now() - start < duration) {}
  // }
  app.get("/", (req, res) => {
    // doWork(5000);
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("hello world");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("This was fast");
  });
  app.listen(port, () => {
    console.log("Listening....@ port: " + port);
  });
}
