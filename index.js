'use strict';
const bodyParser = require('body-parser');

const express = require('express');
const api = express();


const resources = require('./resources/index');
const db = require('./models/dbConnection');
const models = require('./models/index');

// logs
const morgan = require('morgan');
api.use(morgan('combined'));


// config
api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json());

// routes
api.use('/products', resources.routerProduct);


const PORT = 4000;
api.listen(PORT, async () => {

    let sequelize = db.getConnection();

    // Authenticate test
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    // init models
    models.map( async model => {
        await model.sync({ alter: true });
    });




    console.log("API starts : " + PORT)
});



