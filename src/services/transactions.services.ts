import { StatusCodes } from 'http-status-codes';

import { CategoriesRepository } from '../database/repositories/categories.repository';
import { TransactionsRepository } from '../database/repositories/transactions.repository';
import {
  createTransactionDto,
  indexTransactionsDto,
} from '../dtos/transactions.dto';
import { Transaction } from '../entities/transaction.entity';
import { AppError } from '../errors/app.error';

export class TransactionService {
  constructor(
    private transactionRepository: TransactionsRepository,
    private categoriesRepository: CategoriesRepository,
  ) {}

  async create({
    amount,
    categoryId,
    date,
    title,
    type,
  }: createTransactionDto): Promise<Transaction> {
    // Precia validar se a categoria existe
    const category = await this.categoriesRepository.findById(categoryId);

    if (!category) {
      throw new AppError('Category does not exists.', StatusCodes.NOT_FOUND);
    }

    const transaction = new Transaction({
      title,
      type,
      date,
      category,
      amount,
    });

    const createdTransaction =
      await this.transactionRepository.create(transaction);

    return createdTransaction;
  }

  async index(filters: indexTransactionsDto): Promise<Transaction[]> {
    const transactions = await this.transactionRepository.index(filters);

    return transactions;
  }
}
