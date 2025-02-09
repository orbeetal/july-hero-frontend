import React from "react";

const EventDetails = ({ selectedDate, events }) => {
  const event = events[selectedDate] || {
    title: "No Event",
    description: "There is no event scheduled for this day.",
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full md:w-1/2 h-full overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800">{event.title}</h2>
      <p className="text-gray-600 mt-2 overflow-y-auto max-h-full text-justify custom-scrollbar pb-6">
        {event.description}
      </p>
    </div>
  );
};

export default EventDetails;
