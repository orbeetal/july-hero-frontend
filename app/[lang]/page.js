import HeroSection from "@/components/home/HeroSection";
import InjuredSection from "@/components/home/InjuredSection";
import MartyrSection from "@/components/home/MartyrSection";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <HeroSection dictionary={dictionary} lang={lang} />
      <MartyrSection />
      <InjuredSection />
    </>
  );
}
