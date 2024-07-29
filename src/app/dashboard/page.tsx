import LineChart from "@/components/LineChart";
import MoneyCard from "@/components/MoneyCard";
import PieChart from "@/components/PieChart";
import TransactionForm from "@/containers/TransactionForm";
import { ChartData } from "chart.js";
import { Metadata } from "next";
import MoneyIcon from "./assets/money-svgrepo-com.svg";
import { Suspense } from "react";
import Loading from "./loading";
import TransactionTableServer from "@/components/server/TransactionTableServer";

const data: ChartData<"pie", number[], string> = {
  labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Others"],
  datasets: [
    {
      data: [1200, 600, 300, 150, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
    },
  ],
};

const dataLineChart: ChartData<"line", number[], string> = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Income",
      data: [
        3000, 3200, 4000, 4200, 4500, 4800, 5000, 5200, 5400, 5600, 5800, 6000,
      ],
      borderColor: "#36A2EB",
      backgroundColor: "#36A2EB80",
      fill: true,
    },
    {
      label: "Expense",
      data: [
        2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600,
      ],
      borderColor: "#FF6384",
      backgroundColor: "#FF638480",
      fill: true,
    },
  ],
};

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard({
  params,
  searchParams,
}: {
  params?: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const initialPage = 1;
  const pageSize = 10;
  let pageNumber = initialPage;

  if (!!searchParams && typeof searchParams.page === 'string') {
    pageNumber = parseInt(searchParams.page, 10);
  } else if (!!searchParams && Array.isArray(searchParams.page)) {
    pageNumber = parseInt(searchParams.page[0], 10);
  }

  if (isNaN(pageNumber)) {
    pageNumber = initialPage;
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-b-gray-500">
        <MoneyCard
          category="Balance"
          iconSrc={MoneyIcon}
          money="1,000,000,000"
          className="bg-green-600 h-40"
        />
        <div className="h-[240px]">
          <LineChart data={dataLineChart} />
        </div>

        <div className="h-[240px]">
          <PieChart data={data} />
        </div>
      </div>
      <div className="flex gap-6">
        <Suspense fallback={<Loading />}>
          <TransactionTableServer
            page={isNaN(pageNumber) ? initialPage : pageNumber}
            pageSize={pageSize}
            className="w-2/3 p-4"
          />
        </Suspense>
        <div className="w-1/3 p-4">
          <TransactionForm />
        </div>
      </div>
    </div>
  );
}
