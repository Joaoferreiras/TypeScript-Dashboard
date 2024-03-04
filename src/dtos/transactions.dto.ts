import { z } from 'zod';

import { TransactionType } from '../entities/transaction.entity';

export const createTransactionSchema = {
  amount: z.number().int().positive(),
  title: z.string(),
  date: z.coerce.date(),
  type: z.nativeEnum(TransactionType),
  categoryId: z.string(),
};

const createTransactionObject = z.object(createTransactionSchema);

export type createTransactionDto = z.infer<typeof createTransactionObject>;
