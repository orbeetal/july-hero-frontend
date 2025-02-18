"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function GraffitiDetailsPage({ id, lang }) {
  const [details, setDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch("../../database/graffitiList.json")
      .then((res) => res.json())
      .then((data) => setDetails(data[id]));
  }, [id]);

  if (!details) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button
        onClick={() => router.push("/")}
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
      >
        Back to Gallery
      </button>
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
        <img
          src={details.image}
          alt={details.title}
          className="w-full h-80 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold">{details.title}</h1>
        <p className="mt-2 text-gray-300">{details.details}</p>
        <p className="mt-2 text-gray-400">
          <strong>Graffiti Plots:</strong> {details.plots}
        </p>
        <p className="mt-2 text-gray-400">
          <strong>Location:</strong> {details.location}
        </p>
      </div>
    </div>
  );
}
