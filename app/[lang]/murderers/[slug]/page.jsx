// src/app/martyrs/[slug]/MartyrDetailsWrapper.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "@/dictionaries";
import MartyrsDetailsPage from "./MurderersDetailsPage";

const MurdererDetailsWrapper = async ({ params }) => {
  const { slug, lang = "en" } = await params;
  const dictionary = await getDictionary(lang); // Fetch dictionary on server

  return (
    <>
      <Header dictionary={dictionary} lang={lang} />
      <MartyrsDetailsPage slug={slug} lang={lang} dictionary={dictionary} />
      <Footer dictionary={dictionary} lang={lang} />
    </>
  );
};

export default MurdererDetailsWrapper;
