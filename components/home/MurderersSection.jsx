"use client";
import { useGetMurderersQuery } from "@/redux/features/julyApi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BloodBackground from "../common/BloodBackground";
import Headline from "../common/Headline";
import Loading from "../common/Loader";
import MurderersItemCard from "../common/MurderersCard";
import { useSelector } from "react-redux";

function MurderersSection({ dictionary, lang }) {
  const [murdererList, setMurderersList] = useState([]);
  const searchQuery = useSelector((state) => state.search.query);
  const { data, error, isLoading, isSuccess } = useGetMurderersQuery({ lang, search: searchQuery });
  const pathname = usePathname();

  useEffect(() => {
    if (isSuccess && data?.data) {
      setMurderersList(data.data);
    }
  }, [isSuccess, data]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading data...</div>;

  const displayedMurdererList = !pathname.includes("murderers")
    ? murdererList.slice(0, 5)
    : murdererList;

  return (
    <section className="my-12">
      <Headline header={dictionary.murderersHeadline} />
      <BloodBackground>
        <div className="container">
          <div className="my-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedMurdererList?.length === 0 && searchQuery ? (
              <div className="col-span-full text-center text-primary font-semibold">
                No results found for "<span className="italic">{searchQuery}</span>"
              </div>
            ) : (
              displayedMurdererList.map((murderer) =>
                murderer.name ? (
                  <MurderersItemCard
                    id={murderer.id}
                    key={murderer.id}
                    image={murderer.image || "/placeholder.jpg"}
                    name={murderer.name}
                    occupation={murderer.occupation}
                    organization={murderer.organization}
                    address={murderer.address}
                    date={murderer.incident_date}
                    lang={lang}
                  />
                ) : null
              )
            )}
          </div>
          {displayedMurdererList?.length >= 5 && !pathname.includes("murderers") && (
            <div className="flex w-full cursor-pointer justify-end text-white">
              <Link
                href={`/${lang}/murderers`}
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

export default MurderersSection;
