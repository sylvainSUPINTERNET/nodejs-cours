'use strict';
const express = require('express');
const api = express();

const resources = require('./resources/index');

api.use('/products', resources.routerProduct);


api.listen(4000, () => {
    console.log("api starts : " + 4000)
});



