import React from 'react'

interface TableProps {
    className?: string;
    data: {
      purpose: string;
      category: string;
      sum: number;
      date: string;
    }[];
  }

const TransactionTable = ({ data, className }: TableProps) => {
  return (
    <table className={className}>
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
        {data.map((item, index) => (
          <tr key={index} className="border-b">
            <td className="py-2 px-4">{item.purpose}</td>
            <td className="py-2 px-4">{item.category}</td>
            <td className="py-2 px-4">${item.sum}</td>
            <td className="py-2 px-4">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionTable