import React from "react";

const EventDetails = ({ selectedDate, events }) => {
  const event = events[selectedDate] || {
    title: "No Event",
    description: "There is no event scheduled for this day.",
  };

  return (
    <div className="p-6 bg-white shadow border rounded-lg w-full overflow-hidden">
      {/* <h2 className="text-2xl mb-2 font-bold text-gray-800">{event.title}</h2> */}
      <p className="text-gray-600 overflow-y-auto max-h-full text-justify custom-scrollbar leading-loose">
        {event.description}
      </p>
    </div>
  );
};

export default EventDetails;
