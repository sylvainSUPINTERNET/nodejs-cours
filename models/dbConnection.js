'use strict';
const { Sequelize } = require('sequelize');


const getConnection = () => {
    return new Sequelize('course', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        //logging: (...msg) => console.log(msg)
    });
};



const db = {
    getConnection
};
module.exports = db;

