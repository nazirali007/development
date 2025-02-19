"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";

const text = [
  { name: "I Came, I Saw, I Captured" },
  { name: "Exploring the unexplored" },
  { name: "Challenging the unchallenged" },
  { name: "Bonding with people" },
  { name: "Creating memories" },
];

export default function HomeAnimation() {
  return (
    <div className='mb-10 lg:-mb-4 lg:-mt-4'>
      <Swiper
        direction='vertical'
        loop={true}
        speed={2000}
        autoplay={{
          delay: 500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwiper h-8 w-full sm:h-10 lg:h-12 xl:h-14'
      >
        {text.map((data: any, index: number) => (
          <SwiperSlide key={index} className='h-fit px-2 py-1'>
            <h2 className='select-none text-center text-lg font-semibold text-white sm:text-3xl lg:text-4xl xl:text-5xl'>
              {data.name}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
