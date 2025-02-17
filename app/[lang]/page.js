import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EventsPage from "@/components/home/events/EventsPage";
import HeroSection from "@/components/home/HeroSection";
import InjuredSection from "@/components/home/InjuredSection";
import MartyrSection from "@/components/home/MartyrSection";
import GrafitiSlider from "@/components/home/slider/Main";
import StatsSection from "@/components/home/StatsSection";
import BannerSlider from "@/components/slider/Slider";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary}/>
      <BannerSlider />
      {/* <HeroSection dictionary={dictionary} /> */}
      <StatsSection dictionary={dictionary} lang={lang} />
      <MartyrSection dictionary={dictionary} lang={lang}/>
      <InjuredSection dictionary={dictionary} lang={lang}/>
      <EventsPage dictionary={dictionary} lang={lang} />
      <GrafitiSlider dictionary={dictionary}/>
      <Footer dictionary={dictionary} />
    </>
  );
}
