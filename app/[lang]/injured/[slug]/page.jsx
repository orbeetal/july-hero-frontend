// src/app/martyrs/[slug]/MartyrDetailsWrapper.js
import { getDictionary } from "@/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InjuredDetailsPage from "./InjuredDetailsPage";


const MartyrDetailsWrapper = async ({ params }) => {
  const { slug, lang = "en" } = await params;
  const dictionary = await getDictionary(lang); // Fetch dictionary on server

  return (
    <>
        <Header dictionary={dictionary}/>
        <InjuredDetailsPage slug={slug} lang={lang} dictionary={dictionary} />
        <Footer dictionary={dictionary} />

    </>
);
};

export default MartyrDetailsWrapper;
