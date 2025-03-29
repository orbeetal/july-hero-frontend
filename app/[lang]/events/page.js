import EventsPage from "@/components/events/GalleryPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "@/dictionaries";

export default async function Event({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header dictionary={dictionary} lang={lang} />
      <EventsPage dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary} lang={lang} />
    </>
  );
}
