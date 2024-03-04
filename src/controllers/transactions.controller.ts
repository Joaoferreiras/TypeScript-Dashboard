import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { createTransactionDto } from '../dtos/transactions.dto';
import { TransactionService } from '../services/transactions.services';

export class TransactionsController {
  constructor(private transactionService: TransactionService) {}

  create = async (
    req: Request<unknown, unknown, createTransactionDto>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { title, amount, categoryId, date, type } = req.body;

      const result = await this.transactionService.create({
        title,
        amount,
        categoryId,
        date,
        type,
      });

      return res.status(StatusCodes.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  };
}
