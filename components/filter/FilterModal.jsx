"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setOccupationFilter } from "@/redux/features/filter/filterSlice";
import { Blend } from "lucide-react";

const occupations = ["Teacher", "Student", "Doctor", "Engineer", "Other"];

export default function FilterModal() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOccupation, setSelectedOccupation] = useState("");
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleModal = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleApply = () => {
    dispatch(setOccupationFilter(selectedOccupation));
    setIsOpen(false);
  };

  return (
    <div className="h-[48px] py-[2px] w-full z-40">
      <div className="pl-4">
        <button
          ref={buttonRef}
          onClick={toggleModal}
          className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition flex items-center gap-2 space-x-2"
        >
          Filter
          <Blend 
            className="w-4 h-4 text-white" 
            aria-hidden="true"
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={modalRef}
            className="bg-white shadow-lg border rounded-lg max-w-sm w-full mt-2 ml-4 p-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3, ease: "linear" } }}
            exit={{ y: 30, opacity: 0, transition: { duration: 0.3, ease: "linear" } }}
          >
            <h2 className="text-lg font-semibold mb-3">Filter by Occupation</h2>
            <div className="space-y-2 mb-4">
              {occupations.map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="occupation"
                    value={item.toLowerCase()}
                    checked={selectedOccupation === item.toLowerCase()}
                    onChange={(e) => setSelectedOccupation(e.target.value)}
                    className="accent-red-600"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <button
              onClick={handleApply}
              disabled={!selectedOccupation}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
            >
              Apply Filter
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
