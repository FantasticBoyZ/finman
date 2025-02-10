'use client'
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
    CalendarIcon
} from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type DatePickerType = {
    dateInit: Date;
    className?: string;
}

const DatePicker = ({dateInit, className}: DatePickerType) => {
    const [date, setDate] = useState<Date>(dateInit || new Date());
  return (
    <div className={className}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={twMerge(
              "w-full justify-start text-left font-normal rounded-full",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Choose date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="flex w-auto flex-col space-y-2 p-2"
        >
          <div className="rounded-sm border">
            <Calendar mode="single" selected={date} onSelect={(e) => {console.log(e);
            }} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
