// setting up server
const express = require("express");

const bodyParser = require("body-parser");

const {PORT} = require("./config/serverConfig.js");

const {City} = require("./models/index.js");

const CityRepository = require("./repository/city_repository.js");

const setupAndStartServer = async () => {
    const app = express();
    app.listen(PORT, async () => {
        console.log(`server started at port ${PORT}`);
        
        // //first create a new object
        // const repo = new CityRepository();
        // repo.createCity({name : "new Delhi"});
    });

    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
}
setupAndStartServer();
