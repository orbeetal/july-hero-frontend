import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IncidentsPage from "@/components/home/incidents/IncidentsPage";
import InjuredSection from "@/components/home/InjuredSection";
import MartyrSection from "@/components/home/MartyrSection";
import GrafitiSlider from "@/components/home/slider/Main";
import EventsSlider from "@/components/home/events/Main";
import StatsSection from "@/components/home/StatsSection";
import BannerSlider from "@/components/slider/Slider";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary} />
      <BannerSlider params={params} />
      {/* <HeroSection dictionary={dictionary} /> */}
      <StatsSection dictionary={dictionary} lang={lang} />
      <MartyrSection dictionary={dictionary} lang={lang} />
      <div className="h-12"></div>
      <InjuredSection dictionary={dictionary} lang={lang} />
      <div className="h-12"></div>
      <IncidentsPage dictionary={dictionary} lang={lang} />
      <GrafitiSlider dictionary={dictionary} lang={lang} />
      <EventsSlider dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary} />
    </>
  );
}
