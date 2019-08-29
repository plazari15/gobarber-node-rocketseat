import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // Aplicação pronta para receber json
  }

  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server; MODO ANtIGO

export default new App().server;
