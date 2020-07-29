"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv_1 = __importDefault(require("dotenv"));
var routes = __importStar(require("./src/routes/routes"));
//initialize config
dotenv_1.default.config();
//--------------
var PORT = process.env.PORT || 3000;
var app = express();
// mount routes to the application
routes.register(app);
// app.get('/', (req, res) => {
//     db.query("select * from account")
//         .then((e: any) => console.log(e.rows))
//         .catch((err: any) => console.log(err));
//     res.sendFile(path.join(__dirname + '/index.html'))
// });
app.listen(PORT, function () {
    console.log('App is listening on port 3000! \nClick on : http://localhost:3000/');
});
