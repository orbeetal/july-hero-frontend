import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EventsPage from "@/components/home/events/EventsPage";
import BannerSection from "@/components/home/EventsBanner";
import NavMenu from "@/components/Nav";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="h-auto">
      <Header dictionary={dictionary}/>
      <BannerSection />
      <EventsPage dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary} />
    </div>
  );
}
