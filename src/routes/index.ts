import { Router } from 'express';

import { baseRoutes } from './base.route';
import { categoriesRoutes } from './categories.route';
import { TransactionsRoutes } from './transactions.route';

export const routes = Router();

routes.use('/', baseRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/transactions', TransactionsRoutes);
