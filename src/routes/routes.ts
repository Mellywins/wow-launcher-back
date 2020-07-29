import * as express from "express"
import path = require('path')
import db from '../db/db'
export const register = (app: express.Application) => {

    //define routes here
    app.get("/", (req: any, res) => {
        db.query("select * from account")
            .then((e: any) => console.log(e.rows))
            .catch((err: any) => console.log(err));
        res.sendFile(path.join(__dirname + '../../../index.html'))
    })
}