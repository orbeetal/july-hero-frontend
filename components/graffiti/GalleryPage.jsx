"use client";

import { useGetGraffitiQuery } from "@/redux/features/julyApi";
import Link from "next/link";
import Loading from "../common/Loader";

export default function GraffitiPage({ lang }) {
  const { data: graffiti, error, isLoading } = useGetGraffitiQuery();

  if (isLoading) return <Loading />;
  if (error)
    return (
      <p className="text-center text-red-500">Error fetching graffiti...</p>
    );
  return (
    <div className="container min-h-[70vh] bg-white p-6 text-gray-800 sm:p-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-[#cc3333]">
        Graffiti Gallery
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {graffiti?.data.map((art) => (
          <Link key={art.id} href={`/${lang}/graffiti/${art.id}`} className="block">
            <div className="group relative overflow-hidden rounded-xl border border-[#ff6666] shadow-lg">
              <img
                src={art.image}
                alt={art.title}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#ff6666] bg-opacity-75 p-3 text-center">
                <h2 className="text-lg font-semibold text-white">
                  {art.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
