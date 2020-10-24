'use strict';

const { DataTypes } = require('sequelize');
const db = require('../dbConnection');


const Products = db.getConnection().define('Products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    currency: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Products;
