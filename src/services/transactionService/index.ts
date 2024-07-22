import { Transaction, TransactionInsert } from "../type";

const API_BASE_URL = 'http://localhost:8080'; // Change this to your backend URL

export const transactionService = {
  async getTransactions(page: number, pageSize: number): Promise<{data: Transaction[], totalCount: number}> {
    const response = await fetch(`${API_BASE_URL}/transactions?page=${page}&pageSize=${pageSize}`);
    if (!response.ok) {
      throw new Error('Error fetching transactions');
    }
    return response.json();
  },

  async addTransaction(transaction: TransactionInsert): Promise<TransactionInsert> {
    const response = await fetch(`${API_BASE_URL}/transactions/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });

    if (!response.ok) {
      throw new Error('Error adding transaction');
    }

    return response.json();
  },
};