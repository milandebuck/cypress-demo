import * as express from 'express';
import { initCouchDb } from './database/create_db';

class App {
  public express;

  constructor() {
    this.express = express();
    this.initDb();
    this.mountRoutes();
  }

  private initDb(): void {
    initCouchDb().then(() => console.log('database initialized'));
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
  }
}

export default new App().express;
