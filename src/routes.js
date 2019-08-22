import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) => {
    return response.json({message : "Seja bem vindo ao GoBarber"})
});

//module.exports = routes;

export default routes