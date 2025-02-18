"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import BloodBackground from "../common/BloodBackground";
import Headline from "../common/Headline";
import { usePathname } from "next/navigation";
import { useGetMartyrsQuery } from "@/redux/features/julyApi";
import Loading from "../common/Loader";
import MartyrsItemCard from "../common/MartyrsCard";

function MartyrSection({ dictionary, lang }) {
  const [martyrList, setMartyrsList] = useState([]);
  const { data, error, isLoading, isSuccess } = useGetMartyrsQuery(lang);
  const pathname = usePathname();
  console.log(lang);
  // Use useEffect to update state only when data changes
  useEffect(() => {
    if (isSuccess && data?.data) {
      setMartyrsList(data.data);
    }
  }, [isSuccess, data]); // Runs only when `isSuccess` or `data` changes

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading data...</div>;

  const displayedMartyrList = !pathname.includes("martyrs") ? martyrList.slice(0, 5) : martyrList;

  return (
    <section className="my-16">
      {/* Headline Section */}
      <Headline header={dictionary.martyrsHeadline} />

      {/* Background with Blood Effect */}
      <BloodBackground>
        <div className="container">
          <div className="flex w-full justify-end text-white pt-2 cursor-pointer">
            {!pathname.includes("martyrs") && (
              <Link href="/martyrs">
                <span className="bg-gradient p-1 px-2 rounded-sm">
                  {dictionary.more} {'>>'}
                </span>
              </Link>
            )}
          </div>
          <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedMartyrList?.map((martyr, index) =>
              martyr.name ? ( // Avoid rendering empty objects
                <MartyrsItemCard
                  id={martyr.id}
                  key={martyr.id}
                  image={martyr.image || "/placeholder.jpg"} // Default image if empty
                  name={martyr.name}
                  occupation={martyr.occupation}
                  address={martyr.address}
                  date={martyr.incident_date}
                />
              ) : null
            )}
          </div>
        </div>
      </BloodBackground>
    </section>
  );
}

export default MartyrSection;
