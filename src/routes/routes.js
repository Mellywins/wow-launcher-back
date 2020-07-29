"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
var path = require("path");
var db_1 = __importDefault(require("../db/db"));
exports.register = function (app) {
    //define routes here
    app.get("/", function (req, res) {
        db_1.default.query("select * from account")
            .then(function (e) { return console.log(e.rows); })
            .catch(function (err) { return console.log(err); });
        res.sendFile(path.join(__dirname + '../../../index.html'));
    });
};
