"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useGetGraffitiQuery } from "@/redux/features/julyApi";
import Loading from "@/components/common/Loader";

const images = [
    { src: "/graffiti-1.svg", name: "টিএসি", location: "ঢাকা বিশ্ববিদ্যালয়" },
    { src: "/graffiti-2.svg", name: "শাহজালাল বিশ্ববিদ্যালয়", location: "সিলেট" },
    { src: "/graffiti-3.svg", name: "আনেয়ারা", location: "চট্টগ্রাম" },
    { src: "/graffiti-4.svg", name: "ব্রাহ্মণবাড়িয়া", location: "কুমিল্লা" },
];

const ImageSlider = () => {
    const { data: graffiti, error, isLoading } = useGetGraffitiQuery();

    if (isLoading) return <Loading />;
    if (error)
      return <p className="text-red-500 text-center">Error fetching graffiti...</p>;
    return (
        <div className="flex justify-center items-center w-full py-10">
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
                className="w-[80%] max-w-4xl"
                modules={[EffectCoverflow, Autoplay]}
            >
                {graffiti?.data?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-xl overflow-hidden shadow-lg"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover "
                        />

                        {/* Overlay with Name & Location */}
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-sm">{item.location}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
