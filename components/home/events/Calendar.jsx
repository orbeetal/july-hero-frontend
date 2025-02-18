import React from "react";

const Calendar = ({ selectedDate, setSelectedDate, lang }) => {
  const daysInJuly = 36;
  const startDay = 1; // Monday
  const days = lang === "bn" ? ["শনি", "রবি", " সোম", "মঙ্গল", " বুধ", "বৃহস", " শুক্র"] : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const daysArray = Array.from({ length: daysInJuly }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-12 gap-2 p-4 bg-white shadow rounded-lg w-full border">
      {/* Header */}
      {/* {days.map((day) => (
        <div key={day} className="text-center flex justify-center items-center text-[10px] sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] bg-gradient-light p-1 rounded-md font-bold text-white">
          {day}
        </div>
      ))} */}

      {/* Empty Spaces for Alignment */}
      {/* {Array.from({ length: startDay - 1 }).map((_, i) => (
        <div key={`empty-${i}`} />
      ))} */}

      {/* Dates */}
      {daysArray.map((day) => (
        <button
          key={day}
          className={`p-1 sm:p-3 md:p-2 lg:p-3 text-[12px] sm:text-[14px] lg:text-[16px] rounded-lg text-center font-medium transition ${
            selectedDate === day
              ? "bg-red-700 text-white"
              : "bg-white hover:bg-gray-200"
          }`}   
          onClick={() => setSelectedDate(day)}
        >
          {day < 10 ? `${Number(0).toLocaleString(lang === "bn" ? "bn-BD" : "en")}${Number(day).toLocaleString(lang === "bn" ? "bn-BD" : "en")}` 
          : Number(day).toLocaleString(lang === "bn" ? "bn-BD" : "en")}
        </button>
      ))}
    </div>
  );
};

export default Calendar;
