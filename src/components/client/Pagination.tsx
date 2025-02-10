"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
type PaginationType = {
  className?: string;
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ className, currentPage, totalPages }: PaginationType) => {
  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      <button
        className="py-2 px-4 font-semibold text-sm flex items-center hover:bg-slate-200 rounded-lg"
        disabled={currentPage === 1}
        // onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft />
        Previous
      </button>
      <ul className="flex gap-2">
        {[1, 2, 3, 4, 5].map((page) => (
          <li key={page}>
            <Button
              className={twMerge(
                "h-12 w-12 bg-transparent text-primary hover:bg-sky-100 hover:text-sky-500 rounded-full",
                page === currentPage ? "bg-sky-200 text-sky-500" : ""
              )}
            >
              {page}
            </Button>
          </li>
        ))}
      </ul>

      <button
        className="py-2 px-4 font-semibold text-sm flex items-center hover:bg-slate-200 rounded-lg"
        disabled={currentPage === totalPages}
        // onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
