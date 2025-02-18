
"use client";
import Counter, { Formatter } from "@/components/client/Counter";
import IncomeBarChar from "@/components/client/IncomeBarChar";
import { Card } from "@/components/ui/card";
import { DollarSign, MoveUpRight } from "lucide-react";

const OverallArea = () => {
  return (
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
            </span>
            vs
            <span className="text-zinc-950 font-bold">
              {new Number(4500).toLocaleString()}
            </span>
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
  );
};

export default OverallArea;
