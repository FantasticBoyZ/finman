"use client"; // This directive is required for client-side code

import React, { useEffect, useState } from "react";
import { Transaction } from "@/services/type";
import { useRouter } from "next/navigation";

interface TableProps {
  transactionData: Transaction[];
  totalCount: number;
  page: number;
  pageSize: number;
  className?: string;
}

const TransactionTableClient: React.FC<TableProps> = ({ transactionData, totalCount, page, pageSize, className }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const router = useRouter();

  const totalPages = Math.ceil(totalCount / pageSize);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      router.push(`/dashboard?page=${newPage}`);
    }
  };


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
        <div className="flex justify-center mt-4">
          <button
            className="py-2 px-4 bg-gray-300 text-gray-600 font-bold uppercase text-sm"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="py-2 px-4 text-gray-600 font-bold uppercase text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="py-2 px-4 bg-gray-300 text-gray-600 font-bold uppercase text-sm"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TransactionTableClient;