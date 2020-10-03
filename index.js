'use strict';
const bodyParser = require('body-parser');

const express = require('express');
const api = express();


const resources = require('./resources/index');

// config
api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json())

// routes
api.use('/products', resources.routerProduct);


const PORT = 4000
api.listen(PORT, () => {
    console.log("API starts : " + PORT)
});



