"use client";

import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";
import { Icons } from "@/assets/icons";

export default function YouTubeCarousel() {
  const [iframe1, setIframe1] = useState(false);
  const [iframe2, setIframe2] = useState(false);
  const [iframe3, setIframe3] = useState(false);
  const [iframe4, setIframe4] = useState(false);
  const [iframe5, setIframe5] = useState(false);

  return (
    <section className='my-10 flex w-full flex-col gap-8 px-4'>
      <div>
        <h2 className='text-center text-2xl font-semibold uppercase text-textColor sm:text-4xl'>{`The Reality Of A Trip`}</h2>
        <p className='text-center text-gray-500'>{`Testimonials, Reviews, Experiences, Virtual Tours & Much More`}</p>
      </div>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='relative h-full w-full scale-125 overflow-hidden md:scale-110 lg:scale-110'>
          <button className='ytCarousel-prev absolute -left-2 top-8 h-10 w-10 scale-125 opacity-50 hover:opacity-100 sm:-left-4 sm:h-12 sm:w-12 md:top-6 lg:-left-6 lg:top-1/4 lg:w-20'>
            <Icons.chevronLeft className='absolute h-full w-full' />
          </button>
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 6,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 6,
              },
            }}
            navigation={{
              nextEl: ".ytCarousel-next",
              prevEl: ".ytCarousel-prev",
            }}
            pagination={false}
            modules={[Navigation, Pagination]}
            className='max-w-[80%] items-center justify-center p-2 sm:max-w-[90%] md:flex'
          >
            <SwiperSlide className='px-0'>
              <div
                className='group h-40 w-full cursor-pointer overflow-hidden rounded-[30px] lg:h-48'
                onClick={() => setIframe1(true)}
              >
                {!iframe1 ? (
                  <div className='relative h-40 w-full lg:h-48'>
                    <Image
                      src={`/assets/images/img-62.jpg`}
                      alt=''
                      fill
                      className='object-cover'
                      blurDataURL='/assets/249.jpg'
                      quality={50}
                    />
                    <div className='absolute left-[40%] top-[40%] z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 lg:left-[48%] lg:top-[52%] lg:h-20 lg:w-20'>
                      <div className='absolute hidden h-full w-full group-hover:block'>
                        <Icons.ytSVGred className='h-full w-full' />
                      </div>
                      <div className='absolute h-full w-full opacity-60 group-hover:hidden'>
                        <Icons.ytSVGwhite className='h-full w-full' />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className='h-full w-full'
                    src={`https://www.youtube-nocookie.com/embed/_0aVwBXh4OU?si=1fAxTngC6oOO8d7e&autoplay=1`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide className='px-0'>
              <div
                className='group h-40 w-full cursor-pointer overflow-hidden rounded-[30px] lg:h-48'
                onClick={() => setIframe2(true)}
              >
                {!iframe2 ? (
                  <div className='relative h-40 w-full lg:h-48'>
                    <Image
                      src={`/assets/images/img-63.jpg`}
                      alt=''
                      fill
                      className='object-cover'
                      blurDataURL='/assets/249.jpg'
                      quality={50}
                    />
                    <div className='absolute left-[48%] top-[52%] z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2'>
                      <div className='absolute hidden h-full w-full group-hover:block'>
                        <Icons.ytSVGred className='h-full w-full' />
                      </div>
                      <div className='absolute h-full w-full opacity-60 group-hover:hidden'>
                        <Icons.ytSVGwhite className='h-full w-full' />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className='h-full w-full'
                    src={`https://www.youtube.com/embed/-4hUuWDZwZg?si=Rl9x3MwUe7YYk3kA&autoplay=1`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide className='px-0'>
              <div
                className='group h-40 w-full cursor-pointer overflow-hidden rounded-[30px] lg:h-48'
                onClick={() => setIframe3(true)}
              >
                {!iframe3 ? (
                  <div className='relative h-40 w-full lg:h-48'>
                    <Image
                      src={`/assets/images/img-64.jpg`}
                      alt=''
                      fill
                      className='object-cover'
                      blurDataURL='/assets/249.jpg'
                      quality={50}
                    />
                    <div className='absolute left-[48%] top-[52%] z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2'>
                      <div className='absolute hidden h-full w-full group-hover:block'>
                        <Icons.ytSVGred className='h-full w-full' />
                      </div>
                      <div className='absolute h-full w-full opacity-60 group-hover:hidden'>
                        <Icons.ytSVGwhite className='h-full w-full' />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className='h-full w-full'
                    src={`https://www.youtube.com/embed/RQrWFzNgye8?si=mZSQXeqAw2R3Byeb&autoplay=1`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide className='px-0'>
              <div
                className='group h-40 w-full cursor-pointer overflow-hidden rounded-[30px] lg:h-48'
                onClick={() => setIframe4(true)}
              >
                {!iframe4 ? (
                  <div className='relative h-40 w-full lg:h-48'>
                    <Image
                      src={`/assets/images/img-65.jpg`}
                      alt=''
                      fill
                      className='object-cover'
                      blurDataURL='/assets/249.jpg'
                      quality={50}
                    />
                    <div className='absolute left-[48%] top-[52%] z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2'>
                      <div className='absolute hidden h-full w-full group-hover:block'>
                        <Icons.ytSVGred className='h-full w-full' />
                      </div>
                      <div className='absolute h-full w-full opacity-60 group-hover:hidden'>
                        <Icons.ytSVGwhite className='h-full w-full' />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className='h-full w-full'
                    src={`https://www.youtube.com/embed/bTJYKFdSwcA?si=tWN_bt_Sy8xhU8u0&autoplay=1`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide className='px-0'>
              <div
                className='group h-40 w-full cursor-pointer overflow-hidden rounded-[30px] lg:h-48'
                onClick={() => setIframe5(true)}
              >
                {!iframe5 ? (
                  <div className='relative h-40 w-full lg:h-48'>
                    <Image
                      src={`/assets/images/img-66.jpg`}
                      alt=''
                      fill
                      className='object-cover'
                      blurDataURL='/assets/249.jpg'
                      quality={50}
                    />
                    <div className='absolute left-[48%] top-[52%] z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2'>
                      <div className='absolute hidden h-full w-full group-hover:block'>
                        <Icons.ytSVGred className='h-full w-full' />
                      </div>
                      <div className='absolute h-full w-full opacity-60 group-hover:hidden'>
                        <Icons.ytSVGwhite className='h-full w-full' />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className='h-full w-full'
                    src={`https://www.youtube.com/embed/9ZopTKh72Vo?si=Ep9Rm_NvQG32ZhZe&autoplay=1`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  />
                )}
              </div>
            </SwiperSlide>
          </Swiper>
          <button className='ytCarousel-next absolute -right-2 top-8 h-10 w-10 scale-125 opacity-50 hover:opacity-100 sm:-right-4 sm:h-12 sm:w-12 md:top-6 lg:-right-6 lg:top-1/4 lg:w-20'>
            <Icons.chevronRight className='absolute h-full w-full' />
          </button>
        </div>
      </div>
    </section>
  );
}
