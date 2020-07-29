"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('pg'), Pool = _a.Pool, Client = _a.Client;
var pool = new Pool({
    user: 'melly',
    host: 'localhost',
    database: 'wow',
    password: '1999',
    port: 5400
});
var db = {
    query: function (text, params, callback) {
        return pool.query(text, params, callback);
    }
};
var client = new Client({
    user: 'melly',
    host: 'localhost',
    database: 'wow',
    password: '1999',
    port: 5400
});
// client.connect()
//     .then(() => console.log('connected sucessfully!'))
//     .then(() => client.query('select * from account'))
//     .then((results: any) => console.table(results.rows))
//     .catch((err: any) => console.error(err))
//     .finally(() => client.end())
exports.default = db;
