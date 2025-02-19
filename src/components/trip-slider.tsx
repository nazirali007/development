"use client"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import MaxWidthContent from "@/components/max-width-content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TripCard, TripStrapiCard } from "./trip-card";
import { FaArrowRight } from "react-icons/fa";
import { getStrapiCategoryContentSlug } from "@/lib/strapi";
import { useState, useEffect } from "react";
import GetQuoteHeroForm from "./get-quote-hero-form";
import RequestCallback from "./RequestCallback";
import { getRelatedTripData } from "@/lib/express";

interface TripSliderProps {
	heading: string;
	subheading?: string;
	Trips: any[];
	slug: string;
	isInternational?: boolean
	isDomestic?: boolean
}

export const RelatedTripsSlider = ({ slug }: { slug: string }) => {
	const [StrapiContent, setStrapiContent] = useState<any[] | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getRelatedTripData({ slug });
			setStrapiContent(data);
			setLoading(false);
		};

		fetchData();
	}, [slug]);
	const [showForm, setShowForm] = useState<boolean>(false);

	if (loading) return <>Loading</>;

	return (
		<>
			{StrapiContent && StrapiContent.length > 0 ? (
				<>
					{StrapiContent.length > 5 ? (
						<section className="w-full h-full flex bg-white border-slate-200 shadow-sm">
							<MaxWidthContent className="overflow-hidden py-3 max-w-[1500px] px-4 sm:px-4 md:px-4 border-y rounded-xl">
								<div>
									<h2 className="text-2xl lg:text-3xl w-fit font-bold lg:w-fit text-start relative after:content-[''] after:h-1 after:rounded-3xl after:bg-primaryLight after:absolute after:-bottom-1 after:left-0 after:w-[30%]">
										Related Trips
									</h2>
								</div>
								<Carousel opts={{ align: "center", loop: true }}>
									<CarouselContent className="rounded-xl">
										{StrapiContent.map((data) => (
											<CarouselItem
												key={data.id}
												className="my-4 rounded-xl flex h-auto w-full min-w-[200px] basis-1/2 px-0.5 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
											>
												<TripStrapiCard
													className=""
													data={data}
													showForm={showForm}
													setShowForm={setShowForm}
												/>
											</CarouselItem>
										))}
									</CarouselContent>

									<CarouselNext
										aria-label="Next"
										className={cn(
											`absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 bg-gray-300 md:flex 2xl:-right-3 z-50`
										)}
									/>

									<CarouselPrevious
										aria-label="Previous"
										className={cn(
											`absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 bg-gray-300 md:flex 2xl:-left-3 z-50`
										)}
									/>
								</Carousel>
								<p className="text-sm text-center flex w-full justify-center items-center gap-1 font-semibold text-gray-700 transition-all duration-200 ease-in-out">
									<Link
										href={'/upcoming-trips'}
										className="relative gap-1 w-fit text-xs sm:text-sm underline underline-offset-1 hover:underline-offset-2 hover:text-black flex shrink-0 items-center justify-center font-semibold text-gray-700 transition-all duration-200 ease-in-out"
									>
										view our upcoming trips <FaArrowRight size={12} />
									</Link>
								</p>
							</MaxWidthContent>
						</section>
					) : null}
				</>
			) : null}
		</>
	);
}

export default function TripsSlider({
	Trips,
	heading,
	subheading,
	slug,
	isInternational = false,
	isDomestic = false
}: TripSliderProps) {
	// console.log('Trips', Trips[0].isInternational)
	// let data: any[];
	// if (isInternational !== isDomestic) {
	// 	data = Trips.filter((trip: any) => trip.isInternational === isInternational)
	// }
	// else data = Trips
	const [showForm, setShowForm] = useState<boolean>(false);
	// console.log(Trips, '==========')
	return (
		<>
			{showForm && <RequestCallback showPopup={showForm} setShowPopup={setShowForm} />}
			<section className='py-2'>
				<MaxWidthContent className=''>
					<div className='flex flex-col px-2 pt-8 sm:px-4 md:px-8 md:py-8'>
						<div className='text-sm uppercase text-textColor md:text-start md:text-lg '>
							{subheading ?? <p>{subheading}</p>}
						</div>
						<div className='flex items-center gap-4 text-3xl font-bold text-textColor md:text-start md:text-4xl lg:text-5xl'>
							<Link
								href={slug || "#"}
								className='group flex h-full w-full items-center justify-between gap-2 md:items-end md:pr-4'
							>
								<h1 className="relative text-2xl after:absolute after:bottom-[-1.2rem] after:left-[0] after:h-[1rem] after:w-full after:bg-[url('../../public/assets/images/underline.svg')] after:bg-no-repeat after:content-[''] md:text-3xl">
									{heading}
								</h1>
								{/* <span className='bg-primaryMain h-[2px] w-3/4 origin-right scale-x-[0.33] transition-all duration-300 ease-in-out group-hover:scale-x-100 sm:w-full' /> */}
								<button className='relative flex h-full shrink-0 items-center justify-center gap-2 rounded-md bg-primaryMain px-2 py-1.5 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:gap-4 hover:bg-primaryDark hover:shadow-md md:text-sm xl:text-sm'>
									{"Show All"}
									<FaArrowRight />
								</button>
								{/* <span className='bg-primaryMain h-[2px] w-3/4 origin-left scale-x-[0.33] transition-all duration-300 ease-in-out group-hover:scale-x-100 sm:w-full' /> */}
							</Link>
						</div>
					</div>

					<div className='relative mt-4 flex w-full items-center px-2 md:mt-0'>
						<Carousel
							className='mx-auto h-full w-full max-w-[1220px] items-stretch justify-stretch overflow-hidden rounded-lg md:flex md:overflow-visible'
							opts={{
								align: "center",
							}}
						>
							<CarouselContent className='w-full rounded-lg'>
								{Trips.map((data: any) => (
									<CarouselItem
										key={data.id}
										className='my-4 flex h-auto w-full min-w-[240px] basis-1/2 justify-stretch self-stretch px-0.5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
									>
										<TripStrapiCard className='' data={data} showForm={showForm} setShowForm={setShowForm} />
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
					</div>
				</MaxWidthContent>
			</section>
		</>
	);
}

