const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function doWork(duration) {
  const start = Date.now();

  while (Date.now() - start < duration) {}
}
app.get("/", (req, res) => {
    
  doWork(5000);
  res.send("hello world");
});

app.listen(port, () => {
  console.log("Listening....");
});
