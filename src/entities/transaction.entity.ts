import { Category } from './category.entity';

export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

type TransactionsProps = {
  _id?: string;
  amount: number;
  date: Date;
  title: string;
  type: TransactionType;
  category: Category;
};

export class Transaction {
  public _id?: string;
  public amount: number;
  public date: Date;
  public title: string;
  public type: TransactionType;
  public category: Category;

  constructor({ _id, amount, date, title, type, category }: TransactionsProps) {
    this._id = _id;
    this.amount = amount;
    this.date = new Date(date);
    this.title = title;
    this.type = type;
    this.category = new Category(category);
  }
}
