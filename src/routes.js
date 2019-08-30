import { Router } from 'express';

// Controllers
import UsersController from './app/controllers/UsersController';

const routes = new Router();

routes.post('/users', UsersController.store);
// module.exports = routes;

export default routes;
