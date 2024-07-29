import { transactionService } from "@/services/transactionService";

import TransactionTableClient from "../client/TransactionTableClient";

interface TableProps {
  page: number;
  pageSize: number;
  className?: string;
}

export default async function TransactionTableServer({ page, pageSize, className }: TableProps) {
  const { data: transactionData, totalCount } = await transactionService.getTransactions(page, pageSize);

  return (
    <TransactionTableClient transactionData={transactionData} totalCount={totalCount} page={page} pageSize={pageSize} className={className} />
  );
}