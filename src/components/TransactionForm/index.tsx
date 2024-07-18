"use client";

import { useState } from "react";
import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { twMerge } from "tailwind-merge";
import { addDays, format } from "date-fns";
import { Input } from "../ui/input";

interface TransactionFormProps {}

const categories = [
  { id: "1", name: "Income" },
  { id: "2", name: "Expense" },
];

const TransactionForm: React.FC<TransactionFormProps> = () => {
  const [purpose, setPurpose] = useState("");
  const [sum, setSum] = useState<number | "">("");
  const [date, setDate] = useState<Date>();
  const [category, setCategory] = useState<string>(categories[0].id);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ purpose, sum, date, category });
    try {
      const response = await fetch('http://localhost:8080/transactions/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          purpose,
          categoryId: category,
          userId: '64b9adbc-d4dd-45ed-bdc6-e1e2fb87e2d2',
          sum,
          date,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Transaction added:', data);
      // Reset form fields
      setPurpose('');
      setCategory('');
      setSum(0);
      setDate(undefined);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Purpose</label>
          <Input
            type="text"
            placeholder="Please input your purpose"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Sum</label>
          <Input
            type="number"
            placeholder="Please input the amount"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={sum}
            onChange={(e) => setSum(Number(e.target.value))}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={twMerge(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="flex w-auto flex-col space-y-2 p-2"
            >
              <div className="rounded-md border">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <Select
            onValueChange={(value) => setCategory(value)}
            defaultValue={categories[0].id}
            value={category}
          >
            <SelectTrigger className="mt-1  w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TransactionForm;
