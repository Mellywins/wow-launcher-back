"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 3000;
var app = express();
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(PORT, function () {
    console.log('App is listening on port 3000! \nClick on : http://localhost:3000/');
});
