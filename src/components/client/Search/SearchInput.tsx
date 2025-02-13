"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Filter, Search } from "lucide-react";
import { AdvancedSearchModal } from "./AdvancedSearchModal";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", searchQuery);
  };

  const openAdvancedSearch = () => {
    // Implement logic to open advanced search modal here
    console.log("Opening advanced search modal");
  };

  return (
    <TooltipProvider>
      <form
        onSubmit={handleSearch}
        className="flex w-full max-w-sm items-center space-x-2"
      >
        <Input
          type="search"
          placeholder="Search by name of transaction..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="button" size="icon" onClick={handleSearch}>
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Search</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <AdvancedSearchModal
          onSearch={(filters) => {
            // Here you would typically handle the search operation
            console.log("Search filters:", filters);
          }}
        />
      </form>
    </TooltipProvider>
  );
}
