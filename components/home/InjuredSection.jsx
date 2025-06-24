"use client";

import { useGetInjuredQuery } from "@/redux/features/julyApi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DeepBloodBackground from "../common/DeepBloodBackground";
import Headline from "../common/Headline";
import InjuredItemCard from "../common/InjuredCard";
import Loading from "../common/Loader";
import { useSelector } from "react-redux";
import SearchFilter from "../filter/SectionSearchFilter";

function InjuredSection({ dictionary, lang }) {
  const pathname = usePathname();
  const [injuredList, setInjuredList] = useState([]);

  // Global Redux state
  const globalSearchQuery = useSelector((state) => state.search.query);
  const globalOccupation = useSelector((state) => state.filter.occupation);
  const globalInstitution = useSelector((state) => state.filter.institutions);
  const globalOrganization = useSelector((state) => state.filter.organizations);

  // Local section-specific search and filters
  const [sectionSearch, setSectionSearch] = useState("");
  const [sectionFilters, setSectionFilters] = useState({
    occupations: [],
    institutions: [],
    organizations: [],
    // extend more if needed
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

  // Fetch data using combined filters and search
  const { data, error, isLoading, isSuccess } = useGetInjuredQuery({
    lang,
    search: finalSearch,
    ...finalFilters,
  });

  useEffect(() => {
    if (isSuccess && data?.data) {
      setInjuredList(data.data);
    }
  }, [isSuccess, data]);

  const displayedInjuredList = !pathname.includes("injured")
    ? injuredList.slice(0, 5)
    : injuredList;

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading data...</div>;

  return (
    <section className="my-12">
      <Headline header={dictionary.injuredHeadline} />

      {/* Shared Search + Filter Component */}
      <SearchFilter
        sectionSearch={sectionSearch}
        setSectionSearch={setSectionSearch}
        sectionFilters={sectionFilters}
        setSectionFilters={setSectionFilters}
        dictionary={dictionary}
        lang={lang}
        category="injured"
      />

      <DeepBloodBackground>
        <div className="container">
          <div className="my-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedInjuredList?.length === 0 &&
            (finalSearch || Object.values(finalFilters).some(arr => arr?.length > 0)) ? (
              <div className="col-span-full text-center text-primary font-semibold">
                No injured found
                {finalSearch ? ` for "${finalSearch}"` : ""}
                {finalFilters.occupations?.length > 0
                  ? ` with occupations "${finalFilters.occupations.join(", ")}"`
                  : ""}
              </div>
            ) : (
              displayedInjuredList.map((injured) =>
                injured.name ? (
                  <InjuredItemCard
                    id={injured.id}
                    key={injured.id}
                    image={injured.image || "/placeholder.jpg"}
                    name={injured.name}
                    occupation={injured.occupation}
                    address={injured.address}
                    date={injured.incident_date}
                    lang={lang}
                  />
                ) : null
              )
            )}
          </div>
          {displayedInjuredList?.length >= 5 && !pathname.includes("injured") && (
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
