"use client";

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils";
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import MaxWidthContent from "../max-width-content";

interface BannerSlider {
    id: string
    link: any;
    imgURL: any;
    expirationDate?: any;
    bannerimage: string;
}[]


export default function CarouselSize(
    {
        delay = 4000,
        className = "",
        imageClassName = "",
        bannerSliders = []
    }: {
        delay?: number
        className?: string
        imageClassName?: string
        bannerSliders: BannerSlider[]
    }
) {
    return (
        <MaxWidthContent>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: delay,
                    }),
                ]}

                className={cn("w-full", `${className}`)}
            >
                <CarouselContent>
                    {bannerSliders.map((data: BannerSlider, index: number) => (
                        <CarouselItem key={index} className="w-full">
                            <Link key={data.id} href={data.link}>
                                <div className={cn('relative group mx-auto h-24 sm:h-52 md:h-[16rem] lg:h-[16rem] xl:h-[20rem] w-full aspect-w-16 aspect-h-9', `${imageClassName}`)}>
                                    <Image
                                        src={data.bannerimage}
                                        alt={data.bannerimage}
                                        fill
                                        className='object-cover object-center w-full h-full transition-all group-hover:opacity-90 duration-300 ease-in-out'
                                        placeholder='blur'
                                        blurDataURL='/assets/249.jpg'
                                        quality={50}
                                    />
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
            <CarouselNext /> */}
            </Carousel>
        </MaxWidthContent>
    )
}
