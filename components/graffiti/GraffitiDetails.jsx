"use client";

import { useGetGraffitiByIdQuery } from "@/redux/features/julyApi";
import { useRouter } from "next/navigation";
import Loading from "../common/Loader";

export default function GraffitiDetailsPage({ id, lang }) {
  const router = useRouter();

  const {
    data: details,
    error,
    isLoading,
  } = useGetGraffitiByIdQuery({ id, lang }, { skip: !id });

  if (isLoading) return <Loading />;
  if (error)
    return (
      <p className="text-center text-red-500">Error in data fetching...</p>
    );

  return (
    <div className="min-h-screen bg-[#fff8f8] px-4 py-6 text-gray-800 sm:px-6 md:px-8">
      {/* Back Button */}
      <button
        onClick={() => router.push("/graffiti")}
        className="mb-4 rounded-lg bg-[#ff6666] px-6 py-3 text-sm text-white shadow-md transition duration-300 hover:bg-[#e65c5c] sm:text-base md:text-lg"
      >
        ← Back to Gallery
      </button>

      {/* Content Card */}
      <div className="mx-auto max-w-4xl rounded-xl border border-[#ff6666] bg-white p-4 shadow-lg sm:p-6 md:p-8">
        {/* Responsive Image */}
        <img
          src={details.image}
          alt={details.title}
          className="mb-4 w-full rounded-lg object-cover"
        />

        {/* Title */}
        <h1 className="text-xl font-bold text-[#cc3333] sm:text-2xl md:text-3xl">
          {details.title}
        </h1>

        {/* Location */}
        {details.location && (
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            <strong className="text-[#000000]">Location:</strong>{" "}
            {details.location}
          </p>
        )}

        {/* Graffiti Plots */}
        {details.plots && (
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            <strong className="text-[#000000]">Graffiti Plots:</strong>{" "}
            {details.plots}
          </p>
        )}

        {/* Description */}
        <p className="mt-2 text-sm text-gray-700 sm:text-base">
          {details.details}
        </p>
      </div>
    </div>
  );
}
