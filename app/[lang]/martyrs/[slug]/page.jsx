// src/app/martyrs/[slug]/MartyrDetailsWrapper.js
import { getDictionary } from "@/dictionaries";
import MartyrsDetailsPage from "./MartyrDetailsPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const MartyrDetailsWrapper = async ({ params }) => {
  const { slug, lang = "en" } = await params;
  const dictionary = await getDictionary(lang); // Fetch dictionary on server

  return (
    <>
        <Header dictionary={dictionary}/>
        <MartyrsDetailsPage slug={slug} lang={lang} dictionary={dictionary} />
        <Footer dictionary={dictionary} />

    </>
);
};

export default MartyrDetailsWrapper;
