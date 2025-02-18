"use client";
import React from "react";
import { useGetInjuredBySlugQuery } from "@/redux/features/julyApi";
import Loading from "@/components/common/Loader";
import Image from "next/image";

const InjuredDetailsPage = ({ slug, lang }) => {
  const { data: injured, error, isLoading } = useGetInjuredBySlugQuery(
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
              alt={injured?.name || "Unknown"}
              src={injured?.image || "/placeholder.jpg"}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Personal Details */}
          <div className="w-40 md:w-48 mt-2 p-1 text-left">
            <h1 className="text-lg font-bold text-gray-800">{injured?.name || "Unknown"}</h1>
            <p className="text-gray-600 text-sm">{injured?.occupation || "N/A"}</p>
            <p className="text-gray-500 text-sm">{injured?.institution || "N/A"}</p>
            <p className="text-gray-500 text-sm">Incident Date: {injured?.incident_date || "N/A"}</p>
          </div>
        </div>

        {/* Right Section (Additional Info) */}
        <div className="col-span-2 p-2 bg-[#f6f6f6] rounded-md shadow-sm">
          {/* Age & Address */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 text-center bg-[#e7e7e7] rounded-md shadow-sm">
              <p className="font-semibold text-gray-700">Age:</p>
              <p className="text-gray-600">{injured?.age || "N/A"}</p>
            </div>
            <div className="p-3 text-center bg-[#e7e7e7] rounded-md shadow-sm">
              <p className="font-semibold text-gray-700">Address:</p>
              <p className="text-gray-600">{injured?.address || "N/A"}</p>
            </div>
          </div>

          {/* Incident Details */}
          {injured?.incident && (
            <div className="mt-6 p-4 bg-[#e7e7e7] rounded-md shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Incident Details:</h2>
              <p className="text-gray-700 mt-2">{injured.incident}</p>
            </div>
          )}

          {/* Biography Section */}
          {injured?.biography && (
            <div className="mt-6 p-4 bg-[#e7e7e7] rounded-md shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">Biography:</h2>
              <p className="text-gray-700 mt-2">{injured.biography}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InjuredDetailsPage;
