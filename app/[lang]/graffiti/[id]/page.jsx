// src/app/martyrs/[slug]/MartyrDetailsWrapper.js
import { getDictionary } from "@/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GraffitiDetailsPage from "@/components/graffiti/GraffitiDetails";


const GraffitiDetailsWrapper = async ({ params }) => {
  const { id, lang = "en" } = await params;
  const dictionary = await getDictionary(lang); // Fetch dictionary on server

  return (
    <>
        <Header dictionary={dictionary}/>
        <GraffitiDetailsPage id={id} lang={lang} dictionary={dictionary} />
        <Footer dictionary={dictionary} />
    </>
);
};

export default GraffitiDetailsWrapper;
