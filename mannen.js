var express = require("express");
var app = express();

// can't run ports under 1024 on netlify (for root reasons)
app.listen(3000, () => {
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
