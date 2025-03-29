import Footer from "@/components/Footer";
import GraffitiPage from "@/components/graffiti/GalleryPage";
import Header from "@/components/Header";
import { getDictionary } from "@/dictionaries";

export default async function Graffiti({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header dictionary={dictionary} lang={lang} />
      <GraffitiPage lang={lang} />
      <Footer dictionary={dictionary} lang={lang} />
    </>
  );
}
