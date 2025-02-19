
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
            </button>
        )
    })
CarouselNext.displayName = "CarouselNext"




export default function TripCardsLarge({ data }: { data: StrapiCampaignType }) {
    const navigationPrevRef = React.useRef<HTMLDivElement>(null);
    const navigationNextRef = React.useRef<HTMLDivElement>(null);
    // console.log(data);

    return (

        <div className="hidden md:block">
            <div
                className="w-full dmsans z-50 !mt-[2.5rem] md:!mt-[3.75rem] grid !-ml-8 md:!-mr-0 md:!-ml-0  max-w-[1078px] h-auto !px-8 md:!px-[0rem] relative overflow-hidden lg:grid-cols-3 md:grid-cols-2 gap-[32px] "
            >

                {data?.attributes?.trips?.data?.map((trip: StrapiTripType) => (
                    <div key={trip.id} className=" !mb-[1.875rem] flex justify-start !rounded-[1rem] w-[21.5rem] md:!w-[280px] lg:!w-[338px] overflow-hidden h-[31.375rem] md:h-[380px] lg:h-[428px]">


                        <article className=" relative w-full h-full flex !rounded-[1rem] justify-start flex-col pb-8 pt-0 mx-auto">
                            <div className="h-full w-full  relative top-0">
                                <Image
                                    src={
                                        trip.attributes?.bannerimage?.data?.attributes?.url ??
                                        trip.attributes?.coverimage?.data?.attributes?.url ??
                                        trip?.attributes?.bannerimageurl ??
                                        trip?.attributes?.coverimageurl ??
                                        "/campaign.png"
                                    }
                                    alt="Trip Image"
                                    fill
                                    className="rounded-[1rem] w-full  object-cover "
                                />
                            </div>
                            <div className="h-[32.71%] w-full "></div>
                            <div className="absolute !rounded-xl inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#007DBC] via-[#007DBC] via-[70%] to-transparent"></div>
                            <div className="absolute rounded-xl inset-0  pr-2">
                                <div className="absolute px-4 bottom-0 w-full mx-auto gap-0 flex flex-col pb-1">
                                    <div className="flex justify-between mb-[0.75rem]">
                                        <div className="text-[#FFFFFF] leading-[1.302rem] text-[1rem]  font-[500] w-auto h-[1.313rem]">
                                            {trip?.attributes?.durationdays} Days ,
                                            {trip?.attributes?.durationdays! - 1} Nights
                                        </div>
                                        <div className="text-[#FFFFFF] text-[1rem] font-[500] flex gap-2 justify-center leading-[1.302rem] items-center">
                                            <Image
                                                src={
                                                    "/campaign/fluent-mdl2_group.svg"
                                                }
                                                alt="group Image"
                                                width={50}
                                                height={50}
                                                className="w-[1.25rem] h-[1.25rem]"
                                            />
                                            {trip?.attributes?.isCustomized ? "Custom" : "Group"}
                                        </div>
                                    </div>
                                    <div className="text-[#FFFFFF] w-[16.25rem] h-[3.25rem] font-[600] text-[1.25rem] mb-[0.5rem] leading-[1.628rem] ">
                                        {trip?.attributes?.name}
                                    </div>
                                    <div className="text-[#FFFFFF]  flex items-center gap-1 mt-[0rem]  justify-start w-[5.563rem] h-[1.625rem]  text-[1.25rem] font-[500] mb-[0.5rem]">
                                        <Image
                                            src={
                                                "/campaign/currency_rupeenew.svg"
                                            }
                                            alt="Google Image"
                                            height={10}
                                            width={10}
                                            className="h-[20px] w-[20px]"
                                        />
                                        {formatIndianRupees(Number(trip.attributes.price) || 0)}
                                    </div>
                                    <Link
                                        href="#"
                                        target="_blank"
                                        className="flex items-center text-[0.983rem] text-[#FFFFFF] gap-2 mb-[1.25rem]"
                                    >
                                        {/* <CalendarDays className="h-5 w-5 text-white" /> */}
                                        <Image
                                            src={
                                                "/campaign/calendarnew.svg"
                                            }
                                            alt="calendar Image"
                                            height={10}
                                            width={10}
                                            className="h-[20px] w-[20px]"
                                        />
                                        {trip?.attributes?.isCustomized ? (
                                            <span className="">Date of your choice</span>
                                        ) : !trip?.attributes?.dates || trip?.attributes?.dates.length === 0 ? (
                                            <span className="">Date on request</span>
                                        ) : (
                                            trip?.attributes?.dates
                                                ?.filter(
                                                    (date: { tripdate: string }) => new Date(date.tripdate) > new Date()
                                                )
                                                .map((date: { tripdate: string }) =>
                                                    format(new Date(date.tripdate), "MMM dd")
                                                )
                                                .join(", ")
                                        )}
                                    </Link>
                                    <div className="flex w-full justify-center">
                                        <Link href="#form1" className="w-[20.5rem] h-[2.813rem] lg:w-full flex items-center justify-center px-[3rem] md:px-[4.063rem] mb-[0.875rem] py-[0.75rem] bg-[#FFFFFF] rounded-[0.75rem]">
                                            <div className="text-center text-[#007DBC] font-[500] text-[1rem] ">
                                                Request a Callback
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </article>




                    </div>
                ))}






            </div>
        </div>


    );
}
