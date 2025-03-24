import Loading from "@/components/common/Loader";
import { useGetIncidentByIdQuery } from "@/redux/features/julyApi";

const IncidentDetails = ({ selectedDate, lang }) => {
  // Fetch Incident details using RTK Query
  const {
    data: incident,
    isLoading,
    isError,
  } = useGetIncidentByIdQuery({ selectedDate, lang });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <p className="text-center text-red-500">Failed to load incident details</p>
    );

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-white p-6 shadow">
      <h2 className="mb-2 text-2xl font-bold text-gray-800">
        {incident?.title || "No incident"}
      </h2>
      <p className="custom-scrollbar max-h-full overflow-y-auto text-justify leading-loose text-gray-600">
        {incident?.description || "There is no incident scheduled for this day."}
      </p>
    </div>
  );
};

export default IncidentDetails;
