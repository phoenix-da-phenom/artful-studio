"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function FeaturedWork() {
  return (
    <div className="px-6 md:px-16 lg:px-24 my-20">
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Featured Work
        </h1>

        <h6 className="font-semibold text-gray-600">
          Curated photographs that deserve your attention
        </h6>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img
            src="/img3.png"
            alt="1"
            className="w-full h-[250px] md:h-[300px] object-cover rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/img8.PNG"
            alt="2"
            className="w-full h-[250px] md:h-[300px] object-cover rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/img18.jpg"
            alt="3"
            className="w-full h-[250px] md:h-[300px] object-cover rounded-xl"
          />
        </SwiperSlide>
               <SwiperSlide>
          <img
            src="/img10.jfif"
            alt="1"
            className="w-full h-[250px] md:h-[300px] object-cover rounded-xl"
          />
        </SwiperSlide>
               <SwiperSlide>
          <img
            src="/img12.jfif"
            alt="1"
            className="w-full h-[250px] md:h-[300px] object-cover rounded-xl"
          />
        </SwiperSlide>
               <SwiperSlide>
          <img
            src="/img15.jpg"
            alt="1"
            className="w-full h-[250px] md:h-[300px] object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}