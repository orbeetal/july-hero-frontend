"use client";
import { useGetMartyrsQuery } from "@/redux/features/julyApi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BloodBackground from "../common/BloodBackground";
import Headline from "../common/Headline";
import Loading from "../common/Loader";
import MartyrsItemCard from "../common/MartyrsCard";
import { useSelector } from "react-redux";

function MartyrSection({ dictionary, lang }) {
  const [martyrList, setMartyrsList] = useState([]);
  const searchQuery = useSelector((state) => state.search.query);
  const { data, error, isLoading, isSuccess } = useGetMartyrsQuery({ lang, search: searchQuery });
  const pathname = usePathname();

  useEffect(() => {
    if (isSuccess && data?.data) {
      setMartyrsList(data.data);
    }
  }, [isSuccess, data]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading data...</div>;

  const displayedMartyrList = !pathname.includes("martyrs")
    ? martyrList.slice(0, 5)
    : martyrList;

  return (
    <section className="my-12">
      <Headline header={dictionary.martyrsHeadline} />

      <BloodBackground>
        <div className="container">
          <div className="my-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedMartyrList?.length === 0 && searchQuery ? (
              <div className="col-span-full text-center text-primary font-semibold">
                No results found for "<span className="italic">{searchQuery}</span>"
              </div>
            ) : (
              displayedMartyrList.map((martyr) =>
                martyr.name ? (
                  <MartyrsItemCard
                    id={martyr.id}
                    key={martyr.id}
                    image={martyr.image || "/placeholder.jpg"}
                    name={martyr.name}
                    occupation={martyr.occupation}
                    address={martyr.address}
                    date={martyr.incident_date}
                    lang={lang}
                  />
                ) : null
              )
            )}
          </div>
          {displayedMartyrList?.length >= 5 && !pathname.includes("martyrs") && (
            <div className="flex w-full cursor-pointer justify-end text-white">
              <Link
                href={`/${lang}/martyrs`}
                className="rounded bg-brand px-4 py-2 text-sm text-white md:px-6 md:text-base"
              >
                {dictionary.more} {">>"}
              </Link>
            </div>
          )}
        </div>
      </BloodBackground>
    </section>
  );
}

export default MartyrSection;
