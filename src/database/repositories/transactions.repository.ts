import { createTransactionDto } from '../../dtos/transactions.dto';
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

  async index(): Promise<Transaction[]> {
    const transactions = await this.model.find();

    const transactionsMap = transactions.map((item) =>
      item.toObject<Transaction>(),
    );

    return transactionsMap;
  }
}
