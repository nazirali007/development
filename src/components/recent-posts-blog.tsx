"use client";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Icons } from "@/assets/icons";

export default function RecentPosts({
  posts,
}: {
  posts: {
    blogname: string;
    blogslug: string;
    coverimagealttag: string;
    bannerimagealttag: string;
    coverImageUrl: string;
    bannerImageUrl: string;
    miniDescription: React.JSX.Element;
    createdAt: Date;
  }[];
}) {
  return (
    <div className='relative mx-auto h-full w-full max-w-7xl'>
      <button className='imgCarousel-prev absolute -left-0 top-1/3 h-16 w-10 -translate-y-1/2 scale-125 opacity-50 hover:opacity-100 lg:-left-4 lg:w-16'>
        <Icons.chevronLeft className='absolute h-full w-full object-cover' />
      </button>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        navigation={{
          nextEl: ".imgCarousel-next",
          prevEl: ".imgCarousel-prev",
        }}
        pagination={false}
        modules={[Navigation, Pagination]}
        className='max-w-[80%] items-center justify-center p-2 sm:max-w-[90%] md:flex'
      >
        {posts.map((data, index) => (
          <SwiperSlide key={index} className='p-1'>
            <Link
              href={`/blog/${data.blogslug}`}
              className='relative flex h-[200px] items-end p-2'
            >
              <Image
                src={data.coverImageUrl}
                alt={data.coverimagealttag}
                fill
                className='object-cover'
                blurDataURL='/assets/249.jpg'
                quality={50}
              />
              <div className='absolute left-0 top-0 h-full w-full bg-black/70' />
              <div className='relative flex flex-col'>
                <p className='text-sm font-semibold text-white'>
                  {data.blogname}
                </p>
                <p className='text-sm font-semibold text-white'>
                  {format(new Date(), "dd-MM-yyyy")}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='imgCarousel-next absolute -right-0 top-1/3 h-16 w-10 -translate-y-1/2 scale-125 opacity-50 hover:opacity-100 lg:-right-4 lg:w-16'>
        <Icons.chevronRight className='absolute h-full w-full object-cover' />
      </button>
    </div>
  );
}
