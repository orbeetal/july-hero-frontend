import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InjuredSection from "@/components/home/InjuredSection";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary} />
      <InjuredSection dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary}/>
    </>
  );
}
