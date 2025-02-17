"use client";
import Counter, { Formatter } from "@/components/client/Counter";
import DatePicker from "@/components/client/DatePicker";
import IncomeBarChar from "@/components/client/IncomeBarChar";
import Pagination from "@/components/client/Pagination";
import SearchInput from "@/components/client/Search/SearchInput";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { DollarSign, MoveUpRight, Pencil } from "lucide-react";

const Dashboard2 = () => {
  return (
    <div className="font-Poppins px-5 py-3 flex flex-wrap gap-4 w-full h-full">
      <div className=" w-full h-10 flex justify-between rounded-lg ">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <SearchInput />
      </div>
      <Card className="bg-white w-full min-h-96 flex flex-wrap justify-between gap-4 p-6 shadow-lg">
        <div className="w-full flex flex-wrap justify-between">
          <div className="bg-white min-w-fit min-h-56 flex flex-col ">
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
              Accounting
            </h3>
            <p className="text-base font-semibold text-slate-600">
              Aug 1, 2024 - Aug 31,2024
            </p>
            <p className="text-base font-bold text-slate-600 mt-6">
              AVG. Monthly Income
            </p>
            <Counter
              direction="up"
              format={Formatter.currency}
              targetValue={5000.1234}
              className="text-4xl font-bold mt-2"
            />
            <p className="text-base font-semibold text-slate-600 mt-6 flex gap-1">
              <span className="text-green-500 flex">
                <MoveUpRight className="size-6" />
                10%
              </span>{" "}
              vs
              <span className="text-zinc-950 font-bold">
                {" "}
                {new Number(4500).toLocaleString()}
              </span>{" "}
              previous month
            </p>
          </div>
          <div className="bg-white w-auto min-w-fit max-w-[50%] min-h-56 flex-1 ">
            <IncomeBarChar />
          </div>
        </div>
        <div className="bg-white border-t-[1px] border-slate-200 w-full min-h-28 flex md:flex-nowrap flex-wrap gap-4">
          <div className="w-1/2 flex items-center gap-4">
            <div className="relative p-[6px] rounded-full bg-gradient-to-t from-green-100 via-green-300 to-green-500 shadow-lg">
              <div className="p-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                <DollarSign className="text-green-600 size-10" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Counter
                direction="up"
                format={Formatter.currency}
                targetValue={89500}
                className="text-3xl font-semibold"
              />
              <p className="font-semibold text-slate-600">Total Income</p>
            </div>
          </div>
          <div className="w-1/2 flex items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="relative p-[6px] rounded-full bg-gradient-to-t from-rose-100 via-rose-300 to-rose-500 shadow-lg">
                <div className="p-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <DollarSign className="text-rose-600 size-10" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Counter
                  direction="up"
                  format={Formatter.currency}
                  targetValue={89500}
                  className="text-3xl font-semibold"
                />
                <p className="font-semibold text-slate-600">Total Expense</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className="bg-white w-full flex-1 pb-6 shadow-lg">
        <div className="flex items-center justify-between p-6">
          <h3 className="font-bold text-2xl">Transaction History</h3>
          <div>
            <DatePicker
              dateInit={new Date()}
              className="w-48 rounded-full border-2 border-slate-300"
            />
          </div>
        </div>
        <div className="">
          <table className="w-full bg-white p-6">
            <thead>
              <tr className=" border-t border-t-slate-300 border-b border-b-slate-300  font-semibold text-lg text-left">
                <th className="py-2 pl-6 pr-4">Transactions</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 pl-4 pr-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {transactionData.map((item, index) => ( */}
              <tr className="border-b py-2 ">
                <td className="py-2 pl-6 pr-4 font-semibold">purpose</td>
                <td className="px-4 font-medium">
                  -$ {new Number(450).toLocaleString()}
                </td>
                <td className="px-4 font-medium">date</td>
                <td className="px-4 font-medium">
                  <Badge variant="danger">Category</Badge>
                </td>
                <td className="py-2 pl-4 pr-6 flex justify-center">
                  <Pencil />
                </td>
              </tr>
              <tr className="border-b py-2 ">
                <td className="py-2 pl-6 pr-4 font-semibold">purpose</td>
                <td className="px-4 font-medium text-green-400">
                  +$ {new Number(450).toLocaleString()}
                </td>
                <td className="px-4 font-medium">date</td>
                <td className="px-4 font-medium">
                  <Badge variant="success">Category</Badge>
                </td>
                <td className="py-2 pl-4 pr-6 flex justify-center">
                  <Pencil />
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
          <Pagination currentPage={1} totalPages={5} />
        </div>
      </Card>
    </div>
  );
};

export default Dashboard2;
