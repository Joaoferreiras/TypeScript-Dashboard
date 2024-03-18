import {
  createTransactionDto,
  indexTransactionsDto,
} from '../../dtos/transactions.dto';
import { Transaction } from '../../entities/transaction.entity';
import { TransactionModel } from '../schemas/transactions.schema';

export class TransactionsRepository {
  constructor(private model: typeof TransactionModel) {}

  async create({
    title,
    amount,
    category,
    date,
    type,
  }: Transaction): Promise<Transaction> {
    const createdTrasaction = await this.model.create({
      title,
      amount,
      category,
      date,
      type,
    });

    return createdTrasaction.toObject<Transaction>();
  }

  async index({
    title,
    categoryId,
    beginDate,
    endDate,
  }: indexTransactionsDto): Promise<Transaction[]> {
    const whereParams: Record<string, unknown> = {
      ...(title && { title: { $regex: title, $options: 'i' } }),
      ...(categoryId && { 'category._id': categoryId }),
    };

    if (beginDate || endDate) {
      whereParams.date = {
        ...(beginDate && { $gte: beginDate }),
        ...(endDate && { $gte: endDate }),
      };
    }

    const transactions = await this.model.find(whereParams);

    const transactionsMap = transactions.map((item) =>
      item.toObject<Transaction>(),
    );

    return transactionsMap;
  }
}
