import { transactionService } from "@/services/transactionService";
import { Transaction } from "@/services/type";
import React, { useCallback, useEffect, useState } from "react";

interface TableProps {
  className?: string;
}


export default async function TransactionTable({ className }: TableProps) {
  const pageSize = 10;
  const transactionData = (await transactionService.getTransactions(1,  pageSize)).data;
  // const [transactionData, setTransactionData] = useState<Transaction[]>([]);
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const pageSize = 10;

  // // TODO: add isLoading
  // const fetchTransactionData = useCallback(async () => {
  //   try {
  //     const { data, totalCount } = await transactionService.getTransactions(
  //       page,
  //       pageSize
  //     );
  //     setTransactionData(data);
  //     setTotalPages(Math.ceil(totalCount / pageSize));
  //   } catch (error) {
  //     console.error("Error fetching transaction data:", error);
  //   }
  // }, [page]);

  // useEffect(() => {
  //   fetchTransactionData();
  // }, [fetchTransactionData]);

  // const handlePageChange = (newPage: number) => {
  //   if (newPage >= 1 && newPage <= totalPages) {
  //     setPage(newPage);
  //   }
  // };

  return (
    <>
      <div className={className}>
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">
                Purpose
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">
                Category
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">
                Sum
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{item.purpose}</td>
                <td className="py-2 px-4">{item.category}</td>
                <td className="py-2 px-4">${item.sum}</td>
                <td className="py-2 px-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="flex justify-center mt-4">
          <button
            className="py-2 px-4 bg-gray-300 text-gray-600 font-bold uppercase text-sm"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
          <span className="py-2 px-4 text-gray-600 font-bold uppercase text-sm">
            Page {page} of {totalPages}
          </span>
          <button
            className="py-2 px-4 bg-gray-300 text-gray-600 font-bold uppercase text-sm"
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        </div> */}
      </div>
    </>
  );
};

