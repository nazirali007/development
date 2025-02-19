"use client"

import { motion, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { formatIndianRupees } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Dot } from 'lucide-react';
import { SlideInView } from '@/components/reusable/framer-motion'
import { useState } from 'react'
import { Plane, Utensils, BedDouble, Wine } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";


export const ScrollToFormButton = ({
    className = "",
    children
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    const scrollToTop = () => {

        const element = document.getElementById("offer-quote-form");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }

    return (
        <button
            onClick={scrollToTop}
            className={cn('fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primaryMain text-white hover:bg-primaryDark transition-all duration-200 ', `${className}`)}
        >
            {children}
        </button>
    )
}

type Price = {
    star: number;
    price: number;
}


export const TripEnqCard = ({ data, className }: {
    data: {
        id: number;
        slug: string;
        name: string;
        highlight: string[];
        coverimageurl: any;
        isCustomized: boolean;
        durationdays: number;
        description: string;
        route: string[];
        price: Price[];
    };
    className?: string;
}) => {

    const [selectedPrice, setSelectedPrice] = useState<number>(data.price[0].price);

    const scrollToTop = () => {

        const element = document.getElementById("offer-quote-form");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }

    return (
        <>
            <SlideInView
                key={data.id}
                className={cn(
                    "group flex h-full bg-white w-full bg-white/90 group group-hover:bg-white flex-col md:flex-row justify-around gap-y-1 mx-auto p-2 rounded-xl shadow-md overflow-hidden border-t border-x border-zinc-100 transition-all duration-300",
                    `${className}`
                )}>
                <div
                    className='relative min-h-[14rem] sm:h-[14rem] lg:min-h-60 w-full basis-1/3 group-hover:opacity-90 md:min-h-60 md:h-auto'
                >
                    <Image
                        src={data.coverimageurl || '/assets/249.jpg'}
                        alt={data.name}
                        fill
                        className='rounded-t-md object-cover rounded-lg'
                        blurDataURL='/assets/249.jpg'
                        quality={50}
                        loading='lazy'
                    />

                </div>
                <div className='flex h-full flex-1 flex-col justify-between text-white'>
                    <div
                        className='flex flex-col gap-3 w-full h-full justify-start px-2'
                    >
                        <div className='flex flex-row items-center justify-start text-start'>
                            <h2
                                className='text-black text-xl md:text-lg py-1 px-2 line-clamp-1 font-bold capitalize'
                                title={data.name}
                            >
                                {data.name}

                            </h2>
                            <div className='flex w-full flex-row items-center justify-between px-1 mb-2 '>
                                {data.durationdays > 1 && (
                                    <span
                                        className='flex flex-row gap-x-1 rounded-xl px-1 py-0.5 text-xs sm:text-sm w-fit border-2 border-primaryMain text-center items-center justify-center font-semibold text-primaryMain'
                                    >
                                        {data.durationdays}D {data.durationdays - 1}N
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className='flex flex-row items-center w-full justify-around border-dashed border border-black p-2 rounded-xl'>
                            {data.route.map((route, index) => (
                                <div
                                    key={index}
                                    className='flex flex-row gap-1 items-center justify-start text-xs sm:text-sm text-black font-semibold'
                                >
                                    <MapPin size={16} className={cn(`hidden sm:block `, index === 0 || index === data.route.length - 1 ? 'text-primaryMain' : 'text-black')} />
                                    <p className={cn(``, index === 0 || index === data.route.length - 1 ? 'text-primaryMain' : 'text-black')}>{route}</p>
                                </div>
                            ))}
                        </div>

                        <div
                            className='flex flex-col gap-1 items-start justify-start w-full md:border-t-2 md:mt-2 md:pt-2 border-slate-200 '
                        >
                            <p className='text-xs sm:text-sm text-black font-normal line-clamp-3'>
                                {data.description}
                            </p>

                            <h5 className='text-sm sm:text-base text-black font-bold mt-3'>
                                Highlights
                            </h5>
                            {data.highlight.map((highlight, index) => (
                                <div
                                    key={index}
                                    className='flex ml-2 gap-1 flex-row items-center justify-start text-xs sm:text-sm text-black font-semibold'
                                >
                                    <Dot size={20} className='text-primaryMain' />
                                    <p>{highlight}</p>
                                </div>
                            )
                            )}
                        </div>

                        <div
                            className='flex flex-row justify-around gap-1 items-start w-full border-y-2 md:border-t-2 border-slate-200 py-2 rounded-b-md'
                        >
                            <div className='flex flex-col p-2 items-center justify-start gap-1'>
                                <Plane size={16} className='text-primaryMain' />
                                <p className='text-xs sm:text-sm text-black font-semibold'>
                                    Flights
                                </p>
                            </div>
                            <div className='flex flex-col p-2 items-center justify-start gap-1'>
                                <BedDouble size={16} className='text-primaryMain' />
                                <p className='text-xs sm:text-sm text-black font-semibold'>
                                    Accomodation
                                </p>
                            </div>
                            <div className='flex flex-col p-2 items-center justify-start gap-1'>
                                <Utensils size={16} className='text-primaryMain' />
                                <p className='text-xs sm:text-sm text-black font-semibold'>
                                    Meals
                                </p>
                            </div>
                            <div className='flex flex-col p-2 items-center justify-start gap-1'>
                                <Wine size={16} className='text-primaryMain' />
                                <p className='text-xs sm:text-sm text-black font-semibold'>
                                    Relax & Enjoy
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='flex md:border-l-2 md:ml-2 md:pl-2 border-slate-200 flex-col gap-1 justify-end items-center'>
                    <div className='flex-1 flex h-full w-full px-2 flex-col justify-around rounded-t-lg'>
                        <h5 className='text-sm sm:text-base text-black font-bold mt-3'>
                            Select Star Rating
                        </h5>
                        <div className='flex flex-row md:flex-col gap-x-4 gap-y-4 items-start justify-start w-full'>
                            {data.price.map((price: Price, index: number) => (
                                <>
                                    <div className={
                                        `flex flex-row gap-2 items-center justify-start text-start`
                                    }>
                                        <Checkbox
                                            key={index}
                                            checked={selectedPrice === price.price}
                                            onCheckedChange={() => setSelectedPrice(price.price)}

                                            className='text-gray-800 gap-x-3 my-2 text-sm sm:text-base font-semibold flex flex-row items-center justify-start cursor-pointer transition-all duration-200 hover:text-primaryMain'
                                        />
                                        <span className='text-gray-800 gap-x-3 my-2 text-sm sm:text-base font-semibold flex flex-row items-center justify-start cursor-pointer transition-all duration-200 hover:text-primaryMain'>
                                            {price.star} Star
                                        </span>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div
                        className='flex flex-col w-full justify-between px-2 py-1'
                    >
                        <h2
                            className='-inset-2 bg-slate-200 rounded-xl border-slate-300 border p-2 text-center text-textColor/95 text-lg font-semibold text-primaryMain'
                        >
                            ₹{` `}  {formatIndianRupees(selectedPrice)}{` `}/-
                        </h2>
                        <button
                            onClick={scrollToTop}
                            className='flex items-center mt-2 sm:shadow-lg justify-center w-full rounded-md py-2 text-sm sm:text-lg font-semibold text-white bg-primaryMain hover:bg-primaryDark transition-all duration-200'
                        >
                            Send Enquiry
                        </button>
                    </div>
                    <div className='ml-2 mt-2 rounded-b-md bg-zinc-200 px-2 py-1 w-full'>
                        <p className='text-textColor/70 text-xs font-medium'>
                            or <span className='font-semibold'>2</span> monthly payments {` `}
                            <span className='text-primaryMain'>(T&C)</span>
                        </p>
                    </div>
                </div>
            </SlideInView>
        </>
    )
}
