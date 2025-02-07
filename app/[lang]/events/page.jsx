import Footer from "@/components/Footer";
import EventsPage from "@/components/home/events/EventsPage";
import NavMenu from "@/components/Nav";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <NavMenu dictionary={dictionary}/>  
      <EventsPage dictionary={dictionary} lang={lang} />    
      <Footer dictionary={dictionary} />
    </>
  );
}
