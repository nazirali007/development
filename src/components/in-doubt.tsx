"use client";

import Image from "next/image";
import React from "react";
import QueryForm from "./reusable/query-form";

type ImgProp = {
  imgName: string;
};

export default function InDoubt({ imgName }: ImgProp) {
  const [showPopup, setshowPopup] = React.useState<boolean>(false);

  return (
    <section className='bg-primaryMain py-8 md:py-12 lg:my-16'>
      <div className='mx-auto relative flex w-full max-w-[1400px] shadow-md flex-col justify-center items-center overflow-hidden md:rounded-lg bg-white md:flex-row'>

        <div className='flex flex-col items-center gap-2 p-6 md:my-auto md:w-1/2 lg:p-10 w-full'>
          <h2 className='text-3xl text-center xl:text-3x1 font-bold text-primaryMain md:text-2xl lg:text-3xl xl:text-5xl'>
            In doubt{` `}? Can&apos;t decide{` `}?
          </h2>
          <p className='text-center text-xs md:text-sm font-normal lg:text-lg mt-4'>
            Don&apos; t hesitate & hand over your queries to our travel experts
            and let them assist you with their authentic traveling insights.
          </p>
          <button
            onClick={() => setshowPopup(true)}
            className='lg:mt-4 rounded-md z-10 shadow-sm bg-primaryMain px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-primaryMain/95 hover:text-white'
          >
            Get a Quote
          </button>
          <p className='lg:mt-4 w-fit rounded-md px-1 py-2 text-center text-xs font-semibold lg:w-2/4 lg:px-2 lg:py-1 lg:text-sm bg-primaryMain/10'>
            <span className='text-xs lg:text-sm font-semibold'>
              We&apos;re always excited to pick up your calls
            </span>
          </p>

          {/* svg images in backgroun */}
          <div className='absolute -right-8 -top-8 h-60 w-60 rounded-full bg-primaryMain opacity-10 sm:-right-9 sm:-top-9'>
          </div>

          <div className='absolute hidden md:block left-0 top-0 bottom-0 w-[33%]'>
            <Image
              src={`/assets/images/in-doubt-svg.svg`}
              alt='In Doubt Image'
              fill
              loading="lazy"
              className="lg:m-4 sm:scale-100 md:scale-150 lg:scale-150 object-contain"
            />
          </div>

          <div className='absolute right-0 top-0 bottom-0 w-[33%]'>
            <Image
              src={`/assets/images/in-doubt.svg`}
              alt='In Doubt Image'
              fill
              loading="lazy"
              className="m-4 object-contain"
            />
          </div>

        </div>
      </div>

      <QueryForm showPopup={showPopup} setshowPopup={setshowPopup} />
    </section>
  );
}
