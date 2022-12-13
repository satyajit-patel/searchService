// setting up server
import express from 'express'

import bodyParser from 'body-parser';

import {PORT} from "./config/serverConfig.js";

const setupAndStartServer = async () => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`server started at port ${PORT}`);
    });

    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
}
setupAndStartServer();
