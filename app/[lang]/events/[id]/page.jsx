// src/app/martyrs/[slug]/MartyrDetailsWrapper.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EventDetailsPage from "@/components/events/EventDetails";
import { getDictionary } from "@/dictionaries";

const EventDetailsWrapper = async ({ params }) => {
  const { id, lang = "en" } = await params;
  const dictionary = await getDictionary(lang); // Fetch dictionary on server
  console.log(id, lang);
  return (
    <>
      <Header dictionary={dictionary} lang={lang} />
      <EventDetailsPage id={id} dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary} lang={lang} />
    </>
  );
};

export default EventDetailsWrapper;
