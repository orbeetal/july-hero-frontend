import GraffitiPage from '@/components/graffiti/GalleryPage'
import React from 'react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "@/dictionaries";

export default async function Graffiti({params}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <>
    <Header dictionary={dictionary} />
    <GraffitiPage />
    <Footer dictionary={dictionary}/>
   </>
  )
}
