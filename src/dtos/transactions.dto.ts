import { z } from 'zod';

import { TransactionType } from '../entities/transaction.entity';

export const createTransactionSchema = {
  amount: z.number().int().positive(),
  title: z.string(),
  date: z.coerce.date(),
  type: z.nativeEnum(TransactionType),
  categoryId: z.string().length(24),
};

const createTransactionObject = z.object(createTransactionSchema);

export type createTransactionDto = z.infer<typeof createTransactionObject>;

export const indexTransactionSchema = {
  title: z.string().optional(),
  categoryId: z.string().length(24).optional(),
  beginDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
};

const indexTransactionsObject = z.object(indexTransactionSchema);
export type indexTransactionsDto = z.infer<typeof indexTransactionsObject>;
