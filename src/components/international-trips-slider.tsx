"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import MaxWidthContent from "./max-width-content";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { TripCard } from "./trip-card";
import { FaArrowRight } from "react-icons/fa";
interface TripSliderProps {
	heading: string;
	subheading?: string;
	Trips: {
		tripdates: Date[];
		slug: string;
		coverimagealttag: string;
		coverimageurl: string;
		duration: string;
		pickuplocation: string;
		discountedPrice: string;
		startingcost: string;
		isCustomized: boolean;
		name: string;
	}[];
	slug: string;
	nextButton: string;
	prevButton: string;
}

export default function TripsSlider({
	Trips,
	heading,
	subheading,
	slug,
	nextButton,
	prevButton,
}: TripSliderProps) {
	const [currentMonth, setCurrentMonth] = useState<number | undefined>(
		undefined
	);
	const [tripDuration, setTripDuration] = useState<string | undefined>(
		undefined
	);

	function CurrentMonthHandler(number: number | string) {
		let newNumber = Number(number);
		if (newNumber === currentMonth) {
			setCurrentMonth(undefined);
		} else {
			setCurrentMonth(newNumber);
		}
	}
	function HandleDuration(value: string) {
		if (value === "All") {
			setTripDuration(undefined);
		} else {
			setTripDuration(value);
		}
	}

	const filterMonths = [
		// "Jan",
		// "Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const durations = [
		"1N 2D",
		"2N 3D",
		"3N 4D",
		"4N 5D",
		"5N 6D",
		"6N 7D",
		"7N 8D",
		"8N 9D",
		"9N 10D",
		"10N 11D",
		"11N 12D",
		"12N 13D",
		"13N 14D",
		"14N 15D",
		"15N 16D",
		"16N 17D",
		"17N 18D",
		"18N 19D",
		"19N 20D",
		"20N 21D",
	];
	return (
		<section className="py-2">
			<MaxWidthContent>
				<div className='flex flex-col px-6 md:px-8 pt-8 md:py-8'>
					<div className='text-textColor text-sm md:text-start'>
						{subheading ?? <p>{subheading}</p>}
					</div>
					<div className='text-textColor text-3xl font-bold md:text-start md:text-2xl lg:text-5xl flex items-center gap-4'>
						<Link
							href={slug}
							className='group flex items-center md:items-end justify-between w-full gap-2 h-full md:pr-4'
						>
							{heading}
							{/* <span className='bg-primaryMain h-[2px] w-3/4 origin-right scale-x-[0.33] transition-all duration-300 ease-in-out group-hover:scale-x-100 sm:w-full' /> */}
							<button className='bg-primaryMain hover:bg-primaryDark relative shrink-0 rounded-md px-2 py-1.5 font-semibold text-xs text-white transition-all duration-200 ease-in-out hover:shadow-md md:text-sm xl:text-sm flex gap-2 hover:gap-4 items-center justify-center h-full'>
								{'Show All'}
								<FaArrowRight />
							</button>
							{/* <span className='bg-primaryMain h-[2px] w-3/4 origin-left scale-x-[0.33] transition-all duration-300 ease-in-out group-hover:scale-x-100 sm:w-full' /> */}
						</Link>

					</div>
				</div>
				<div className='px-4 md:px-10'>
					<div className='relative flex items-center justify-end gap-x-2 px-4 xl:px-0 '>
						{/* Filter Duration */}
						{/* <div className='outline-none ring-0 md:-top-14 md:left-[30%] md:scale-[0.8] lg:-top-16 lg:left-1/3 lg:scale-90 xl:left-[27%]'>
							<Select onValueChange={(value) => HandleDuration(value)}>
								<SelectTrigger className='border-primaryMain hover:bg-primaryMain/10 w-32 border px-2 text-xs font-medium text-gray-950 focus:border-2 md:w-[150px] md:text-sm'>
									<SelectValue placeholder='Select Duration' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='All'>All</SelectItem>
									{durations.map((d, index) => (
										<SelectItem key={`${d}-${index}`} value={d}>
											{d}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div> */}
						{/* <Link
							href={slug}
							className='group flex items-center justify-center gap-2 h-full'
						>
							<button className=' bg-primaryMain hover:bg-primaryDark relative shrink-0 rounded-md px-3 py-1.5 font-semibold text-xs text-white transition-all duration-200 ease-in-out hover:shadow-md md:text-sm xl:text-sm'>
								View All
							</button>
						</Link> */}

						{/* Filter Month */}
						{/* <div className='outline-none ring-0 md:-top-14 md:left-[30%] md:scale-[0.8] lg:-top-16 lg:left-1/3 lg:scale-90 xl:left-[27%]'>
							<Select onValueChange={(value) => CurrentMonthHandler(value)}>
								<SelectTrigger className='border-primaryMain w-32 border p-1 text-xs font-medium text-gray-950 focus:border-2 md:w-[150px] md:text-sm'>
									<SelectValue placeholder='Select Month' />
								</SelectTrigger>
								<SelectContent className='h-[250px] font-medium'>
									{filterMonths.map((month, index) => (
										<SelectItem key={index} value={String(index)}>
											{month} {new Date().getFullYear().toString().slice(-2)}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div> */}
					</div>
					<div className='relative hidden h-full lg:block'>
						<Swiper
							breakpoints={{
								340: {
									slidesPerView: 1.5,
									spaceBetween: 15,
								},
								700: {
									slidesPerView: 2.5,
									spaceBetween: 15,
								},
								1000: {
									slidesPerView: 3,
									spaceBetween: 15,
								},
								1400: {
									slidesPerView: 4,
									spaceBetween: 10,
								},
							}}
							navigation={{
								nextEl: `.${nextButton}`,
								prevEl: `.${prevButton}`,
							}}
							pagination={false}
							modules={[Navigation, Pagination]}
							className='h-full w-full max-w-[1220px] items-stretch justify-stretch p-2 md:flex'
						>
							{Trips.filter((trip) => {
								const filterByDuration = tripDuration
									? trip.duration === tripDuration
									: true;
								const filterByMonth = currentMonth
									? trip.tripdates.some(
										(item) => item.getMonth() === currentMonth
									)
									: true;

								return filterByDuration && filterByMonth;
							}).length > 0 ? (
								Trips.map((data: any) => (
									<SwiperSlide
										key={data.id}
										className='my-4 flex h-auto w-full justify-stretch self-stretch px-0.5 py-1'
									>
										<TripCard data={data} key={data.id} className='h-full' />
									</SwiperSlide>
								))
							) : (
								<div className='flex h-full w-full flex-col items-center justify-center gap-y-1 p-8 md:gap-y-4 md:px-8 md:py-16'>
									<h3 className='text-lg font-medium text-gray-950 md:text-2xl xl:text-3xl'>
										No Trips Found
									</h3>
									<p className='text-sm font-medium text-gray-700 md:text-base xl:text-lg'>
										Contact us for more details
									</p>
								</div>
							)}
						</Swiper>

						{/* Swipe Buttons */}
						<button
							className={cn(
								"absolute h-8 w-8 rounded-full",
								"-right-10 top-1/2 -translate-y-1/2",
								`${nextButton} `
							)}
						>
							<div

								className={cn(`h-8 w-8 rounded-md bg-slate-400 p-1 opacity-50 transition-all duration-300 ease-in-out hover:opacity-100`)}
							>
								<ChevronRight className='h-full w-full' />
								<span className='sr-only'>Previous slide</span>
							</div>
						</button>

						<button
							className={cn(
								"absolute h-8 w-8 rounded-full",
								"-left-10 top-1/2 -translate-y-1/2",
								`${prevButton} `
							)}
						>
							<div

								className={cn(`h-8 w-8 rounded-md bg-slate-400 p-1 opacity-50 transition-all duration-300 ease-in-out hover:opacity-100`)}
							>
								<ChevronLeft className='h-full w-full' />
								<span className='sr-only'>Previous slide</span>
							</div>
						</button>
					</div>

					<div className='lg:hidden'>
						<Swiper
							breakpoints={{
								340: {
									slidesPerView: 1.1,
									spaceBetween: 10,
								},
								700: {
									slidesPerView: 2.2,
									spaceBetween: 10,
								},
								1000: {
									slidesPerView: 3,
									spaceBetween: 10,
								},
								1400: {
									slidesPerView: 3,
									spaceBetween: 10,
								},
							}}
							scrollbar={true}
							freeMode={true}
							modules={[Scrollbar, FreeMode]}
							className='flex max-w-[90%] items-stretch justify-center self-stretch !p-2 !pb-4'
						>
							{Trips.filter((trip) => {
								const filterByDuration = tripDuration
									? trip.duration === tripDuration
									: true;
								const filterByMonth = currentMonth
									? trip.tripdates.some(
										(item) => item.getMonth() === currentMonth
									)
									: true;

								return filterByDuration && filterByMonth;
							}).map((data: any) => (
								<SwiperSlide
									key={data.id}
									className='my-4 !h-[unset] self-stretch px-2'
									style={{ height: "auto !important" }}
								>
									<TripCard data={data} key={data.id} className='!h-full' />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
				{/* <div className='flex items-center justify-center py-4'>
					<Link
						href={slug}
						className='group flex items-center justify-center gap-2 sm:w-96'
					>
						<span className='bg-primaryMain h-[2px] w-3/4 origin-right scale-x-[0.33] transition-all duration-300 ease-in-out group-hover:scale-x-100 sm:w-full' />
						<button className='border-primaryMain bg-primaryMain relative shrink-0 rounded-full border-2 px-3 py-1 text-xs font-medium text-white transition-all duration-200 ease-in-out hover:shadow-md md:text-sm xl:text-lg'>
							View All
						</button>
						<span className='bg-primaryMain h-[2px] w-3/4 origin-left scale-x-[0.33] transition-all duration-300 ease-in-out group-hover:scale-x-100 sm:w-full' />
					</Link>
				</div> */}
			</MaxWidthContent>
		</section>
	);
}
