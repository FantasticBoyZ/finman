"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Filter } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AdvancedSearchModalProps {
  onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  transaction: string;
  minAmount: string;
  maxAmount: string;
  date: Date | undefined;
  category: string;
}

export function AdvancedSearchModal({ onSearch }: AdvancedSearchModalProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    transaction: "",
    minAmount: "",
    maxAmount: "",
    date: undefined,
    category: "",
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="button" size="icon" onClick={handleSearch}>
                <Filter className="h-4 w-4" />
                <span className="sr-only">Advanced Search</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Advanced Search</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Advanced Search</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="transaction" className="text-right">
              Transaction
            </Label>
            <Input
              id="transaction"
              className="col-span-3"
              placeholder="Search with transaction description..."
              value={filters.transaction}
              onChange={(e) =>
                setFilters({ ...filters, transaction: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="minAmount" className="text-right">
              Min Amount
            </Label>
            <Input
              id="minAmount"
              type="number"
              className="col-span-3"
              placeholder="Search with min amount..."
              value={filters.minAmount}
              onChange={(e) =>
                setFilters({ ...filters, minAmount: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="maxAmount" className="text-right">
              Max Amount
            </Label>
            <Input
              id="maxAmount"
              type="number"
              className="col-span-3"
              placeholder="Search with max amount..."
              value={filters.maxAmount}
              onChange={(e) =>
                setFilters({ ...filters, maxAmount: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`col-span-3 ${
                    !filters.date && "text-muted-foreground"
                  }`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.date ? (
                    format(filters.date, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={filters.date}
                  onSelect={(date) => setFilters({ ...filters, date })}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Select
              onValueChange={(value) =>
                setFilters({ ...filters, category: value })
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Search with category..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="utilities">Utilities</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleSearch}>Search</Button>
      </DialogContent>
    </Dialog>
  );
}
