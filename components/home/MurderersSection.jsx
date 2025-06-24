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
import SearchFilter from "../filter/SectionSearchFilter";

function MurderersSection({ dictionary, lang }) {
  const pathname = usePathname();
  const [murdererList, setMurderersList] = useState([]);

  // Global Redux state
  const globalSearchQuery = useSelector((state) => state.search.query);
  const globalOccupation = useSelector((state) => state.filter.occupation);
  const globalInstitution = useSelector((state) => state.filter.institutions);
  const globalOrganization = useSelector((state) => state.filter.organizations);

  // Local section-specific search + filter
  const [sectionSearch, setSectionSearch] = useState("");
  const [sectionFilters, setSectionFilters] = useState({
    occupations: [],
    institutions: [],
    organizations: [],
    // add more filters here if needed
  });

  const finalSearch = sectionSearch || globalSearchQuery;

  const finalFilters = {
    ...sectionFilters,
    occupations:
      sectionFilters.occupations?.length > 0
        ? sectionFilters.occupations
        : globalOccupation || [],
    institutions:
      sectionFilters.institutions?.length > 0
        ? sectionFilters.institutions
        : globalInstitution || [],
    organizations:
      sectionFilters.organizations?.length > 0
        ? sectionFilters.organizations
        : globalOrganization || [],
  };

  const { data, error, isLoading, isSuccess } = useGetMurderersQuery({
    lang,
    search: finalSearch,
    ...finalFilters,
  });

  useEffect(() => {
    if (isSuccess && data?.data) {
      setMurderersList(data.data);
    }
  }, [isSuccess, data]);

  const displayedMurdererList = !pathname.includes("murderers")
    ? murdererList.slice(0, 5)
    : murdererList;

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading data...</div>;

  return (
    <section className="my-12">
      <Headline header={dictionary.murderersHeadline} />

      {/* Reusable Search + Filter */}
      <SearchFilter
        sectionSearch={sectionSearch}
        setSectionSearch={setSectionSearch}
        sectionFilters={sectionFilters}
        setSectionFilters={setSectionFilters}
        dictionary={dictionary}
        lang={lang}
        category="murderers"
      />

      <BloodBackground>
        <div className="container">
          <div className="my-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedMurdererList?.length === 0 &&
              (finalSearch || Object.values(finalFilters).some(arr => arr?.length > 0)) ? (
              <div className="col-span-full text-center text-primary font-semibold">
                No murderers found
                {finalSearch ? ` for "${finalSearch}"` : ""}
                {finalFilters.occupations?.length > 0
                  ? ` with occupations "${finalFilters.occupations.join(", ")}"`
                  : ""}
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
