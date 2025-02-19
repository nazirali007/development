
"use client";
import useEmblaCarousel, {
    type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { StrapiCampaignType } from '@/types/collections/campaign';
import { StrapiTripType } from '@/types/collections/trips';
import { StrapiActivityInterface } from '@/types/collections/activity';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Link from "next/link";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { formatIndianRupees } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
type PrevNextProps = {
    // onPrev:()=> void
    // onNext:()=> void
    // canScrollPrev: boolean
    // canScrollNext: boolean
    className?: string

}

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, PrevNextProps>(
    ({ className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn("flex item-center justify-center", className)}

                {...props}
            >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
            </button>
        )
    })
CarouselPrevious.displayName = "CarouselPrevious"

export const CarouselNext = React.forwardRef<HTMLButtonElement, PrevNextProps>(
    ({ className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn("flex item-center justify-center", className)}

                {...props}
            >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
            </button >
        )
    })
CarouselNext.displayName = "CarouselNext"




export default function ReelCardsLarge({ data }: { data: StrapiCampaignType }) {
    const navigationPrevRef = React.useRef<HTMLDivElement>(null);
    const navigationNextRef = React.useRef<HTMLDivElement>(null);
    //console.log(data);

    return (
      <div className="hidden md:block">
        
        <div
            // modules={[Navigation, Pagination, A11y]}
            // spaceBetween="15rem"
            // breakpoints={{
            //     640: { spaceBetween: "15rem", slidesPerView: 1 },
            //     768: { spaceBetween: "20rem", slidesPerView: 2 },
            //     1024: { spaceBetween: "20rem", slidesPerView: 3 },
            // }}
            // slidesPerView={1}
            // pagination={{ clickable: true }}
            // // breakpoints={{
            // //     640: {},
            // //     768: { slidesPerView: 2 },
            // //     1024: { slidesPerView: 3 },
            // // }}
            // navigation={{
            //     prevEl: navigationPrevRef.current,
            //     nextEl: navigationNextRef.current,
            // }}
            // onSwiper={(swiper) => {
            //     // Update navigation elements once Swiper is initialized
            //     if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
            //         swiper.params.navigation.prevEl = navigationPrevRef.current;
            //         swiper.params.navigation.nextEl = navigationNextRef.current;
            //         swiper.navigation.init();
            //         swiper.navigation.update();
            //     }
            // }}
            className="w-full dmsans z-50 !mt-[2.5rem] md:!mt-[3.75rem] grid !-ml-8 md:!-mr-0 md:!-ml-0  max-w-[1078px] h-auto !px-8 md:!px-[0rem] relative overflow-hidden lg:grid-cols-3 md:grid-cols-2 gap-[32px] "
        >
            
                {data?.attributes?.activities?.data.map((data: StrapiActivityInterface) => (
                    <div key={data.id} className=" !mb-[1.875rem] flex justify-start !rounded-[1rem] w-[21.5rem] md:!w-[280px] lg:!w-[338px] overflow-hidden h-[31.375rem] md:h-[380px] lg:h-[428px]">

                        
                            <article className=" relative w-full h-full flex !rounded-[1rem] justify-center pb-8 pt-40 mx-auto">

                                <Image
                                    src={`${data?.attributes?.image?.data?.attributes.url}`}
                                    alt="Trip Image"
                                    fill
                                    className="rounded-[1rem] inset-0 object-cover"
                                />
                                <div className="absolute !rounded-xl inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#000000]  via-[50%] to-transparent"></div>
                                <div className="absolute rounded-xl inset-0  pr-2">
                                    <div className="absolute bottom-5 px-4 text-[#FFFFFF] text-[1.5rem] font-[700] self-stretch">
                                        {data?.attributes?.name}
                                    </div>
                                </div>

                            </article>
                        



                    </div>
                ))}


            

            {/* <div
                ref={navigationPrevRef}
                className=" !bg-gray-300  !hidden md:!block rounded-full shadow-lg absolute px-1 py-1 left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
            >
                <CarouselPrevious className="text-black flex item-center justify-center mt-2 h-6 w-8" />



            </div>

            <div
                ref={navigationNextRef}
                className=" !bg-gray-300  !hidden md:!block  rounded-full shadow-lg absolute px-1 py-1 right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
            >
                <CarouselNext className=" text-black flex item-center justify-center mt-2 h-6 w-8" />

            </div> */}


        </div>
        </div>

    );
}
