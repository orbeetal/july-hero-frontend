"use client";

import Link from "next/link";
import { useGetGraffitiQuery } from "@/redux/features/julyApi";
import Loading from "../common/Loader";

export default function GraffitiPage() {
  const { data: graffiti, error, isLoading } = useGetGraffitiQuery();

  if (isLoading) return <Loading />;
  if (error)
    return <p className="text-red-500 text-center">Error fetching graffiti...</p>;
  console.log(graffiti);
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#cc3333]">
        Graffiti Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {graffiti?.data.map((art) => (
          <Link key={art.id} href={`/graffiti/${art.id}`} className="block">
            <div className="group relative overflow-hidden rounded-xl shadow-lg border border-[#ff6666]">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#ff6666] bg-opacity-75 p-4 text-center">
                <h2 className="text-lg font-semibold text-white">{art.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
