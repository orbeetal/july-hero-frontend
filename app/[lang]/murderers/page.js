import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MurderersSection from "@/components/home/MurderersSection";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary}/>      
      <MurderersSection dictionary={dictionary} lang={lang}/>
      <Footer dictionary={dictionary} />
    </>
  );
}
