"use client";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
// import data from "@/data.json";
import Image from "next/image";
export default function Reviews({ data }: { data: any }) {
    const totalStars = 5;
    return (
        
        <div className="mt-[3rem] lg:mt-[6.25rem] relative w-full md:mt-0">
            <h2 className="font-[700] text-[1.5rem] mb-[2.5rem] md:mb-[3rem] lg:mb-[3.75rem] text-center md:text-[2rem] lg:text-[2.25rem] ">
                Our Google reviews
            </h2>
            <Carousel className='mx-auto  px-0 md:px-12 h-full w-full max-w-[1220px] items-stretch justify-stretch overflow-hidden rounded-lg md:flex md:overflow-visible'
                opts={{
                    align: "center",
                }}>
                <CarouselContent className="w-full rounded-lg">
                    {data.map((item: any) => (
                        <CarouselItem
                            key={item.id}
                            className='my-0 flex w-full h-auto min-w-[250px] basis-1/2 justify-stretch self-stretch px-[0.35rem] lg:px-[0.625rem] sm:basis-1/2 md:basis-1/3'
                        >
                            <div className=" border-2 border-[#D1D5DB] rounded-[0.75rem] ">
                                <div className="px-3 md:px-6 py-6">
                                    <p className="mb-3 text-[1rem] md:text-[1.125rem] font-[700] text-[#212529]">
                                        {item?.title}
                                    </p>

                                    <p className=" lg:hidden text-sm md:text-md font-medium text-gray-900 mb-3">
                                        {`${item?.desc.slice(0, 200)}...`}
                                        <span>
                                            <a href={item?.link} className="text-[#007DBC] ml-1">
                                                Read more ?
                                            </a>
                                        </span>
                                    </p>
                                    <p className=" hidden lg:block text-sm md:text-[1rem] font-medium leading-[1.25rem] lg:leading-[1.75rem] text-gray-900 mb-3">
                                        {`${item?.desc.slice(0, 330)}...`}
                                        <span>
                                            <a href={item?.link} target="_blank" className="text-[#007DBC] ml-1">
                                                Read more ?
                                            </a>
                                        </span>
                                    </p>

                                    <div className="mt-2 flex justify-between items-center text-center text-[1rem] md:text-[1.125rem] font-[700] text-gray-900">
                                        <div className=" text-start ">
                                            {item?.name}
                                        </div>
                                        <div className="flex gap-0 lg:gap-1">
                                            {[...Array(totalStars)].map((_, index) => (
                                                <Image
                                                    key={index}
                                                    src="/Vector.svg"
                                                    alt={"ladakh trip"}
                                                    width={100}
                                                    height={100}
                                                    className='h-[13px] w-[13.65px]'
                                                />
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
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
        </div >
        
    );
}