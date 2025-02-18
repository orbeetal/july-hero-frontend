"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import DeepBloodBackground from "../common/DeepBloodBackground";
import Headline from "../common/Headline";
import { usePathname } from "next/navigation";
import { useGetInjuredQuery } from "@/redux/features/julyApi"; // Fetch data from API
import Loading from "../common/Loader";
import InjuredItemCard from "../common/InjuredCard";

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

  const displayedInjuredList = !pathname.includes("injured") ? injuredList.slice(0, 5) : injuredList;

  return (
    <section className="my-16">
      <Headline header={dictionary.injuredHeadline} />
      <DeepBloodBackground>
        <div className="container">
          <div className="flex w-full justify-end text-white pt-2 cursor-pointer">
            {!pathname.includes("injured") && (
              <Link href="/injured">
                <span className="bg-gradient p-1 px-2 rounded-sm">
                  {dictionary.more} {'>>'}
                </span>
              </Link>
            )}
          </div>
          <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedInjuredList.map((injured, index) => (
              injured.name ? ( // Avoid rendering empty objects
                <InjuredItemCard
                  id={injured.id}
                  key={injured.id}
                  image={injured.image || "/placeholder.jpg"} // Default image if empty
                  name={injured.name}
                  occupation={injured.occupation}
                  address={injured.address}
                  date={injured.incident_date}
                />
              ) : null
            ))}
          </div>
        </div>
      </DeepBloodBackground>
    </section>
  );
}

export default InjuredSection;
