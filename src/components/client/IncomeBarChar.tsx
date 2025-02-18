"use client";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", asset: 1860 },
  { month: "February", asset: 3050 },
  { month: "March", asset: 2370 },
  { month: "April", asset: 1530 },
  { month: "May", asset: 2090 },
  { month: "June", asset: 2140 },
];

const chartConfig = {
  asset: {
    label: "Asset",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const IncomeBarChar = () => {
  return (
    <ChartContainer config={chartConfig} className="h-56">
      <BarChart accessibilityLayer data={chartData}>
        {/* <CartesianGrid vertical={false} /> */}
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="asset" fill="var(--color-asset)" radius={[100,100,0,0]} />
      </BarChart>
    </ChartContainer>
  );
};

export default IncomeBarChar;
