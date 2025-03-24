"use client";

import { useGetEventsQuery } from "@/redux/features/julyApi";
import Link from "next/link";
import Loading from "../common/Loader";

export default function EventPage({ lang, dictionary }) {
  const { data: events, error, isLoading } = useGetEventsQuery(lang);

  if (isLoading) return <Loading />;
  if (error)
    return <p className="text-center text-red-500">Error fetching events...</p>;
  return (
    <div className="min-h-screen bg-white p-6 text-gray-800 sm:p-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-[#cc3333]">
        {dictionary.events}
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events?.data.map((art) => (
          <Link key={art.id} href={`/events/${art.id}`} className="block">
            <div className="group relative overflow-hidden rounded-xl border border-[#ff6666] shadow-lg">
              <img
                src={art.image}
                alt={art.title}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#ff6666] bg-opacity-75 p-4 text-center">
                <h2 className="text-sm font-semibold text-white md:text-lg">
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
