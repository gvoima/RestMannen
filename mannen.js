var express = require("express");
var app = express();

app.listen(3000, () => {
 console.log("port:3000");
});

app.get("/mannen", (req, res, next) => {
 res.json({ "version": "0.0.1" });
});
