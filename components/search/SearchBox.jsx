"use client";

import { useState, useRef } from "react";
import { Search, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/features/search/searchSlice";

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSearch = () => {
    const trimmed = query.trim();
    dispatch(setSearchQuery(trimmed)); // Even if empty, dispatch to reset
    console.log("Searching:", trimmed || "Show all");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const openInput = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
    if (query.trim() === "") {
      dispatch(setSearchQuery("")); // Reset on empty search icon click
    }
  };

  const closeInput = () => {
    setQuery("");
    setIsOpen(false);
    dispatch(setSearchQuery("")); // Reset query to show all items
  };

  return (
    <div className="relative flex items-center justify-end w-full max-w-[180px] pr-1">
      {!isOpen && (
        <button
          onClick={openInput}
          className="text-gray-500 hover:text-gray-800 transition"
        >
          <Search className="w-5 h-5" />
        </button>
      )}

      <div
        className={`flex items-center bg-white border rounded-full px-2 py-1 transition-all duration-300 ease-in-out ml-2
          ${isOpen ? "w-full opacity-100" : "w-0 opacity-0 overflow-hidden"}
        `}
      >
        <input
          ref={inputRef}
          type="text"
          className="flex-grow w-3 bg-transparent outline-none text-xs md:text-sm font-semibold text-gray-600 placeholder:text-gray-400"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={closeInput}
          className="text-gray-500 hover:text-red-500 ml-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
