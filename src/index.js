// setting up server
const express = require("express");

const bodyParser = require("body-parser");

const {PORT} = require("./config/serverConfig.js");

const setupAndStartServer = async () => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`server started at port ${PORT}`);
    });

    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
}
setupAndStartServer();
