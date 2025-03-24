// src/app/martyrs/[slug]/MartyrDetailsWrapper.js
import { getDictionary } from "@/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventDetailsPage from "@/components/events/EventDetails";


const EventDetailsWrapper = async ({ params }) => {
  const { id, lang = "en" } = await params;
  const dictionary = await getDictionary(lang); // Fetch dictionary on server
  console.log(id, lang);
  return (
    <>
        <Header dictionary={dictionary}/>
        <EventDetailsPage id={id} lang={lang} dictionary={dictionary} />
        <Footer dictionary={dictionary} />
    </>
);
};

export default EventDetailsWrapper;
