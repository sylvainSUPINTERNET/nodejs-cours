'use strict';

const express = require('express');
const routerProduct = express.Router();

const productService = require('../../services/product/product.service');


// Exemple for bonus :


const logger = function (req, res, next) {
    console.log('LOGGED');
    next();
};



routerProduct.get('/:id', productService.getProduct);
routerProduct.post('/', productService.createProduct);
routerProduct.get('/', productService.getAllProducts);



/**
 * TODO :
 *  - Rajouter une route / GET (by id) / POST / PUT / DELETE (REST) - pas de bla bla dans l'url, on garde le '/' et le verbe HTTP conduit l'action tout seul
 *  - GET by Id
 *      => Affiché un retour json de l'id passer en paramètre (req.params)
 *      => Faire une vérification:
 *          => Si id !== "toto" : renvoyé une erreur (status : 400 avec un message)
 *          => sinon 200 + message OK
 *  - POST
 *      => Affiché en json le body envoyé (via POSTMAN)
 *  - PUT
 *      => Affiché en json le body envoyé (via POSTMAN)
 *  - DELETE
 *      => Affiché en json juste un message de retour
 *  - BONUS
 *      => Chainé des middlewares : https://expressjs.com/fr/guide/writing-middleware.html
 *      + Mettre les deux fonctions logger / getProduct proprement dans le dossier services
 *
 *
 */







module.exports = routerProduct;
