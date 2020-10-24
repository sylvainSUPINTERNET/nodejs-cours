'use strict';

const productRepository = require('../../models/repository/product.repository');

const getProduct = async (req, res, next) => {
    const productId = req.params.id;

    try {
        const product =  await productRepository.getById(productId);
        res
            .status(200)
            .json({"error": false, "product": product})
    } catch (e) {
        res
            .status(400)
            .json({"error": true, "message": e})
    }
};


const createProduct = async (req,res,next) => {
    const {body} = req;

    try {
        const createState = await productRepository.create(body);
        res
            .status(200)
            .json({"error": false, "message": createState})
    } catch (e) {
        res
            .status(400)
            .json({"error": true, "message": e
        })
    }
};

const getAllProducts = async (req,res,next) => {
    try {
        const products = await productRepository.getAll();
        res
            .status(200)
            .json({"error": false, "products": products })
    } catch (e) {
        res
            .status(400)
            .json({"error": true, "message": e})
    }
};

module.exports = {
    getProduct,
    createProduct,
    getAllProducts
};
