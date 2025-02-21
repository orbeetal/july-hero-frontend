"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  useGetInjuredBannerQuery } from "@/redux/features/julyApi";
import Loading from "../common/Loader";

const InjuredSlider = ({ lang = "en",  }) => {
  // Fetch banners using RTK Query
  const { data: banners, isLoading, isError } = useGetInjuredBannerQuery({ lang });

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-red-500 text-center">Failed to load banners</p>;

  return (
    <div className="w-full mx-auto">
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
        {banners?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="w-full aspect-[16/7] md:aspect-[16/5]">
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InjuredSlider;
