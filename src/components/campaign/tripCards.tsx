
"use client";
import useEmblaCarousel, {
    type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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

// export const CarouselPrevious = React.forwardRef<HTMLButtonElement, PrevNextProps>(
//     ({ className, ...props }, ref) => {
//         return (
//             <button
//                 ref={ref}
//                 className={cn("flex item-center justify-center", className)}

//                 {...props}
//             >
//                 <ArrowLeft className="h-4 w-4" />
//                 <span className="sr-only">Previous slide</span>
//             </button>
//         )
//     })
// CarouselPrevious.displayName = "CarouselPrevious"

// export const CarouselNext = React.forwardRef<HTMLButtonElement, PrevNextProps>(
//     ({ className, ...props }, ref) => {
//         return (
//             <button
//                 ref={ref}
//                 className={cn("flex item-center justify-center", className)}

//                 {...props}
//             >
//                 <ArrowRight className="h-4 w-4" />
//                 <span className="sr-only">Previous slide</span>
//             </button>
//         )
//     })
// CarouselNext.displayName = "CarouselNext"




export default function TripCards({ data }: { data: StrapiCampaignType }) {
    const navigationPrevRef = React.useRef<HTMLDivElement>(null);
    const navigationNextRef = React.useRef<HTMLDivElement>(null);
    // console.log(data);

    return (
        // <div className="w-screen flex justify-center md:hidden">
        //     <Swiper
        //         modules={[Navigation, Pagination, A11y]}
        //         spaceBetween="15rem"
        //         breakpoints={{
        //             640: { spaceBetween: "15rem", slidesPerView: 1 },
        //             768: { spaceBetween: "20rem", slidesPerView: 2 },
        //             1024: { spaceBetween: "20rem", slidesPerView: 3 },
        //         }}
        //         slidesPerView={1}
        //         pagination={{ clickable: true }}
        //         // breakpoints={{
        //         //     640: {},
        //         //     768: { slidesPerView: 2 },
        //         //     1024: { slidesPerView: 3 },
        //         // }}
        //         navigation={{
        //             prevEl: navigationPrevRef.current,
        //             nextEl: navigationNextRef.current,
        //         }}
        //         onSwiper={(swiper) => {
        //             // Update navigation elements once Swiper is initialized
        //             if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
        //                 swiper.params.navigation.prevEl = navigationPrevRef.current;
        //                 swiper.params.navigation.nextEl = navigationNextRef.current;
        //                 swiper.navigation.init();
        //                 swiper.navigation.update();
        //             }
        //         }}
        //         className="w-screen dmsans z-20 md:w-[90vw] !flex !-ml-8 !mt-[2.5rem] md:!mt-[3.75rem] md:!-mr-0 md:!-ml-2 !pr-20 !justify-start !mx-2 !px-6 md:!px-10 relative overflow-hidden mb-0 md:mb-2"
        //     >
        //         <div className=" !w-[10%] !flex justify-center overflow-hidden">
        //             {data?.attributes?.trips?.data?.map((trip: StrapiTripType) => (
        //                 <SwiperSlide key={trip.id} className="  !mb-12 flex justify-start !rounded-[1rem] !w-full md:!w-[45%] lg:!w-[30%]  h-[20.5rem] md:h-[50vh] lg:h-[30.375rem] overflow-hidden">

        //                     <div className=" h-[20.5rem] md:h-[50vh] lg:h-[30.375rem] ">
        //                         <article className=" relative w-full h-full flex !rounded-[1rem] justify-center pb-8 pt-40 mx-auto">

        //                             <Image
        //                                 src={
        //                                     trip.attributes?.bannerimage?.data?.attributes?.url ??
        //                                     trip.attributes?.coverimage?.data?.attributes?.url ??
        //                                     trip?.attributes?.bannerimageurl ??
        //                                     trip?.attributes?.coverimageurl ??
        //                                     "/campaign.png"
        //                                 }
        //                                 alt="Trip Image"
        //                                 fill
        //                                 className="rounded-[1rem] inset-0 object-cover"
        //                             />
        //                             <div className="absolute !rounded-xl inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#007DBC] via-[#007DBC] via-[70%] to-transparent"></div>
        //                             <div className="absolute rounded-xl inset-0  pr-2">
        //                                 <div className="absolute px-4 bottom-0 w-full mx-auto flex flex-col pb-1">
        //                                     <div className="flex justify-between mb-[0.5rem]">
        //                                         <div className="text-white text-[0.75rem] leading-[0.976rem] md:leading-[1.302rem]  md:text-[1rem]  font-[500] w-auto h-[1rem]">
        //                                             {trip?.attributes?.durationdays} Days ,
        //                                             {trip?.attributes?.durationdays! - 1} Nights
        //                                         </div>
        //                                         <div className="text-white text-[12px] md:text-[1rem] font-[500] flex gap-2 justify-center items-center">
        //                                             <Image
        //                                                 src={
        //                                                     "/campaign/fluent-mdl2_group.svg"
        //                                                 }
        //                                                 alt="group Image"
        //                                                 width={50}
        //                                                 height={50}
        //                                                 className="w-[1rem] h-[0.75rem]"
        //                                             />
        //                                             {trip?.attributes?.isCustomized ? "Custom" : "Group"}
        //                                         </div>
        //                                     </div>
        //                                     <div className="text-white w-[11.75rem]  h-[2.625rem] mb-[0.25rem] md:w-[15.625rem] font-[600] text-[1rem] md:text-[1.5rem] leading-[1.302rem] md:leading-[1.953rem] ">
        //                                         {trip?.attributes?.name}
        //                                     </div>
        //                                     <div className="text-white  flex items-center gap-1 mb-[0.25rem]   justify-start text-[1rem] md:text-[1.5rem] font-[500]">
        //                                         <Image
        //                                             src={
        //                                                 "/campaign/currency_rupeenew.svg"
        //                                             }
        //                                             alt="Google Image"
        //                                             height={10}
        //                                             width={10}
        //                                             className="h-[18px] w-[18.43px]"
        //                                         />
        //                                         {formatIndianRupees(Number(trip.attributes.price) || 0)}
        //                                     </div>
        //                                     <Link
        //                                         href="#"
        //                                         target="_blank"
        //                                         className="flex text-[0.75rem] mb-[15px] items-center text-white gap-2"
        //                                     >
        //                                         {/* <CalendarDays className="h-5 w-5 text-white" /> */}
        //                                         <Image
        //                                             src={
        //                                                 "/campaign/calendarnew.svg"
        //                                             }
        //                                             alt="Google Image"
        //                                             height={10}
        //                                             width={10}
        //                                             className="h-[1rem] w-[1rem]"
        //                                         />
        //                                         {trip?.attributes?.isCustomized ? (
        //                                             <span className="text-[0.75rem]">Date of your choice</span>
        //                                         ) : !trip?.attributes?.dates || trip?.attributes?.dates.length === 0 ? (
        //                                             <span className="text-[0.75rem]">Date on request</span>
        //                                         ) : (
        //                                             trip?.attributes?.dates
        //                                                 ?.filter(
        //                                                     (date: { tripdate: string }) => new Date(date.tripdate) > new Date()
        //                                                 )
        //                                                 .map((date: { tripdate: string }) =>
        //                                                     format(new Date(date.tripdate), "MMM dd")
        //                                                 )
        //                                                 .join(", ")
        //                                         )}
        //                                     </Link>
        //                                     <div className="flex w-full justify-center">
        //                                         <Link href="#form1" className="w-full h-[2.125rem] lg:w-full flex items-center justify-center px-[2.375rem] md:px-[4rem] py-[0.5rem] mb-[12px] bg-white rounded-[0.75rem]">
        //                                             <div className="text-center text-[#007DBC] font-[500] text-[14px] ">
        //                                                 Request a Callback
        //                                             </div>
        //                                         </Link>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                         </article>
        //                     </div>



        //                 </SwiperSlide>
        //             ))}


        //         </div>

        //         <div
        //             ref={navigationPrevRef}
        //             className=" !bg-gray-300  !hidden md:!block rounded-full shadow-lg absolute px-1 py-1 left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        //         >
        //             <CarouselPrevious className="text-black flex item-center justify-center mt-2 h-6 w-8" />



        //         </div>

        //         <div
        //             ref={navigationNextRef}
        //             className=" !bg-gray-300  !hidden md:!block  rounded-full shadow-lg absolute px-1 py-1 right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        //         >
        //             <CarouselNext className=" text-black flex item-center justify-center mt-2 h-6 w-8" />

        //         </div>


        //     </Swiper>
        // </div>




        <Carousel
            className='md:hidden  mt-6 h-full w-full max-w-[1220px] -ml-[1.25rem] md:overflow-visible'
            opts={{
                align: "center",
            }}
        >
            <CarouselContent className='w-full flex gap-[16px]'>
                {data?.attributes?.trips?.data?.map((trip: StrapiTripType, index: number) => {
                    const isLast = index === data?.attributes?.trips?.data?.length - 1;
                    const isFirst = index === 0;
                    return (
                        <CarouselItem
                            key={trip.id}
                            className={cn(
                                'dmsans flex  h-auto w-[70%] min-w-[200px] basis-1.55/2 justify-stretch self-stretch sm:basis-1/2 md:basis-1/3',
                                {
                                    'ml-[20px]': isFirst,
                                    'mr-[20px]': isLast
                                }
                            )}
                        //className='dmsans flex h-auto w-[75%] min-w-[200px] basis-1.55/2 justify-stretch self-stretch sm:basis-1/2 md:basis-1/3 '
                        >
                            {/* <div className="md:flex justify-center py-4 gap-4 flex-wrap"> */}
                            {/* <div className="max-w-sm m-2 bg-white border-2 border-black/80 rounded-xl shadow ">
                                    <div
                                        className="rounded-t-lg h-[35vh] w-full relative"
                                    >
                                        <Image
                                            src={`${data?.attributes?.avatar.data?.attributes?.url || ""}`} alt=""
                                            fill
                                            className='rounded-t-xl object-cover object-top border-b-2 border-b-black/80'
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "top"
                                            }}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <p className="mb-2 text-2xl leading-6 font-extrabold tracking-tight text-gray-900">{data?.attributes?.Title}
                                        </p>
                                        <div className="flex">
                                            {[...Array(totalStars)].map((_, index) => (

                                                <svg
                                                    key={index}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill={index < parseInt(data?.attributes.rating) ? 'yellow' : 'none'}
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
                                        <p className="mb-3 font-medium text-sm md:text-base text-gray-900 text-justify">{data?.attributes?.review}</p>
                                        <p className="mb-3 font-extrabold text-center text-gray-900">{data?.attributes?.name}</p>
                                    </div>
                                </div> */}

                            <div className="w-full h-[20.5rem] md:h-[50vh] lg:h-[30.375rem] ">
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
                                            className="rounded-[0.75rem] w-full  object-cover "
                                        />
                                    </div>
                                    <div className="h-[50.92%] w-full "></div>
                                    <div className="absolute !rounded-xl inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#007DBC] via-[#007DBC] via-[70%] to-transparent"></div>
                                    <div className="absolute rounded-xl inset-0  pr-2">
                                        <div className="absolute px-4 bottom-0 w-full mx-auto flex flex-col pb-1">
                                            <div className="flex justify-between items-center mb-[0.5rem]">
                                                <div className="text-[#FFFFFF]  text-[0.75rem] leading-[0.976rem] md:leading-[1.302rem]  md:text-[1rem]  font-[500] w-auto h-[1rem]">
                                                    {trip?.attributes?.durationdays} Days ,
                                                    {trip?.attributes?.durationdays! - 1} Nights
                                                </div>
                                                <div className="text-[#FFFFFF] text-[0.75rem] md:text-[1rem] font-[500] flex gap-1 justify-center items-center">
                                                    <Image
                                                        src={
                                                            "/campaign/fluent-mdl2_group.svg"
                                                        }
                                                        alt="group Image"
                                                        width={50}
                                                        height={50}
                                                        className="w-[1rem] h-[0.75rem]"
                                                    />
                                                    {trip?.attributes?.isCustomized ? "Custom" : "Group"}
                                                </div>
                                            </div>
                                            <div className="text-[#FFFFFF]  w-[11.75rem]  h-[2.625rem] mb-[0.25rem] md:w-[15.625rem] font-[600] text-[1rem] md:text-[1.5rem] leading-[1.302rem] md:leading-[1.953rem] ">
                                                {trip?.attributes?.name}
                                            </div>
                                            <div className="text-[#FFFFFF]  flex items-center gap-[6px] mb-[0.25rem]   justify-start text-[1rem] md:text-[1.5rem] font-[500]">
                                                <Image
                                                    src={
                                                        "/campaign/currency_rupeenew.svg"
                                                    }
                                                    alt="Google Image"
                                                    height={10}
                                                    width={10}
                                                    className="h-[0.797rem] w-[0.552rem]"
                                                />
                                                {formatIndianRupees(Number(trip.attributes.price) || 0)}
                                            </div>
                                            <Link
                                                href="#"
                                                target="_blank"
                                                className="flex text-[0.75rem] font-[500] mb-[0.938rem] items-center text-white gap-2"
                                            >
                                                {/* <CalendarDays className="h-5 w-5 text-white" /> */}
                                                <Image
                                                    src={
                                                        "/campaign/calendarnew.svg"
                                                    }
                                                    alt="Google Image"
                                                    height={10}
                                                    width={10}
                                                    className="h-[0.75rem] w-[0.75rem]"
                                                />
                                                {trip?.attributes?.isCustomized ? (
                                                    <span className="text-[0.75rem]">Date of your choice</span>
                                                ) : !trip?.attributes?.dates || trip?.attributes?.dates.length === 0 ? (
                                                    <span className="text-[0.75rem]">Date on request</span>
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
                                                <Link href="#form1" className="w-full h-[2.125rem] lg:w-full flex items-center justify-center px-[0.375rem] md:px-[4rem] py-[0.5rem] mb-[12px] bg-white rounded-[0.5rem]">
                                                    <div className="text-center text-[#007DBC] font-[500] text-[14px] ">
                                                        Request a Callback
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </article>
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



    );
}



// import useEmblaCarousel, {
//     type UseEmblaCarouselType,
// } from "embla-carousel-react"
// import { ArrowLeft, ArrowRight } from "lucide-react"


// import { Button } from "@/components/ui/button"
// import React from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import { StrapiCampaignType } from '@/types/collections/campaign';
// import { StrapiTripType } from '@/types/collections/trips';
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, A11y } from "swiper/modules";

// import { format } from "date-fns";
// import { CalendarDays } from "lucide-react";
// import { formatIndianRupees } from "@/lib/utils";
// import { StrapiActivityInterface } from '@/types/collections/activity';

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";
// import MaxWidthContent from "@/components/max-width-content";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// import { getStrapiCategoryContentSlug } from "@/lib/strapi";
// import { useState, useEffect } from "react";
// import GetQuoteHeroForm from "./get-quote-hero-form";
// import RequestCallback from "./RequestCallback";


// export default function TripCards({ data }: { data: StrapiCampaignType }) {
//     // console.log('Trips', Trips[0].isInternational)
//     // let data: any[];
//     // if (isInternational !== isDomestic) {
//     // 	data = Trips.filter((trip: any) => trip.isInternational === isInternational)
//     // }
//     // else data = Trips
//     // const [showForm, setShowForm] = useState<boolean>(false);
//     // console.log(Trips, '==========')

//     return (
//         <>

//             <section className='md:hidden'>
//                 <MaxWidthContent className=''>

//                     <div className=' mt-4 flex w-full items-center px-2 md:mt-0'>
//                         <Carousel
//                             className='mx-auto h-full w-full max-w-[1220px] items-stretch justify-stretch overflow-hidden rounded-lg md:flex md:overflow-visible'
//                             opts={{
//                                 align: "start",
//                                 containScroll: true,
//                             }}
//                         >
//                             <CarouselContent className='w-screen dmsans z-20 md:w-[90vw] flex md:mt-[3.75rem] md:-mr-0 md:-ml-2 justify-start px-10 relative overflow-x-scroll border border-black'>
//                                 {data?.attributes?.activities?.data?.map((trip: StrapiActivityInterface) => (
//                                     <CarouselItem
//                                         key={trip.id} className="border border-black w-[25%] overflow-hidden"
//                                     >

//                                         <div className=" h-[20.5rem] md:h-[50vh] lg:h-[30.375rem] ">
//                                             <article className=" relative w-full h-full flex !rounded-[1rem] justify-center pb-8 pt-40 mx-auto">

//                                                 <Image
//                                                     src={
//                                                         trip.attributes?.bannerimage?.data?.attributes?.url ??
//                                                         trip.attributes?.coverimage?.data?.attributes?.url ??
//                                                         trip?.attributes?.bannerimageurl ??
//                                                         trip?.attributes?.coverimageurl ??
//                                                         "/campaign.png"
//                                                     }
//                                                     alt="Trip Image"
//                                                     fill
//                                                     className="rounded-[1rem] inset-0 object-cover"
//                                                 />
//                                                 <div className="absolute !rounded-xl inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#007DBC] via-[#007DBC] via-[70%] to-transparent"></div>
//                                                 <div className="absolute rounded-xl inset-0  pr-2">
//                                                     <div className="absolute px-4 bottom-0 w-full mx-auto flex flex-col pb-1">
//                                                         <div className="flex justify-between mb-[0.5rem]">
//                                                             <div className="text-white text-[0.75rem] leading-[0.976rem] md:leading-[1.302rem]  md:text-[1rem]  font-[500] w-auto h-[1rem]">
//                                                                 {trip?.attributes?.durationdays} Days ,
//                                                                 {trip?.attributes?.durationdays! - 1} Nights
//                                                             </div>
//                                                             <div className="text-white text-[12px] md:text-[1rem] font-[500] flex gap-2 justify-center items-center">
//                                                                 <Image
//                                                                     src={
//                                                                         "/campaign/fluent-mdl2_group.svg"
//                                                                     }
//                                                                     alt="group Image"
//                                                                     width={50}
//                                                                     height={50}
//                                                                     className="w-[1rem] h-[0.75rem]"
//                                                                 />
//                                                                 {trip?.attributes?.isCustomized ? "Custom" : "Group"}
//                                                             </div>
//                                                         </div>
//                                                         <div className="text-white w-[11.75rem]  h-[2.625rem] mb-[0.25rem] md:w-[15.625rem] font-[600] text-[1rem] md:text-[1.5rem] leading-[1.302rem] md:leading-[1.953rem] ">
//                                                             {trip?.attributes?.name}
//                                                         </div>
//                                                         <div className="text-white  flex items-center gap-1 mb-[0.25rem]   justify-start text-[1rem] md:text-[1.5rem] font-[500]">
//                                                             <Image
//                                                                 src={
//                                                                     "/campaign/currency_rupeenew.svg"
//                                                                 }
//                                                                 alt="Google Image"
//                                                                 height={10}
//                                                                 width={10}
//                                                                 className="h-[18px] w-[18.43px]"
//                                                             />
//                                                             {formatIndianRupees(Number(trip.attributes.price) || 0)}
//                                                         </div>
//                                                         <Link
//                                                             href="#"
//                                                             target="_blank"
//                                                             className="flex text-[0.75rem] mb-[15px] items-center text-white gap-2"
//                                                         >
//                                                             {/* <CalendarDays className="h-5 w-5 text-white" /> */}
//                                                             <Image
//                                                                 src={
//                                                                     "/campaign/calendarnew.svg"
//                                                                 }
//                                                                 alt="Google Image"
//                                                                 height={10}
//                                                                 width={10}
//                                                                 className="h-[1rem] w-[1rem]"
//                                                             />
//                                                             {trip?.attributes?.isCustomized ? (
//                                                                 <span className="text-[0.75rem]">Date of your choice</span>
//                                                             ) : !trip?.attributes?.dates || trip?.attributes?.dates.length === 0 ? (
//                                                                 <span className="text-[0.75rem]">Date on request</span>
//                                                             ) : (
//                                                                 trip?.attributes?.dates
//                                                                     ?.filter(
//                                                                         (date: { tripdate: string }) => new Date(date.tripdate) > new Date()
//                                                                     )
//                                                                     .map((date: { tripdate: string }) =>
//                                                                         format(new Date(date.tripdate), "MMM dd")
//                                                                     )
//                                                                     .join(", ")
//                                                             )}
//                                                         </Link>
//                                                         <div className="flex w-full justify-center">
//                                                             <Link href="#form1" className="w-full h-[2.125rem] lg:w-full flex items-center justify-center px-[2.375rem] md:px-[4rem] py-[1.5rem] mb-[12px] bg-white rounded-[0.75rem]">
//                                                                 <div className="text-center text-[#007DBC] font-[500] text-[14px] ">
//                                                                     Request a Callback
//                                                                 </div>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             </article>
//                                         </div>



//                                     </CarouselItem>
//                                 ))}
//                             </CarouselContent>

//                             <CarouselNext
//                                 aria-label='Next'
//                                 className={cn(`absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 bg-gray-300 md:flex 2xl:-right-10`)}
//                             />

//                             <CarouselPrevious
//                                 aria-label='Previous'
//                                 className={cn(`absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 bg-gray-300 md:flex 2xl:-left-12`)}
//                             />
//                         </Carousel>
//                     </div>
//                 </MaxWidthContent>
//             </section>
//         </>
//     );
// }

