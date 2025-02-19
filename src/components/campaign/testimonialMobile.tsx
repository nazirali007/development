
"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from "@/lib/utils"
import React, { useState } from 'react';
import { StrapiCampaignType } from '@/types/collections/campaign';


export default function TestimonialMobile({ data }: { data: StrapiCampaignType }) {
  const navigationPrevRef = React.useRef<HTMLDivElement>(null);
  const navigationNextRef = React.useRef<HTMLDivElement>(null);
  const totalStars = 5;


  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());


  const toggleExpand = (id: number) => {
    setExpandedReviews((prev) => {
      const updatedReviews = new Set(prev);
      if (updatedReviews.has(id)) {
        updatedReviews.delete(id);
      } else {
        updatedReviews.add(id);
      }
      return updatedReviews;
    });
  };



  return (

    <div className="mt-[40px] md:hidden">
      <div className="z-20 font-[600] flex justify-start px-6 text-[2rem] lg:text-[2.75rem]">
        Our <span className="text-[#007DBC]">&nbsp;Testimonials</span>
      </div>



      <Carousel
        className=' mt-6 h-full w-screen -ml-[0rem] overflow-visible'
        opts={{
          align: "center",
        }}
      >
        <CarouselContent className='w-full flex gap-[16px]'>
          {data?.attributes?.testimonies?.data?.map((item: any, index: number) => {
            const isLast = index === data?.attributes?.testimonies?.data?.length - 1;
            const isFirst = index === 0;
            return (
              <CarouselItem
                key={item.id}
                className={cn(
                  'dmsans flex h-auto w-[70%] min-w-[200px] basis-1.55/2 justify-stretch self-stretch sm:basis-1/2 md:basis-1/3',
                  {
                    'ml-[20px]': isFirst,
                    'mr-[20px]': isLast
                  }
                )}
              >
                <div className="max-w-sm  border-2 border-black rounded-xl"
                  style={{
                    maxHeight: expandedReviews.has(item.id) ? '900px' : '270px',
                  }}
                >
                  <div className="px-4 py-4 "

                  >
                    {/* Title */}
                    <p className="mb-3 text-xl leading-6 font-[600] tracking-tight text-gray-900">
                      {item?.attributes?.Title}
                    </p>

                    {/* Star Rating */}
                    <div className="flex">
                      {[...Array(totalStars)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={
                            index < parseInt(item?.attributes.rating)
                              ? 'yellow'
                              : 'none'
                          }
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="w-8 h-6 text-yellow-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                      ))}
                    </div>


                    <div className="relative">
                      <div
                        className={
                          'transition-[max-height] duration-700 ease-in-out overflow-hidden text-justify'
                        }

                      >
                        <span className="mb-3 font-medium text-sm text-gray-900">
                          {expandedReviews.has(item.id)
                            ? item?.attributes?.review
                            : `${item?.attributes?.review.slice(0, 140)}...`}
                        </span>
                        <span
                          className="text-sm font-semibold text-[#007DBC]  transition-colors delay-150 cursor-pointer ml-1"
                          onClick={() => toggleExpand(item.id)}
                        >
                          {expandedReviews.has(item.id) ? 'Show Less' : 'Show More'}
                        </span>
                      </div>
                    </div>



                  </div>
                  <p className="mb-3 mt-2 font-extrabold text-center text-gray-900">
                    {item?.attributes?.name}
                  </p>
                </div>
              </CarouselItem>

            )
          }
          )}
        </CarouselContent>

        <CarouselNext
          aria-label='Next'
          className={cn(`absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 bg-gray-300 md:flex 2xl:-right-10`)}
        />

        <CarouselPrevious
          aria-label='Previous'
          className={cn(`absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 bg-gray-300 md:flex 2xl:-left-12`)}
        />
      </Carousel>

    </div>




  );
}
