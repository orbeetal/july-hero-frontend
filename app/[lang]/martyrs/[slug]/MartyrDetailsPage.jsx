"use client";
import Loading from "@/components/common/Loader";
import { useGetMartyrsBySlugQuery } from "@/redux/features/julyApi";
import Image from "next/image";

const MartyrsDetailsPage = ({ slug, lang }) => {
  const {
    data: martyr,
    error,
    isLoading,
  } = useGetMartyrsBySlugQuery({ slug, lang }, { skip: !slug });

  if (isLoading) return <Loading />;
  if (error)
    return (
      <p className="text-center text-red-500">Error in data fetching...</p>
    );

  return (
    <div className="mx-auto max-w-4xl bg-white p-4 md:p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Left Section (Image & Personal Info) */}
        <div className="flex flex-col items-center md:items-start">
          {/* Profile Image */}
          <div className="relative h-40 w-40 overflow-hidden rounded-lg border border-gray-300 md:h-48 md:w-48">
            <Image
              alt={martyr?.name || "Unknown"}
              src={martyr?.image || "/placeholder.jpg"}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Personal Details */}
          <div className="mt-2 w-40 p-1 text-left md:w-48">
            <h1 className="text-lg font-bold text-gray-800">
              {martyr?.name || "Unknown"}
            </h1>
            <p className="text-sm text-gray-600">
              {martyr?.occupation || "N/A"}
            </p>
            <p className="text-sm text-gray-500">
              {martyr?.institution || "N/A"}
            </p>
            <p className="text-sm text-gray-500">
              Date of Death: {martyr?.incident_date || "N/A"}
            </p>
          </div>
        </div>

        {/* Right Section (Additional Info) */}
        <div className="col-span-2 rounded-md bg-[#f6f6f6] p-2 shadow-sm">
          {/* Age & Place of Birth */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md bg-[#e7e7e7] p-3 text-center shadow-sm">
              <p className="font-semibold text-gray-700">Age:</p>
              <p className="text-gray-600">{martyr?.age || "N/A"}</p>
            </div>
            <div className="rounded-md bg-[#e7e7e7] p-3 text-center shadow-sm">
              <p className="font-semibold text-gray-700">Place of Birth:</p>
              <p className="text-gray-600">{martyr?.address || "N/A"}</p>
            </div>
          </div>

          {/* Incident Details */}
          {martyr?.incident && (
            <div className="mt-6 rounded-md bg-[#e7e7e7] p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Incident:</h2>
              <p className="mt-2 text-gray-700">{martyr.incident}</p>
            </div>
          )}

          {/* Biography Section */}
          {martyr?.biography && (
            <div className="mt-6 rounded-md bg-[#e7e7e7] p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Short Biography:
              </h2>
              <p className="mt-2 text-gray-700">{martyr.biography}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MartyrsDetailsPage;
