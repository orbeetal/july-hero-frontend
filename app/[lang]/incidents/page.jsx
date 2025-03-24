import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IncidentsPage from "@/components/home/incidents/IncidentsPage";
import BannerSection from "@/components/home/IncidentsBanner";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="h-auto">
      <Header dictionary={dictionary}/>
      <BannerSection />
      <IncidentsPage dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary} />
    </div>
  );
}
