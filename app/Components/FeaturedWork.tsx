"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function FeaturedWork() {
  return (
    <div>
      <div className="px-30 my-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-bold">Featured work</h1>

          <h6 className="font-semibold">
            Curated photographs that deserve your attention
          </h6>
        </div>

        {/* Slider to display images */}
        <Swiper slidesPerView={1} pagination={{ clickable: true }}>
          <SwiperSlide>
            <img src="img3.png" alt="1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img8.PNG" alt="2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img9.PNG" alt="3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
