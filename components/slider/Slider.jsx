"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetGraffitiQuery } from "@/redux/features/julyApi";
import Loading from "../common/Loader";

const slides = [
  { id: 1, image: "home-slide-1.svg", alt: "Banner 1" },
  { id: 2, image: "home-slide-2.svg", alt: "Banner 2" },
  { id: 3, image: "home-slide-3.svg", alt: "Banner 3" },
];

const BannerSlider = () => {
  
  return (
    <div className="w-full  mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full aspect-[16/7] md:aspect-[16/5]">
              <img
                src={slide.image}
                alt={slide.image}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
