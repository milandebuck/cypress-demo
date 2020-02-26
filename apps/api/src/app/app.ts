import * as bodyParser from 'body-parser';
import * as express from 'express';
import todoController from './controllers/todo.controller';
import { initCouchDb } from './database/create_db';

const app = express();

(async () => {
  app.use(bodyParser.json());

  await initCouchDb();
  console.log('database initialized');

  app.use('', [todoController]);
  console.log('routes initialized');
})()
  .then(() => console.log('app ready'))
  .catch(console.error);

export default app;
