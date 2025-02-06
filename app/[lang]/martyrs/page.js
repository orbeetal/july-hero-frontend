import Footer from "@/components/Footer";
import EventsPage from "@/components/home/events/EventsPage";
import HeroSection from "@/components/home/HeroSection";
import InjuredSection from "@/components/home/InjuredSection";
import MartyrSection from "@/components/home/MartyrSection";
import GrafitiSlider from "@/components/home/slider/Main";
import StatsSection from "@/components/home/StatsSection";
import NavMenu from "@/components/Nav";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <NavMenu dictionary={dictionary}/>      
      <MartyrSection dictionary={dictionary} lang={lang}/>
      <Footer dictionary={dictionary} />
    </>
  );
}
