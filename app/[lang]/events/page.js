import EventsPage from '@/components/events/GalleryPage'
import React from 'react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "@/dictionaries";

export default async function Event({params}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <>
    <Header dictionary={dictionary} />
    <EventsPage lang={lang} />
    <Footer dictionary={dictionary}/>
   </>
  )
}
