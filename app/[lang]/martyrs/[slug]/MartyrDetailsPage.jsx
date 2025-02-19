"use client";
import React from "react";
import { useGetMartyrsBySlugQuery } from "@/redux/features/julyApi";
import Loading from "@/components/common/Loader";
import Image from "next/image";

const MartyrsDetailsPage = ({ slug, lang }) => {
  const { data: martyr, error, isLoading } = useGetMartyrsBySlugQuery(
    { slug, lang },
    { skip: !slug }
  );

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">Error in data fetching...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Section (Image & Personal Info) */}
        <div className="flex flex-col items-center md:items-start">
          {/* Profile Image */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border border-gray-300">
            <Image
              alt={martyr?.name || "Unknown"}
              src={martyr?.image || "/placeholder.jpg"}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Personal Details */}
          <div className="w-40 md:w-48 mt-2 p-1 text-left">
            <h1 className="text-lg font-bold text-gray-800">{martyr?.name || "Unknown"}</h1>
            <p className="text-gray-600 text-sm">{martyr?.occupation || "N/A"}</p>
            <p className="text-gray-500 text-sm">{martyr?.institution || "N/A"}</p>
            <p className="text-gray-500 text-sm">Date of Death: {martyr?.incident_date || "N/A"}</p>
          </div>
        </div>

        {/* Right Section (Additional Info) */}
        <div className="col-span-2 p-2 bg-[#f6f6f6] rounded-md shadow-sm">
          {/* Age & Place of Birth */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 text-center bg-[#e7e7e7] rounded-md shadow-sm">
              <p className="font-semibold text-gray-700">Age:</p>
              <p className="text-gray-600">{martyr?.age || "N/A"}</p>
            </div>
            <div className="p-3 text-center bg-[#e7e7e7] rounded-md shadow-sm">
              <p className="font-semibold text-gray-700">Place of Birth:</p>
              <p className="text-gray-600">{martyr?.address || "N/A"}</p>
            </div>
          </div>

          {/* Incident Details */}
          {martyr?.incident && (
            <div className="mt-6 p-4 bg-[#e7e7e7] rounded-md shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Incident:</h2>
              <p className="text-gray-700 mt-2">{martyr.incident}</p>
            </div>
          )}

          {/* Biography Section */}
          {martyr?.biography && (
            <div className="mt-6 p-4 bg-[#e7e7e7] rounded-md shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Short Biography:</h2>
              <p className="text-gray-700 mt-2">{martyr.biography}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MartyrsDetailsPage;
