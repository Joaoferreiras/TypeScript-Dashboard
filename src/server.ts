import express, { json } from 'express';
import 'dotenv/config';

import { setupMongo } from './database';
import { errorHandler } from './middlewares/error.handler';
import { routes } from './routes';

setupMongo().then(() => {
  const app = express();

  app.use(json());
  app.use(routes);
  app.use(errorHandler);
  const port: number = 3334;

  app.listen(port, () => console.log(`🚀 App is runing at port ${port}!`));
});
