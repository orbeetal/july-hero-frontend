// src/app/martyrs/[slug]/MartyrDetailsWrapper.js
import { getDictionary } from "@/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InjuredDetailsPage from "./InjuredDetailsPage";
import SearchBox from "@/components/search/SearchBox";


const MartyrDetailsWrapper = async ({ params }) => {
  const { slug, lang } = await params;
  const dictionary = await getDictionary(lang); // Fetch dictionary on server

  return (
    <> 
        <Header dictionary={dictionary} lang={lang} />
        <InjuredDetailsPage slug={slug} lang={lang} dictionary={dictionary} />
        <Footer dictionary={dictionary} lang={lang} />
    </>
);
};

export default MartyrDetailsWrapper;
