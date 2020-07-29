import express = require('express')
import path = require('path')
import dotenv from 'dotenv'
import * as routes from './src/routes/routes'

//initialize config
dotenv.config();
//--------------

const PORT = process.env.PORT || 3000;
const app: express.Application = express();

// mount routes to the application
routes.register(app);
//--------------
app.listen(PORT, () => {
    console.log('App is listening on port 3000! \nClick on : http://localhost:3000/')
})