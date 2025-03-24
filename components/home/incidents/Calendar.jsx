const Calendar = ({ selectedDate, setSelectedDate, lang }) => {
  const daysInJuly = 36;
  const startDay = 3; // Monday
  const days =
    lang === "bn"
      ? ["শনি", "রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র"]
      : ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const daysArray = Array.from({ length: daysInJuly }, (_, i) => i + 1);

  return (
    <div className="grid w-full grid-cols-7 gap-2 rounded-lg border bg-white p-4 shadow md:grid-cols-14">
      {/* Header */}
      {days.map((day) => (
        <div
          key={day}
          className="bg-gradient-light flex items-center justify-center rounded-md p-1 text-center text-[10px] font-bold text-white sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]"
        >
          {day}
        </div>
      ))}
      {days.map((day) => (
        <div
          key={day}
          className=" md:block bg-gradient-light flex items-center justify-center rounded-md p-1 text-center text-[10px] font-bold text-white sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]"
        >
          {day}
        </div>
      ))}

      {/* Empty Spaces for Alignment */}
      {Array.from({ length: startDay - 1 }).map((_, i) => (
        <div key={`empty-${i}`} />
      ))}

      {/* Dates */}
      {daysArray.map((day) => (
        <button
          key={day}
          className={`rounded-lg p-1 text-center text-[12px] font-medium transition sm:p-3 sm:text-[14px] md:p-2 lg:p-3 lg:text-[16px] ${
            selectedDate === day
              ? "bg-red-700 text-white"
              : "bg-white hover:bg-gray-200"
          }`}
          onClick={() => setSelectedDate(day)}
        >
          {day < 10
            ? `${Number(0).toLocaleString(lang === "bn" ? "bn-BD" : "en")}${Number(day).toLocaleString(lang === "bn" ? "bn-BD" : "en")}`
            : Number(day).toLocaleString(lang === "bn" ? "bn-BD" : "en")}
        </button>
      ))}
    </div>
  );
};

export default Calendar;
