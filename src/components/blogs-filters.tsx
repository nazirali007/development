/* eslint-disable @next/next/no-img-element */
"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CustomCarouselPrevious,
    CustomCarouselNext,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import MaxWidthContent from "@/components/max-width-content";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Icons } from "@/assets/icons";
import Link from "next/link";

function BlogsFilter({ filters }: { filters: any[] }) {
    return (
        <>
            <MaxWidthContent className='w-full rounded-lg px-3'>
                <Carousel
                    className='relative rounded-lg h-full'
                    opts={{
                        align: "start",
                    }}
                >
                    <CarouselContent className='gap-x-2 rounded-lg sm:gap-x-4'>
                        {filters.map((filter, index) => (
                            <CarouselItem
                                key={index}
                                className='shadow-2x1 overflow-hidden group relative h-28 w-full basis-1/2 cursor-pointer rounded-lg sm:h-36 sm:w-full md:h-44 md:basis-1/3 md:w-full lg:w-full lg:basis-1/4'
                            >
                                <Link
                                    href={`#`}
                                    className='shadow-2x1 relative h-full flex w-full rounded-lg transition duration-300 group-hover:opacity-90'
                                >
                                    <Image src={filter.coverImageUrl} width={500} height={500} loading="lazy" blurDataURL='/assets/249.jpg'
                                        placeholder="blur" alt='image' />
                                    <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
                                        <h2 className='text-2xl font-semibold text-white'>
                                            All
                                        </h2>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext
                        aria-label='Next'
                        className={cn(`absolute hidden -right-3 top-1/2 md:flex h-10
								  w-10 -translate-y-1/2 bg-gray-300 2xl:-right-12`)}
                    />

                    <CarouselPrevious
                        aria-label='Previous'
                        className={cn(`absolute hidden -left-3 top-1/2  md:flex h-10
						w-10 -translate-y-1/2 bg-gray-300 2xl:-left-12`)}
                    />
                </Carousel>
            </MaxWidthContent>
        </>
    );
}

export default BlogsFilter;
