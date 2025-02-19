"use client";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Icons } from "@/assets/icons";

export default function ImgSliderTrip({ photos }: { photos: string[] }) {
  return (
    <div className='relative h-full w-full'>
      <button className='imgCarousel-prev absolute -left-6 top-8 h-16 w-10 scale-125 opacity-50 hover:opacity-100 sm:-left-4 lg:w-16'>
        <Icons.chevronLeft className='absolute h-full w-full object-cover' />
      </button>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.1,
            spaceBetween: 5,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        navigation={{
          nextEl: ".imgCarousel-next",
          prevEl: ".imgCarousel-prev",
        }}
        pagination={false}
        modules={[Navigation, Pagination]}
        className='max-w-[90%] items-center justify-center p-2 md:flex'
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo} className='cursor-pointer p-1'>
            <Dialog>
              <DialogTrigger asChild>
                <div className='relative h-[200px]'>
                  <Image
                    src={photo}
                    alt=''
                    fill
                    className='object-cover'
                    placeholder='blur'
                    blurDataURL='/assets/249.jpg'
                  // quality={50}
                  />
                </div>
              </DialogTrigger>
              <DialogContent className='h-[50vh] w-full p-0 sm:max-w-[40vw]'>
                <div className='relative'>
                  <Image
                    src={photo}
                    alt=''
                    fill
                    className='object-cover'
                    placeholder='blur'
                    blurDataURL='/assets/249.jpg'
                  // quality={50}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='imgCarousel-next absolute -right-6 top-8 h-16 w-10 scale-125 opacity-50 hover:opacity-100 sm:-right-4 lg:w-16'>
        <Icons.chevronRight className='absolute h-full w-full object-cover' />
      </button>
    </div>
  );
}
