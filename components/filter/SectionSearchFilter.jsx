"use client";

import { useState } from "react";
import { useGetMartyrFiltersQuery } from "@/redux/features/filter/filterApi";
import { Filter, Search, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { clearAllFilters } from "@/redux/features/filter/filterSlice";

export default function SearchFilter({
  sectionSearch,
  setSectionSearch,
  sectionFilters,
  setSectionFilters,
  dictionary,
  lang,
  category,
}) {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetMartyrFiltersQuery({ lang, category });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (category, value) => {
    const currentValues = sectionFilters[category] || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    setSectionFilters({
      ...sectionFilters,
      [category]: updatedValues,
    });
  };

  const handleResetFilters = () => {
    setSectionFilters({});
    setSectionSearch("");
    dispatch(clearAllFilters()); // clear global Redux filters too
  };

  return (
    <>
      {/* Search + Filter Bar */}
      <div className="container flex justify-between items-center mb-4 px-4 gap-2 flex-wrap">
        {/* Search Input */}
        <div className="flex items-center gap-2 bg-white border border-gray-300 rounded px-3 py-2 w-full sm:w-72">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            value={sectionSearch}
            onChange={(e) => setSectionSearch(e.target.value)}
            placeholder={dictionary.searchPlaceholder || "Search martyrs..."}
            className="w-full text-sm focus:outline-none"
          />
          {sectionSearch && (
            <button onClick={() => setSectionSearch("")} className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1 text-sm px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          <Filter size={16} />
          {dictionary.filter || "Filter"}
        </button>
      </div>

      {/* Filter Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4">
              {dictionary.filterOptions || "Filter Options"}
            </h2>

            {!isLoading && data && Object.keys(data).map((category) => (
              <div key={category} className="mb-4">
                <h3 className="text-sm font-semibold mb-2 capitalize">
                  {dictionary[category] || category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data[category].map((item) => (
                    <label key={item} className="text-sm flex items-center gap-1">
                      <input
                        type="checkbox"
                        value={item}
                        checked={sectionFilters[category]?.includes(item) || false}
                        onChange={() => handleChange(category, item)}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-6 flex justify-between flex-wrap gap-2">
              <button
                onClick={handleResetFilters}
                className="text-sm px-4 py-2 rounded bg-red-100 text-red-700 hover:bg-red-200"
              >
                {dictionary.resetFilters || "Reset Filters"}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="text-sm px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                {dictionary.close || "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
