import Headline from "../common/Headline";
import ItemCard from "../common/ItemCard";

function MartyrSection() {
  return (
    <>
      <section className="my-16">
        <div className="container">
          <Headline>
            List of <span className="text-brand">Martyrs</span> in the Movement
          </Headline>
          <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <ItemCard
              image={"https://shohid.info/shohid/abu-sayed.jpg"}
              name={"Abu Sayed"}
              occupation={"Student"}
              address={"Begum Rokeya University, Rangpur"}
              date={"16th July, 2024"}
            />
            <ItemCard
              image={"https://shohid.info/shohid/faisal-ahmed-shanto.jpg"}
              name={"Faisal Ahmed Shanto"}
              occupation={"Student"}
              address={"Omargani M.E.S. College, Chittagong"}
              date={"16th July, 2024"}
            />
            <ItemCard
              name={"Abu Sayed"}
              occupation={"Student"}
              address={"Begum Rokeya University, Rangpur"}
              date={"16th July, 2024"}
            />
            <ItemCard
              image={"https://shohid.info/shohid/abu-sayed.jpg"}
              name={"Abu Sayed"}
              occupation={"Student"}
              address={"Begum Rokeya University, Rangpur"}
              date={"16th July, 2024"}
            />
            <ItemCard
              image={"https://shohid.info/shohid/faisal-ahmed-shanto.jpg"}
              name={"Faisal Ahmed Shanto"}
              occupation={"Student"}
              address={"Omargani M.E.S. College, Chittagong"}
              date={"16th July, 2024"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MartyrSection;
