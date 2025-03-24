"use client";
import Loading from "@/components/common/Loader";
import { useGetEventsQuery } from "@/redux/features/julyApi";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  { src: "/event-1.svg", name: "টিএসি", location: "ঢাকা বিশ্ববিদ্যালয়" },
  { src: "/event-2.svg", name: "শাহজালাল বিশ্ববিদ্যালয়", location: "সিলেট" },
  { src: "/event-3.svg", name: "আনেয়ারা", location: "চট্টগ্রাম" },
  { src: "/event-4.svg", name: "ব্রাহ্মণবাড়িয়া", location: "কুমিল্লা" },
];

const ImageSlider = ({ lang }) => {
  const { data: events, error, isLoading } = useGetEventsQuery(lang);

  if (isLoading) return <Loading />;
  if (error)
    return <p className="text-center text-red-500">Error fetching event...</p>;
  return (
    <div className="flex w-full items-center justify-center py-10">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="w-full max-w-4xl"
        modules={[EffectCoverflow, Autoplay]}
      >
        {events?.data?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative h-[250px] w-[250px] overflow-hidden rounded-xl shadow-lg md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />

            {/* Overlay with Title & Date */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 md:p-4 text-white">
              <h3 className="text-sm md:text-lg font-bold">{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
