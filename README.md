- src/
    index.js // main server file
    models/ [this from sequelize ie when we do npx sequelize init it gives this folder]
            [later sequelize commands add tables/models to it]
    repository/
    controllers/
    middlewares/
    utils/ [extra funtions which are common to all]
    services/
    config/ [this is database connection folder]


    migration/ [added by sequelize helps us to do incrimental changes in our database]
               [push it using db:migrate]


- tests/ [we will add it later]
- temp/


// Note :-
// do npx sequelize init outside the src
// after giving te db info in src/config/config.json
// use seuelize db create command inside the src to create database
// and seuelize db create command inside the src
