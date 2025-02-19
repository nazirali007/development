
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
//             </button >
//         )
//     })
// CarouselNext.displayName = "CarouselNext"




export default function ReelCards({ data }: { data: StrapiCampaignType }) {
    const navigationPrevRef = React.useRef<HTMLDivElement>(null);
    const navigationNextRef = React.useRef<HTMLDivElement>(null);
    //console.log(data);

    return (
        // <div className="md:hidden">
        // <Swiper
        //     modules={[Navigation, Pagination, A11y]}
        //     spaceBetween="15rem"
        //     breakpoints={{
        //         640: { spaceBetween: "15rem", slidesPerView: 1 },
        //         768: { spaceBetween: "20rem", slidesPerView: 2 },
        //         1024: { spaceBetween: "20rem", slidesPerView: 3 },
        //     }}
        //     slidesPerView={1}
        //     pagination={{ clickable: true }}
        //     // breakpoints={{
        //     //     640: {},
        //     //     768: { slidesPerView: 2 },
        //     //     1024: { slidesPerView: 3 },
        //     // }}
        //     navigation={{
        //         prevEl: navigationPrevRef.current,
        //         nextEl: navigationNextRef.current,
        //     }}
        //     onSwiper={(swiper) => {
        //         // Update navigation elements once Swiper is initialized
        //         if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
        //             swiper.params.navigation.prevEl = navigationPrevRef.current;
        //             swiper.params.navigation.nextEl = navigationNextRef.current;
        //             swiper.navigation.init();
        //             swiper.navigation.update();
        //         }
        //     }}
        //     className="w-screen  dmsans z-50 md:w-[90vw] !mt-[2.5rem] md:!mt-[3.75rem] !flex !-ml-8 md:!-mr-0 md:!-ml-0 !justify-start !mx-2 !px-8 md:!px-16 relative overflow-hidden mb-0 md:mb-20"
        // >
        //     <div className=" w-[100%] !flex justify-center overflow-hidden">
        //         {data?.attributes?.activities?.data.map((data: StrapiActivityInterface) => (
        //             <SwiperSlide key={data.id} className=" !mb-12 flex justify-start !rounded-[1rem] w-[16.125rem] md:!w-[45%] lg:!w-[30%] h-full overflow-hidden">

        //                 <div className=" h-[20.5rem] md:h-[50vh] lg:h-[30.375rem] !w-full !rounded-[1rem] ">
        //                     <article className=" relative w-full h-full flex !rounded-[1rem] justify-center pb-8 pt-40 mx-auto">

        //                         <Image
        //                             src={`${data?.attributes?.image?.data?.attributes.url}`}
        //                             alt="Trip Image"
        //                             fill
        //                             className="rounded-[1rem] inset-0 object-cover"
        //                         />
        //                         <div className="absolute !rounded-xl inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#000000]  via-[50%] to-transparent"></div>
        //                         <div className="absolute rounded-xl inset-0  pr-2">
        //                             <div className="absolute bottom-5 px-4 text-white text-[1rem] font-[500] leading-[1.302rem] self-stretch">
        //                                 {data?.attributes?.name}
        //                             </div>
        //                         </div>

        //                     </article>
        //                 </div>



        //             </SwiperSlide>
        //         ))}


        //     </div>

        //     <div
        //         ref={navigationPrevRef}
        //         className=" !bg-gray-300  !hidden md:!block rounded-full shadow-lg absolute px-1 py-1 left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        //     >
        //         <CarouselPrevious className="text-black flex item-center justify-center mt-2 h-6 w-8" />



        //     </div>

        //     <div
        //         ref={navigationNextRef}
        //         className=" !bg-gray-300  !hidden md:!block  rounded-full shadow-lg absolute px-1 py-1 right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        //     >
        //         <CarouselNext className=" text-black flex item-center justify-center mt-2 h-6 w-8" />

        //     </div>


        // </Swiper>
        // </div>

        <Carousel
            className='md:hidden mt-6 h-full w-screen -ml-[2.5rem] overflow-visible'
            opts={{
                align: "center",
            }}
        >
            <CarouselContent className='w-full flex gap-[16px]'>
                {data?.attributes?.activities?.data?.map((trip: StrapiActivityInterface, index: number) => {
                    const isLast = index === data?.attributes?.activities?.data?.length - 1;
                    const isFirst = index === 0;
                    return (
                        <CarouselItem
                            key={trip.id}
                            className={cn(
                                'dmsans flex h-auto w-[70%] min-w-[200px] basis-1.55/2 justify-stretch self-stretch sm:basis-1/2 md:basis-1/3',
                                {
                                    'ml-[20px]': isFirst,
                                    'mr-[20px]': isLast
                                }
                            )}
                        // className=' dmsans flex h-auto w-[75%] min-w-[200px] basis-1.55/2 justify-stretch self-stretch sm:basis-1/2 md:basis-1/3 '
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
                                <article className=" relative w-full h-full flex !rounded-[1rem] justify-center pb-8 pt-40 mx-auto">

                                    <Image
                                        src={trip?.attributes?.image?.data?.attributes.url ??
                                            "/campaign.png"}
                                        alt="Trip Image"
                                        fill
                                        className="rounded-[1rem] inset-0 object-cover"
                                    />
                                    <div className="absolute !rounded-xl inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#000000]  via-[50%] to-transparent"></div>
                                    <div className="absolute rounded-xl inset-0  pr-2">
                                        <div className="absolute bottom-5 px-4 text-white text-[1rem] font-[500] leading-[1.302rem] self-stretch">
                                            {trip?.attributes?.name}
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
