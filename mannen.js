var express = require("express");
var app = express();

app.listen(80, () => {
 console.log("port:3000");
});

app.get("/mannen", (req, res, next) => {
  res.json({ "version": "0.0.1" });
});

app.get('/users/:userId/book', function (req, res) {
  res.json({ "book": "Tales from the crypt" });
})

app.post('/users/:userId/book', function (req, res) {
  res.send(req.params)
})
