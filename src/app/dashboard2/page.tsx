import IncomeBarChar from "@/components/client/IncomeBarChar";
import { Card } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";


const Dashboard2 = () => {
  return (
    <div className="font-Poppins bg-green-600 px-5 py-3 flex flex-wrap gap-4 w-full h-full">
      <div className=" w-full h-10 flex justify-between rounded-lg ">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <div>Input Search</div>
      </div>
      <Card className="bg-blue-500 w-full h-96 flex flex-wrap justify-between gap-4 p-4">
        <div className="bg-white w-1/2 h-56 flex-1 flex flex-col ">
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            Accounting
          </h3>
          <p className="text-base font-semibold text-slate-600">
            Aug 1, 2024 - Aug 31,2024
          </p>
          <p className="text-base font-bold text-slate-600 mt-6">
            AVG. Monthly Income
          </p>
          <p className="text-4xl font-bold mt-2">
            $ {new Number(5000.01).toLocaleString()}
          </p>
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
        <div className="bg-yellow-800 w-1/2 h-56 flex-1">
          <IncomeBarChar />
        </div>
        <div className="bg-yellow-800 w-full h-28 flex justify-around">
          <div>Total Income</div>
          <div>Total Expense</div>
        </div>
      </Card>
      <Card className="bg-blue-500 w-full h-48 flex-1"></Card>
    </div>
  );
};

export default Dashboard2;
