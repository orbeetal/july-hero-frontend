"use client";

import { useRouter } from "next/navigation";
import Loading from "../common/Loader";
import { useGetGraffitiByIdQuery } from "@/redux/features/julyApi";

export default function GraffitiDetailsPage({ id, lang }) {
  const router = useRouter();

  const { data: details, error, isLoading } = useGetGraffitiByIdQuery(
    { id, lang },
    { skip: !id }
  );

  if (isLoading) return <Loading />;
  if (error)
    return <p className="text-red-500 text-center">Error in data fetching...</p>;

  return (
    <div className="min-h-screen bg-[#fff8f8] text-gray-800 px-4 py-6 sm:px-6 md:px-8">
      {/* Back Button */}
      <button
        onClick={() => router.push("/graffiti")}
        className="mb-4 px-6 py-3 bg-[#ff6666] text-white rounded-lg shadow-md hover:bg-[#e65c5c] transition duration-300 text-sm sm:text-base md:text-lg"
      >
        ← Back to Gallery
      </button>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-[#ff6666]">
        {/* Responsive Image */}
        <img
          src={details.image}
          alt={details.title}
          className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg mb-4"
        />

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#cc3333]">
          {details.title}
        </h1>

        {/* Description */}
        <p className="mt-2 text-gray-700 text-sm sm:text-base">{details.details}</p>

        {/* Graffiti Plots */}
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          <strong className="text-[#000000]">Graffiti Plots:</strong> {details.plots}
        </p>

        {/* Location */}
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          <strong className="text-[#000000]">Location:</strong> {details.location}
        </p>
      </div>
    </div>
  );
}
