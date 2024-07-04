import MoneyCard from "@/components/MoneyCard";
import MoneyIcon from "./assets/money-svgrepo-com.svg";
import React from "react";
import TransactionForm from "@/components/TransactionForm";
import { ChartData } from "chart.js";
import PieChart from "@/components/PieChart";

const data: ChartData<"pie", number[], string> = {
  labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Others"],
  datasets: [
    {
      data: [1200, 600, 300, 150, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="flex gap-4 mb-6">
        <MoneyCard
          category="Balance"
          iconSrc={MoneyIcon}
          money="1,000,000,000"
          className="bg-green-600"
        />

        <div className="h-[240px]">
          <PieChart data={data} />
        </div>
      </div>
      <div className="flex gap-6">
        <table className="min-w-[60%] bg-white">
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
            <tr className="border-b">
              <td className="py-2 px-4">Grocery Shopping</td>
              <td className="py-2 px-4">Expense</td>
              <td className="py-2 px-4">$150</td>
              <td className="py-2 px-4">2024-06-01</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Monthly Salary</td>
              <td className="py-2 px-4">Income</td>
              <td className="py-2 px-4">$5000</td>
              <td className="py-2 px-4">2024-06-01</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Electricity Bill</td>
              <td className="py-2 px-4">Expense</td>
              <td className="py-2 px-4">$100</td>
              <td className="py-2 px-4">2024-06-05</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Freelance Project</td>
              <td className="py-2 px-4">Income</td>
              <td className="py-2 px-4">$750</td>
              <td className="py-2 px-4">2024-06-07</td>
            </tr>
          </tbody>
        </table>
        <div className="min-w-[40%]">
          <TransactionForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
