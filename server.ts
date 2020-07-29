import express = require('express')
import path = require('path')
import db from './src/db/db'

const PORT = process.env.PORT || 3000;
const app: express.Application = express();
app.get('/', (req, res) => {
    db.query("select * from account")
        .then((e: any) => console.table(e.rows))
        .catch((err: any) => console.log(err));
    res.sendFile(path.join(__dirname + '/index.html'))
});
app.listen(PORT, () => {
    console.log('App is listening on port 3000! \nClick on : http://localhost:3000/')
})