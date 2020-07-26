"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(3000, function () {
    console.log('App is listening on port 3000! \n Click on : http://localhost:3000/');
});
