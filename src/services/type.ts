export interface Transaction {
  purpose: string;
  category: string;
  sum: number;
  date: string;
}

export interface TransactionInsert {
  purpose: string;
  categoryId: string;
  userId: string;
  sum: number;
  date: string;
}
