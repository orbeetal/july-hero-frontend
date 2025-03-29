import Loading from "@/components/common/Loader";
import { useGetIncidentByIdQuery } from "@/redux/features/julyApi";
import DOMPurify from 'dompurify';

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
      <p className="text-center text-red-500">
        Failed to load incident details
      </p>
    );

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-white p-6 shadow">
      <h2 className="mb-2 text-2xl font-bold text-gray-800">
        {incident?.title || "No incident"}
      </h2>
      <div
        className="prose custom-scrollbar max-h-full overflow-y-auto max-w-full"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            incident?.description ||
              "There is no incident scheduled for this day.",
          ),
        }}
      ></div>
    </div>
  );
};

export default IncidentDetails;
