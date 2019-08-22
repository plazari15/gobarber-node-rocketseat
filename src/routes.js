const { Router } = require('express');

const routes = new Router();

routes.get('/', (request, response) => {
    return response.json({message : "Seja bem vindo ao GoBarber"})
});

module.exports = routes;