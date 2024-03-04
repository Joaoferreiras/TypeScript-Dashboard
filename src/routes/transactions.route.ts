import { Router } from 'express';

import { TransactionsController } from '../controllers/transactions.controller';
import { createTransactionSchema } from '../dtos/transactions.dto';
import { TransactionFactory } from '../factories/transactions.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const TransactionsRoutes = Router();

const controller = new TransactionsController(
  TransactionFactory.getServiceInstance(),
);

TransactionsRoutes.post(
  '/',
  validator({
    schema: createTransactionSchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);

TransactionsRoutes.get('/', controller.index);
