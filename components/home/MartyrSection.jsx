import BloodBackground from "../common/BloodBackground";
import Headline from "../common/Headline";
import ItemCard from "../common/ItemCard";
import martyrList from "@/database/martyrs.json";
function MartyrSection({ dictionary }) {
  return (
    <section className="my-16">
      {/* Headline Section */}
      <Headline header={dictionary.martyrsHeadline} />

      {/* Background with Blood Effect */}
      <BloodBackground>
        <div className="container">
          <div className="flex w-full justify-end text-white pt-2 cursor-pointer">
            <span className="bg-gradient p-1 px-2 rounded-sm">{dictionary.more} {'>>'}</span>
          </div>
          <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {martyrList.map((martyr, index) =>
              martyr.name ? ( // Avoid rendering empty objects
                <ItemCard
                  key={index}
                  image={martyr.image || "/placeholder.jpg"} // Default image if empty
                  name={martyr.name}
                  occupation={martyr.occupation}
                  address={martyr.address}
                  date={martyr.date}
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
