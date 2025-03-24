"use client";
import DeepBloodBackground from "@/components/common/DeepBloodBackground";
import Headline from "@/components/common/Headline";
import ImageSlider from "@/components/home/events/Slider";
import Link from "next/link";


export default function EventsSlider({ dictionary, lang }) {

  return (
    <DeepBloodBackground>
      <div className="container py-12">
        <div className="flex flex-col items-center">
          <Headline header={dictionary.events} />
          <ImageSlider lang={lang} />
          <Link
            href="/events"
            className="bg-brand cursor-pointer rounded px-4 py-2 text-sm text-white md:px-6 md:text-base"
          >
            {dictionary.more} {">>"}
          </Link>
        </div>
        
          
        
      </div>
    </DeepBloodBackground>
  );
}
