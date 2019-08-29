import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    name: 'peDRO LAZAZRI',
    email: 'pedro.lazari@skmd.com',
    password_hash: 'isdjdjads',
  });
  return response.json({ message: `User ${user.id} criado com sucesso` });
});

// module.exports = routes;

export default routes;
