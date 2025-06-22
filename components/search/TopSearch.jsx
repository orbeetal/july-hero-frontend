"use client";
import React from "react";
import SearchBox from "./SearchBox";

function TopSearch() {
  return (
    <div className="hidden sm:block 950:hidden fixed top-0 right-0 z-50 w-full h-0 sm:h-10 950:h-0 bg-white shadow-md">
      <div className="flex items-center justify-end h-full max-w-7xl mx-auto px-4">
        <SearchBox />
      </div>
    </div>
  );
}

export default TopSearch;
