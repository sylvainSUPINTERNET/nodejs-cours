'use strict';

const product = require('../product/product.model');

const create = (productPayload) => {
    return product.create(productPayload);
};

const getById = (productId) => {
    return product.findByPk(productId);
};


const getAll = () => {
    return product.findAll();
};

module.exports = {
    getById,
    create,
    getAll
};
