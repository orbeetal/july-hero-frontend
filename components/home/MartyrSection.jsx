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
import SearchFilter from "../filter/SectionSearchFilter";

function MartyrSection({ dictionary, lang }) {
  const pathname = usePathname();
  const [martyrList, setMartyrsList] = useState([]);

  // Global Redux state
  const globalSearchQuery = useSelector((state) => state.search.query);
  const globalOccupation = useSelector((state) => state.filter.occupation);
  const globalInstitution = useSelector((state) => state.filter.institutions);
  const globalOrganization = useSelector((state) => state.filter.organizations);
  // Local section-specific filter/search
  const [sectionSearch, setSectionSearch] = useState("");
  const [sectionFilters, setSectionFilters] = useState({
    occupations: [],
    institutions: [],
    organizations: [],
    // add more if you want initial defaults
  });

  const finalSearch = sectionSearch || globalSearchQuery;

  // Build finalFilters, fallback occupation to global if local empty
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


  // Query martyrs with dynamic filters
  const { data, error, isLoading, isSuccess } = useGetMartyrsQuery({
    lang,
    search: finalSearch,
    ...finalFilters,
  });

  useEffect(() => {
    if (isSuccess && data?.data) {
      setMartyrsList(data.data);
    }
  }, [isSuccess, data]);

  const displayedMartyrList = !pathname.includes("martyrs")
    ? martyrList.slice(0, 5)
    : martyrList;

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading data...</div>;

  return (
    <section className="my-12">
      <Headline header={dictionary.martyrsHeadline} />

      {/* Use the new Search + Filter Bar component */}
      <SearchFilter
        sectionSearch={sectionSearch}
        setSectionSearch={setSectionSearch}
        sectionFilters={sectionFilters}
        setSectionFilters={setSectionFilters}
        dictionary={dictionary}
        lang={lang}
        category="martyrs"
      />

      <BloodBackground>
        <div className="container">
          <div className="my-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedMartyrList?.length === 0 &&
              (finalSearch || Object.values(finalFilters).some(arr => arr?.length > 0)) ? (
              <div className="col-span-full text-center text-primary font-semibold">
                No martyrs found
                {finalSearch ? ` for "${finalSearch}"` : ""}
                {finalFilters.occupations?.length > 0
                  ? ` with occupations "${finalFilters.occupations.join(", ")}"`
                  : ""}
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
