import Loading from "@/components/common/Loader";
import { useGetEventByIdQuery } from "@/redux/features/julyApi";
import React from "react";

const EventDetails = ({ selectedDate, lang }) => {
// Fetch event details using RTK Query
const { data: event, isLoading, isError } = useGetEventByIdQuery({ selectedDate, lang });

if (isLoading) return <Loading />;
if (isError) return <p className="text-red-500 text-center">Failed to load event details</p>;

return (
  <div className="p-6 bg-white shadow border rounded-lg w-full overflow-hidden">
    <h2 className="text-2xl mb-2 font-bold text-gray-800">{event?.title || "No Event"}</h2>
    <p className="text-gray-600 overflow-y-auto max-h-full text-justify custom-scrollbar leading-loose">
      {event?.description || "There is no event scheduled for this day."}
    </p>
  </div>
);
};

export default EventDetails;
