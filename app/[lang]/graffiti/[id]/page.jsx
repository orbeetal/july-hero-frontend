// src/app/martyrs/[slug]/MartyrDetailsWrapper.js
import Footer from "@/components/Footer";
import GraffitiDetailsPage from "@/components/graffiti/GraffitiDetails";
import Header from "@/components/Header";
import { getDictionary } from "@/dictionaries";

const GraffitiDetailsWrapper = async ({ params }) => {
  const { id, lang = "en" } = await params;
  const dictionary = await getDictionary(lang); // Fetch dictionary on server
  console.log(id, lang);
  return (
    <>
      <Header dictionary={dictionary} lang={lang} />
      <GraffitiDetailsPage id={id} dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary} lang={lang} />
    </>
  );
};

export default GraffitiDetailsWrapper;
