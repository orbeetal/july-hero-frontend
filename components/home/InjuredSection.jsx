"use client";
import { useGetInjuredQuery } from "@/redux/features/julyApi"; // Fetch data from API
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DeepBloodBackground from "../common/DeepBloodBackground";
import Headline from "../common/Headline";
import InjuredItemCard from "../common/InjuredCard";
import Loading from "../common/Loader";

function InjuredSection({ dictionary, lang }) {
  const [injuredList, setInjuredList] = useState([]);
  const { data, error, isLoading, isSuccess } = useGetInjuredQuery(lang);
  const pathname = usePathname();

  // Use useEffect to update state only when data changes
  useEffect(() => {
    if (isSuccess && data?.data) {
      setInjuredList(data.data);
    }
  }, [isSuccess, data]); // Runs only when `isSuccess` or `data` changes

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading data...</div>;

  const displayedInjuredList = !pathname.includes("injured")
    ? injuredList.slice(0, 5)
    : injuredList;

  return (
    <section className="my-12">
      <Headline header={dictionary.injuredHeadline} />
      <DeepBloodBackground>
        <div className="container">
          <div className="my-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedInjuredList.map((injured, index) =>
              injured.name ? ( // Avoid rendering empty objects
                <InjuredItemCard
                  id={injured.id}
                  key={injured.id}
                  image={injured.image || "/placeholder.jpg"} // Default image if empty
                  name={injured.name}
                  occupation={injured.occupation}
                  address={injured.address}
                  date={injured.incident_date}
                  lang={lang}
                />
              ) : null,
            )}
          </div>
          {!pathname.includes("injured") && (
            <div className="flex w-full cursor-pointer justify-end text-white">
              <Link
                href={`/${lang}/injured`}
                className="rounded bg-brand px-4 py-2 text-sm text-white md:px-6 md:text-base"
              >
                {dictionary.more} {">>"}
              </Link>
            </div>
          )}
        </div>
      </DeepBloodBackground>
    </section>
  );
}

export default InjuredSection;
