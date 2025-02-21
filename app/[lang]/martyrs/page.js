import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MartyrSection from "@/components/home/MartyrSection";
import MartyrSlider from "@/components/slider/MartyrSlider";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary} />
      <MartyrSlider />
      <MartyrSection dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary} />
    </>
  );
}
