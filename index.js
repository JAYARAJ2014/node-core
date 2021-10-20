const express = require("express");
const app = express();
const crypto = require("crypto");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(Date.now() + " GET fired");
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
