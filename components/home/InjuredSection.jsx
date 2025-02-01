import Headline from "../common/Headline";
import ItemCard from "../common/ItemCard";

function InjuredSection() {
  return (
    <>
      <section className="my-16">
        <div className="container">
          <Headline>
            List of <span className="text-brand">Injured</span> in the Movement
          </Headline>
          <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <ItemCard
              image={""}
              name={"Name"}
              occupation={"Occupation"}
              address={"University or Address"}
              date={"Date of Injured"}
            />
            <ItemCard
              image={""}
              name={"Name"}
              occupation={"Occupation"}
              address={"University or Address"}
              date={"Date of Injured"}
            />
            <ItemCard
              image={""}
              name={"Name"}
              occupation={"Occupation"}
              address={"University or Address"}
              date={"Date of Injured"}
            />
            <ItemCard
              image={""}
              name={"Name"}
              occupation={"Occupation"}
              address={"University or Address"}
              date={"Date of Injured"}
            />
            <ItemCard
              image={""}
              name={"Name"}
              occupation={"Occupation"}
              address={"University or Address"}
              date={"Date of Injured"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default InjuredSection;
