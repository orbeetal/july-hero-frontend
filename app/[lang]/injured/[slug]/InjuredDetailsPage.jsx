"use client";
import Loading from "@/components/common/Loader";
import { useGetInjuredBySlugQuery } from "@/redux/features/julyApi";
import Image from "next/image";

const InjuredDetailsPage = ({ slug, lang }) => {
  const {
    data: injured,
    error,
    isLoading,
  } = useGetInjuredBySlugQuery({ slug, lang }, { skip: !slug });

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
              alt={injured?.name || "Unknown"}
              src={injured?.image || "/placeholder.jpg"}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Personal Details */}
          <div className="mt-2 w-40 p-1 text-left md:w-48">
            <h1 className="text-lg font-bold text-gray-800">
              {injured?.name || "Unknown"}
            </h1>
            <p className="text-sm text-gray-600">
              {injured?.occupation || "N/A"}
            </p>
            <p className="text-sm text-gray-500">
              {injured?.institution || "N/A"}
            </p>
            <p className="text-sm text-gray-500">
              Incident Date: {injured?.incident_date || "N/A"}
            </p>
          </div>
        </div>

        {/* Right Section (Additional Info) */}
        <div className="col-span-2 rounded-md bg-[#f6f6f6] p-2 shadow-sm">
          {/* Age & Address */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md bg-[#e7e7e7] p-3 text-center shadow-sm">
              <p className="font-semibold text-gray-700">Age:</p>
              <p className="text-gray-600">{injured?.age || "N/A"}</p>
            </div>
            <div className="rounded-md bg-[#e7e7e7] p-3 text-center shadow-sm">
              <p className="font-semibold text-gray-700">Address:</p>
              <p className="text-gray-600">{injured?.address || "N/A"}</p>
            </div>
          </div>

          {/* Incident Details */}
          {injured?.incident && (
            <div className="mt-6 rounded-md bg-[#e7e7e7] p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Incident Details:
              </h2>
              <p className="mt-2 text-gray-700">{injured.incident}</p>
            </div>
          )}

          {/* Biography Section */}
          {injured?.biography && (
            <div className="mt-6 rounded-md bg-[#e7e7e7] p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Biography:
              </h2>
              <p className="mt-2 text-gray-700">{injured.biography}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InjuredDetailsPage;
