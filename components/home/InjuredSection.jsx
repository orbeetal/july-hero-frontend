"use client";
import Link from "next/link";
import DeepBloodBackground from "../common/DeepBloodBackground";
import Headline from "../common/Headline";
import ItemCard from "../common/ItemCard";
import injuredList from "@/database/injured.json"; // Import the JSON data
import { usePathname } from "next/navigation";

function InjuredSection({ dictionary }) {
  const pathname = usePathname();
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
              <ItemCard
                key={index}
                image={injured.image}
                name={injured.name}
                occupation={injured.occupation}
                address={injured.address}
                date={injured.date}
              />
            ))}
          </div>
        </div>
      </DeepBloodBackground>
    </section>
  );
}

export default InjuredSection;
