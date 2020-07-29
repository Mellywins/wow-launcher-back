"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var db_1 = __importDefault(require("./src/db/db"));
var PORT = process.env.PORT || 3000;
var app = express();
app.get('/', function (req, res) {
    db_1.default.query("select * from account")
        .then(function (e) { return console.log(e.rows); })
        .catch(function (err) { return console.log(err); });
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(PORT, function () {
    console.log('App is listening on port 3000! \nClick on : http://localhost:3000/');
});
