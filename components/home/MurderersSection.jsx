"use client";
import { useGetMurderersQuery } from "@/redux/features/julyApi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BloodBackground from "../common/BloodBackground";
import Headline from "../common/Headline";
import Loading from "../common/Loader";
import MurderersItemCard from "../common/MurderersCard";

function MurderersSection({ dictionary, lang }) {
  const [murdererList, setMurderersList] = useState([]);
  const { data, error, isLoading, isSuccess } = useGetMurderersQuery(lang);
  const pathname = usePathname();
  console.log(lang);
  // Use useEffect to update state only when data changes
  useEffect(() => {
    if (isSuccess && data?.data) {
      setMurderersList(data.data);
    }
  }, [isSuccess, data]); // Runs only when `isSuccess` or `data` changes

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading data...</div>;

  const displayedMurdererList = !pathname.includes("murderers")
    ? murdererList.slice(0, 5)
    : murdererList;

  return (
    <section className="my-12">
      {/* Headline Section */}
      <Headline header={dictionary.murderersHeadline} />

      {/* Background with Blood Effect */}
      <BloodBackground>
        <div className="container">
          <div className="my-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedMurdererList?.map((murderer, index) =>
              murderer.name ? ( // Avoid rendering empty objects
                <MurderersItemCard
                  id={murderer.id}
                  key={murderer.id}
                  image={murderer.image || "/placeholder.jpg"} // Default image if empty
                  name={murderer.name}
                  occupation={murderer.occupation}
                  organization={murderer.organization}
                  address={murderer.address}
                  date={murderer.incident_date}
                  lang={lang}
                />
              ) : null,
            )}
          </div>
          {!pathname.includes("murderers") && (
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
