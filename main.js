var express = require("express");
const path = require('path');
var app = express();
const router = express.Router();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/home.html'));
});
app.get("/home.css", (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/home.css'));
});
app.listen(5000);