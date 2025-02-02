import HeroSection from "@/components/home/HeroSection";
import InjuredSection from "@/components/home/InjuredSection";
import MartyrSection from "@/components/home/MartyrSection";
import StatsSection from "@/components/home/StatsSection";
import NavMenu from "@/components/Nav";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <NavMenu dictionary={dictionary}/>
      <HeroSection dictionary={dictionary} lang={lang} />
      <StatsSection dictionary={dictionary} lang={lang} />
      <MartyrSection dictionary={dictionary} lang={lang}/>
      <InjuredSection dictionary={dictionary} lang={lang}/>
    </>
  );
}
