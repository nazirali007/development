import DateShow from "@/components/date-show";
import GetQuoteSubPageForm from "@/components/get-quote-sub-page-form";
import { cn, formatIndianRupees } from "@/lib/utils";
import { IndianRupee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedNumber from "@/components/reusable/animated-number";
import ImageSlideShow from "@/components/images-slideshow";
import AboutUs from "@/components/about-us";
import InclusionExclusion from "@/components/inclusion-exclusion";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { SendEnquiryButton } from "@/components/trip-action-button";
import { MessagesSquare } from "lucide-react";
import { getStrapiTripPageContent } from "@/lib/strapi";
import showdown from "showdown";
// import { LuCheckCircle } from "react-icons/lu";
import TripNavigation from "@/components/trip-navigation";
import { ShareButton } from "@/components/share-button";
import { TripStrapiCard } from "@/components/trip-card";
import NewTripsSlider, { RelatedTripsSlider } from "@/components/trip-slider";
import MaxWidthContent from "@/components/max-width-content";
import ItineraryAccordion from "@/components/reusable/itinerary-accordion";
import React from "react";
import { getTripData } from "@/lib/express";
// import { db } from "@/db/drizzle";
// import { eq, sql, inArray, and } from "drizzle-orm";
// import { categories, filesRelatedMorphs, tripsCategoriesLinks, files } from "@/db/schema";
// import About from "@/components/about";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const strapiContent = await getStrapiTripPageContent({ slug: params.slug });

	if (!strapiContent) {
		return notFound(); // Redirect to 404 page if data is not found
	}
	let keywords: any = [];
	if (strapiContent.metakeywords) {
		keywords.push(strapiContent.metakeywords);

		return {
			title: strapiContent.metatitle,
			description: strapiContent.metadescription,
			keywords: keywords,
			alternates: {
				canonical: `/trip/${strapiContent.slug}`,
			},
		};
	}

	return {
		title: strapiContent.metatitle,
		description: strapiContent.metadescription,
		keywords: keywords,
		alternates: {
			canonical: `/trip/${strapiContent.slug}`,
		},
	};
}

export default async function Page({ params }: { params: { slug: string } }) {
	// const strapiContent = await getStrapiTripPageContent({ slug: params.slug });
	// if (!strapiContent) {
	// 	return notFound(); // Redirect to 404 page if data is not found
	// }
	const tripData = await getTripData({ slug: params.slug });

	const {
		bannerimageurl,
		bannerimage,
		name,
		titledescription,
		itinerarypdfurl,
		coverimage,
		coverimageurl,
		itineraryPdf,
		price,
		discount,
		isCustomized,
		prebooking,
		durationdays,
		pickup,
		description,
		itinerary,
		inclusions,
		exclusions,
		note,
		slug,
		costing,
		reviewvideourl,
		relatedimagesurl,
		schemamarkup,
		// categories,
		smalldescription,
		itineraryaccordion,
		// categoriesSlug,
		...data
	} = tripData;

	// const categoriesSlug: string[] = [];

	let currentDate = new Date();
	let dates = data.dates;

	dates = dates.filter((date: string) => new Date(date) >= currentDate);
	// console.log("category slugs", categoriesSlug)

	// let images = [];

	// if (relatedimagesurl.length > 0) {
	// 	images = relatedimagesurl.map(
	// 		(data: { id: number; Title: string }, index: number) => {
	// 			if (data.Title !== null)
	// 				return { id: data.id, Title: data.Title, index: index };
	// 		}
	// 	);
	// }

	const converter = new showdown.Converter(); // Convert markdown to html

	const BannerImage =
		bannerimage ||
		bannerimageurl ||
		coverimage ||
		coverimageurl ||
		"/assets/249.jpg";
	return (
		<>
			<div
				className={cn(
					"relative z-20 flex h-[95vh] w-full flex-col items-center justify-center"
				)}
			>
				{/* Json Schema LD */}
				{schemamarkup && (
					<script
						type='application/ld+json'
						dangerouslySetInnerHTML={{ __html: JSON.stringify(schemamarkup) }}
					/>
				)}

				{/* Banner Image */}
				<Image
					src={BannerImage}
					alt={bannerimage?.alternativeText || "/assets/249.jpg"}
					fill
					style={{
						objectFit: 'cover',
						objectPosition: 'center'
					}}
					priority={false}
					// quality={50}
					placeholder='blur'
					blurDataURL='/assets/249.jpg'
					className='z-0'
				/>
				<div className='absolute left-0 top-0 z-10 h-full w-full bg-black/40'></div>
				<div className='z-10 text-base font-bold capitalize text-white md:text-xl '>
					I Came, I Saw, I Captured
				</div>
				<h1 className='z-10 mx-4 text-center text-3xl font-bold capitalize text-white md:text-6xl'>
					{name}
				</h1>
				<div className='z-50 mt-6 hidden w-full max-w-[22rem] md:block md:max-w-[32rem]'>
					<div className='flex gap-x-6 px-2 py-2 justify-center capitalize sm:gap-x-5 sm:px-3'>
						<Link
							href={itineraryPdf || itinerarypdfurl || "#"}
							target='_blank'
							className={`flex items-center justify-center gap-2 rounded-md border border-black bg-gray-200 p-2 text-lg font-semibold text-black transition-all duration-200 hover:bg-gray-300 hover:shadow-sm ${isCustomized || Number(price) === 0 || dates.length === 0
								? 'w-full sm:w-[16rem]'
								: 'w-[50%]'
								}`}
						>
							<HiOutlineDownload className='h-5 w-5' />
							Get Itinerary
						</Link>
						{isCustomized || Number(price) === 0 || dates.length === 0 ? (
							<div
								className='hidden w-full cursor-not-allowed items-center justify-center rounded-md bg-secondaryMain p-2 text-lg font-semibold text-black transition-all duration-200 hover:bg-secondaryDark hover:shadow-sm'
							>
								book now
							</div>
						) : (
							<Link
								href={`/bookingquery/${slug}`}
								className='flex w-[50%]  items-center justify-center gap-2 rounded-md bg-secondaryMain p-2 text-lg font-semibold text-black transition-all duration-200 hover:bg-secondaryDark hover:shadow-sm disabled:opacity-50'
							>
								<MdOutlineAirplanemodeActive className='h-5 w-5' />
								book now
							</Link>
						)}
					</div>
				</div>

				<div className='text-white md:w-1/2'></div>
				<div className='absolute bottom-0 z-10 mb-20 flex w-full flex-col-reverse items-start justify-center gap-1 px-4 text-lg font-bold uppercase text-white md:flex-row md:items-center md:gap-4 md:text-3xl '>
					<div
						title='Share this trip with your friends and family.'
						className='flex items-center justify-center md:hidden'
					>
						<ShareButton
							className={
								"m-0 -ml-1 flex rounded-md bg-white px-2 py-1 text-primaryLight hover:bg-gray-100 hover:text-primaryMain"
							}
							data={{
								text: `Hey, I found this interesting trip on the internet. Check it out!`,
								url: `${process.env.NEXT_PUBLIC_BASE_URL}/trip/${slug}`,
								title: name,
							}}
						/>
					</div>
					<div className=''>
						{durationdays > 0 ? (
							<>
								{durationdays - 1}N - {durationdays}D
							</>
						) : (
							<>
								<span className='font-medium'>Days on Request</span>
							</>
						)}
					</div>
					<div className='hidden md:block'>|</div>
					<div className='flex items-end gap-2'>
						{discount && Number(discount) !== 0 ? (
							<div>
								<span className='text-[0.8rem] font-semibold line-through lg:text-base'>
									₹{formatIndianRupees(Number(price))}
								</span>
								<span className='font-semibold pl-2'>
									₹{formatIndianRupees(Number(discount))}
								</span>
							</div>
						) : (price && price > 0 ? (
							<span className='font-semibold '>
								₹{formatIndianRupees(Number(price))}

							</span>
						) : (
							<div className='flex items-end gap-2'>
								<span className='font-semibold'>Price on Request</span>
							</div>
						))}
					</div>
					<div className='hidden md:block'>|</div>
					<div className='flex flex-col md:-mt-4 '>
						<div className='min-w-[8vw] text-sm capitalize text-gray-200 md:text-center'>
							Pickup and Drop
						</div>
						<div className='md:text-center'>{pickup}</div>
					</div>
					{/* Large Devices Share Button */}
					<div
						title='Share this trip with your friends and family.'
						className='relative z-10 ml-1 hidden items-center justify-center md:flex cursor-pointer'
					>
						<ShareButton
							type='rounded'
							className={
								"m-0 flex bg-white px-2 py-1 font-bold text-primaryLight hover:bg-gray-100 hover:text-primaryMain "
							}
							data={{
								text: `Hey, I found this interesting trip on the internet. Check it out!`,
								url: `${process.env.NEXT_PUBLIC_BASE_URL}/trip/${slug}`,
								title: name,
							}}
						/>
					</div>
				</div>

				<div className='absolute -bottom-4 left-0 right-0 z-20 w-full justify-center bg-primaryLight px-2 py-2 text-center text-sm font-bold text-white md:text-base'>
					<AnimatedNumber counter={25000} duration={2} start={24000} />+ people
					have travelled with us. Check out their
					{` `}
					<Link href='/reviews' className='inline cursor-pointer underline hover:underline-offset-2 duration-200 ease-in-out transition-all'>
						reviews!
					</Link>
				</div>
			</div>

			{/* Buttons for Small Devices */}
			<div className='fixed bottom-0 left-0 right-0 z-[999] mx-2 mb-2 overflow-y-visible rounded-md shadow-xl backdrop-blur-sm md:hidden'>
				<div className='relative flex gap-x-1 capitalize sm:gap-x-3 sm:px-3'>
					{/* <Link
						href={itinerarypdfurl || "#"}
						target='_blank'
						className='flex w-full basis-2/5 items-center justify-center gap-2 rounded-md border border-black bg-gray-100 p-2 text-xs font-semibold text-black transition-all duration-200 hover:bg-gray-200 hover:shadow-sm sm:text-sm'
					>
						<HiOutlineDownload className='hidden h-4 w-4 sm:flex' />
						Get Itinerary
					</Link> */}
					{/* <Link
						href={"#costing"}
						className='flex w-full basis-2/5 items-center justify-center gap-2 rounded-md border border-black bg-gray-100 p-2 text-xs font-semibold text-black transition-all duration-200 hover:bg-gray-200 hover:shadow-sm sm:text-sm'>
						Price
					</Link> */}

					<SendEnquiryButton className={`text-sm font-bold ${isCustomized || Number(price) === 0 || dates.length === 0 ? "basis-full" : " basis-2/4"}`}>
						<MessagesSquare className='hidden h-4 w-4 sm:flex' />
						Send Inquiry
					</SendEnquiryButton>

					{isCustomized || Number(price) === 0 || dates.length === 0 ? (
						<div
							// disabled={true}
							className='hidden w-full basis-2/4 items-center justify-center rounded-md bg-secondaryMain p-2 text-sm font-bold text-black transition-all duration-200 hover:bg-secondaryDark hover:shadow-sm'
						>
							<MdOutlineAirplanemodeActive className='hidden h-4 w-4 sm:flex' />
							book now
						</div>
					) : (
						<Link
							// href={`/book/${data.slug}`}
							// href={`/${prebooking === true ? "book" : "bookingquery"}/${slug}`}
							href={`/bookingquery/${slug}`}
							className='flex w-full basis-2/4 items-center justify-center gap-2 rounded-md bg-secondaryMain p-2 text-sm font-bold text-black transition-all duration-200 hover:bg-secondaryDark hover:shadow-sm'
						>
							<MdOutlineAirplanemodeActive className='hidden h-4 w-4 sm:flex' />
							book now
						</Link>
					)}
				</div>
			</div>

			<div className='flex w-full justify-between gap-x-2 px-0 md:px-6 xl:max-w-[1540px] xl:gap-x-10'>
				<div className='flex flex-col justify-center'>
					{/* About */}
					<div className='mb-20 flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between md:items-start md:px-0 lg:w-[60vw]'>
						{relatedimagesurl.length > 1 && (
							// 	<svg preserveAspectRatio='none' viewBox='7 33.5 186 133' height='200' width='200' xmlns='http://www.w3.org/2000/svg'>
							// 	<g>
							// 		<path d='M191.916 84.136c10.758 34.373-61.017 84.352-107.951 82.303C60.976 165.435 7 143.252 7 107.221c0-36.133 71.967-85.314 92.958-71.262 45.248 30.29 80.963 13.048 91.958 48.177z' fill='#FECF3B' />
							// 	</g>
							// </svg>

							// <div
							// 	className='relative w-full overflow-hidden bg-cover bg-center md:h-[60vh]'
							// 	style={{
							// 		backgroundImage: `url(${relatedimagesurl[1].Title})`,
							// 		aspectRatio: 1,
							// 		clipPath:
							// 			"polygon(99.49% 57.16%,75.26% 93.15%,32.01% 96.65%,2.31% 65.02%,8.52% 22.08%,45.97% 0.16%,86.45% 15.77%)",
							// 	}}
							// >
							// 	<div className='absolute left-0 top-0 h-full bg-black/10'></div>
							// </div>
							<>
								<div
									className='relative w-full overflow-hidden bg-cover bg-center md:h-[60vh]'
									style={{
										backgroundImage: `url(${relatedimagesurl[1]})`,
										aspectRatio: 1,
										clipPath:
											"polygon(99.49% 57.16%,75.26% 93.15%,32.01% 96.65%,2.31% 65.02%,8.52% 22.08%,45.97% 0.16%,86.45% 15.77%)",
									}}
								>
									<div className='absolute left-0 top-0 h-full bg-black/10'></div>
								</div>
							</>
						)}
						<div id='about' className='flex w-full flex-col gap-2'>
							{/* {strapiContent.titledescription &&
								<div className='text-xl font-bold text-black/80 md:text-4xl'>
									{strapiContent.titledescription}
								</div>
							} */}

							{/* HERE */}
							{smalldescription ? (
								<AboutUs tripdescription={converter.makeHtml(description)} smalldescription={smalldescription} title={titledescription} />
							) : (
								<AboutUs tripdescription={converter.makeHtml(description)} title={titledescription} />
							)}


						</div>
					</div>

					{/* Quick Navigation */}
					<TripNavigation
						NavigationItems={[
							{ title: "Itinerary", href: "#itinerary" },
							{ title: "Inclusion", href: "#inclusion-exclusion" },
							{ title: "Dates & Costing", href: "#costing" },
							// { title: "", href: "#dates" },
						]}
					/>

					<div className='relative flex w-full flex-col items-start justify-between overflow-hidden overflow-x-hidden pt-10 md:flex-row lg:w-[60vw] xl:pt-20'>
						{/* Itinerary */}
						<div
							id='itinerary'
							className='absolute -top-14 left-0 right-0 -z-50 w-full bg-transparent'
						></div>
						<div className='flex h-full w-full flex-col gap-1 rounded-xl bg-white px-2 py-2 pt-10 sm:px-4 sm:py-4 md:basis-1/2 md:rounded-none md:rounded-tl-xl md:px-8 md:py-8'>
							<div className='text-xl font-bold text-black/80 md:text-4xl'>
								Itinerary
							</div>
							<div
							// className="w-full"
							>
								{itineraryaccordion?.length > 0 ? (
									itineraryaccordion.map((data: any, index: number) => (
										<ItineraryAccordion key={index} data={data} />
									))
								) : (
									<article className="font-normal leading-normal">
										<div
											className="itinerary px-2"
											dangerouslySetInnerHTML={{
												__html: converter.makeHtml(itinerary),
											}}
										/>
									</article>
								)}
							</div>
							<div className="flex items-center justify-center">
								<Link
									href={
										itineraryPdf || itinerarypdfurl || "#"
									}
									target='_blank'
									className='flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-secondaryMain/45 hover:bg-secondaryMain/60 py-1.5  text-base font-semibold text-black transition-all duration-200 hover:shadow-sm'
								>
									<HiOutlineDownload className='h-4 w-4' />
									Download Itinerary
								</Link>
							</div>

						</div>

						<div className='relative flex h-full flex-col gap-8 md:basis-1/2'>
							<div
								id='inclusion-exclusion'
								className='absolute -top-32 left-0 right-0 -z-50 w-full bg-transparent'
							></div>
							{/* Inclusion Exclusion */}
							<InclusionExclusion
								inclusion={converter.makeHtml(inclusions)}
								exclusion={converter.makeHtml(exclusions)}
							/>
							{/* Note */}
							{note && (
								<div className='relative flex flex-col gap-2 px-6 py-8'>
									<div
										id='note'
										className='absolute -top-14 left-0 right-0 -z-50 w-full bg-transparent'
									></div>
									<div className='text-xl font-bold text-black/80 md:text-4xl'>
										Note
									</div>
									<article className='flex flex-col items-center justify-center font-normal leading-normal'>
										{ }
										<div
											className='itinerary'
											dangerouslySetInnerHTML={{
												__html: converter.makeHtml(note),
											}}
										/>
									</article>
								</div>
							)}

							{/* background image */}
							<Image
								src={`/assets/images/airplane-ticket.svg`}
								alt='background image'
								height={100}
								width={100}
								quality={50}
								className='absolute right-[50%] top-12 -z-20 hidden object-cover opacity-30 md:top-[50%] md:block'
							/>
							<Image
								src={`/assets/images/ticket.svg`}
								alt='background image'
								height={200}
								width={200}
								quality={50}
								className='absolute -left-20 top-48 -z-20 hidden rotate-45 rounded-b-xl border object-cover opacity-20 md:block '
							/>
							<Image
								src={`/assets/images/go.svg`}
								alt='background image'
								height={200}
								width={200}
								quality={50}
								className='absolute left-48 top-60 -z-20 hidden -rotate-12 rounded-b-xl object-cover opacity-20 md:block'
							/>
							<Image
								src={`/assets/images/flight-date.svg`}
								alt='background image'
								height={200}
								width={200}
								quality={50}
								className='absolute bottom-10 right-0 -z-20 hidden -rotate-12 rounded-b-xl object-cover opacity-30 xl:block'
							/>
							<Image
								src={`/assets/images/air-travel.svg`}
								alt='background image'
								height={200}
								width={200}
								quality={50}
								className='absolute bottom-60 right-0 -z-20 hidden -rotate-12 rounded-b-xl object-cover opacity-30 xl:block'
							/>
						</div>
					</div>

					{/* Dates */}
					{/* <section>
						{dates && costing && dates.length > 0 && costing.length > 0 ? (
							<div className='flex flex-col w-full justify-center items-center md:items-start rounded-b-xl bg-white py-16 md:px-4 gap-4'>
								<div className='w-full text-xl font-bold text-black/80 md:text-4xl px-4'>
									Costing
								</div>
								<div className='px-4 w-full'>
									<table className='min-w-full border border-gray-300'>
										<thead>
											<tr className="text-xl ">
												<th className='border border-gray-300 p-4 text-left'>Mode</th>
												{/* <th className='border border-gray-300 p-4'></th> 
					*/}
					{/* <th className='border border-gray-300 p-4 text-right '>Price</th>
											</tr>
										</thead>
										<tbody>
											{costing.map((item: {
												id: number,
												__component: string,
												Mode: string,
												Price: string,
												partialamount?: any,
												discountedprice?: any,
											}, index: number) => (
												<tr
												key={index}
												className={index % 2 === 0 ? "bg-gray-100" : ""}
												>
													<td className='border border-gray-300 p-4'>
														{item.Mode}
													</td>
													{/* <td className='border border-gray-300 p-4'>
													</td> */}
					{/* <td className='border border-gray-300 p-4 flex gap-2 items-center justify-end'>
														{Number(item.discountedprice) > 0 && (
															<p className='flex items-center text-gray-400 line-through'>
																<IndianRupee className='mr-1 h-4 w-4' />
																{item.discountedprice}
															</p>
														)}
														<p className='flex items-center'>
															<IndianRupee className='mr-1 h-4 w-4' />
															{item.Price}
														</p>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<div className='w-full text-xl mt-4 font-bold text-black/80 md:text-4xl px-4'>
									Upcoming Dates
								</div>
								<div className='px-4 py-5 w-full'>
									<DateShow dates={dates} />
								</div>
							</div>
						) : null}
						</section> */}

					<div className='relative flex w-full flex-col items-center justify-center gap-4 rounded-b-xl bg-white py-8 md:items-start md:px-4'>
						<div
							id='costing'
							className='absolute -top-32 left-0 right-0 -z-50 w-full bg-transparent'
						></div>
						<div className='w-full px-4 text-xl font-bold text-black/80 md:text-4xl'>
							Costing
						</div>
						{costing.length == 0 ? (
							<>
								<div className='w-full px-4'>
									<table className='min-w-full border border-gray-300'>
										<thead>
											<tr className='text-xl '>
												<th className='border border-gray-300 p-4 text-left'>
													Mode
												</th>
												{/* <th className='border border-gray-300 p-4'></th> */}
												<th className='border border-gray-300 p-4 text-right '>
													Price
												</th>
											</tr>
										</thead>
										<tbody>
											<tr className={"bg-gray-100"}>
												<td className='border border-gray-300 p-4'>
													Please contact us for the price
												</td>
												{/* <td className='border border-gray-300 p-4'>
													</td> */}
												<td className='flex items-center justify-end gap-2 border border-gray-300 p-4'>
													On Request
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</>
						) : (
							<>
								<div className='w-full px-4'>
									<table className='min-w-full border border-gray-300'>
										<thead>
											<tr className='text-xl '>
												<th className='border border-gray-300 p-4 text-left'>
													Mode
												</th>
												{/* <th className='border border-gray-300 p-4'></th> */}
												<th className='border border-gray-300 p-4 text-right '>
													Price
												</th>
											</tr>
										</thead>
										<tbody>
											{costing
												.map(
													(
														item: {
															id: number;
															// __component: string;
															Mode: string;
															Price: string;
															partialamount?: any;
															discountedprice?: any;
														},
														index: number
													) => (
														<tr
															key={index}
															className={index % 2 === 0 ? "bg-gray-100" : ""}
														>
															<td className='border border-gray-300 p-4'>
																{item.Mode}
															</td>
															<td className='flex items-center justify-end gap-2 border-b border-gray-300 p-4'>
																{Number(item.discountedprice) > 0 && (
																	<p className='flex items-center text-gray-400 line-through'>
																		<IndianRupee className='mr-1 h-4 w-4' />
																		{item.Price}
																	</p>
																)}
																<p className='flex items-center'>
																	<IndianRupee className='mr-1 h-4 w-4' />

																	{item.discountedprice
																		? item.discountedprice
																		: item.Price}
																</p>
															</td>
														</tr>
													)
												)}
										</tbody>
									</table>
									{/* <div className='mt-2 flex flex-col gap-1'>
										{costing
											.filter(
												(cost: any) => cost.__component === "trip.costingnote"
											)
											.map((note: any, index: number) => (
												<p
													className='flex rounded-md bg-gray-100 px-2 py-1 text-base'
													key={index}
												>
													{note.note}
												</p>
											))}
									</div> */}
								</div>
							</>
						)}

						<div
							id='dates'
							className='mt-4 w-full px-4 text-xl font-bold text-black/80 md:text-4xl xl:pt-8'
						>
							<h2 className='xl:pt-10'>Upcoming Dates</h2>
						</div>
						{isCustomized ? (
							<div className='w-full px-4 pb-5 text-base md:ml-5 md:text-lg'>
								Date of your choice, please contact us for the same.
							</div>
						) : (
							<>
								{dates.length === 0 ? (
									<div className='w-full px-4 pb-5 text-base md:ml-5 md:text-lg'>
										Dates on Request, please contact us for the same.
									</div>
								) : (
									<>
										<div className='w-full px-4 py-5'>
											<DateShow dates={dates} />
										</div>
									</>
								)}
							</>
						)}
					</div>

					{/* Photo Gallery */}
					{relatedimagesurl && relatedimagesurl.length > 0 ? (
						<div className='mt-10 flex w-full flex-col gap-8'>
							<div className='px-8 text-xl font-bold text-black/80 md:text-4xl'>
								Photo Gallery
							</div>
							<section className='px-2'>
								<ImageSlideShow images={relatedimagesurl} />
							</section>
						</div>
					) : null}

				</div>

				<div className='sticky top-[6rem] mx-8 mr-2 hidden h-[80vh] min-h-[770px] w-full !min-w-[22rem] max-w-[30vh] flex-col gap-2 lg:flex lg:gap-4 xl:max-w-[20vw]'>
					<div className='w-full overflow-hidden rounded-b-2xl rounded-t-sm bg-white shadow-sm p-4 flex  items-center justify-around gap-4'>
						<div className="text-xl font-bold">
							Starting From
						</div>
						<div className='flex items-end gap-2'>
							{discount && Number(discount) !== 0 ? (
								<div>
									<span className='text-primaryLight line-through text-lg font-semibold'>
										₹{formatIndianRupees(Number(price))}
									</span>
									<span className='text-primaryLight text-2xl font-bold pl-2'>
										₹{formatIndianRupees(Number(discount))}/-
										{/* <span className="text-lg pl-2">per person</span> */}
									</span>
								</div>
							) : (price && price > 0 ? (
								<span className='text-primaryLight text-4xl font-bold pl-2 '>
									₹{formatIndianRupees(Number(price))}/-
									{/* <span className="text-lg pl-2">per person</span> */}

								</span>
							) : (
								<div className='flex items-end gap-2'>
									<span className='font-semibold'>Price on Request</span>
								</div>
							))}
						</div>
					</div>
					<GetQuoteSubPageForm videoUrl={reviewvideourl} />
					<div className='hidden items-center justify-around gap-2 rounded-2xl bg-white px-2 py-2 text-base font-semibold capitalize text-white shadow-sm md:flex'>
						{/* <Link
							href={itinerarypdfurl || "#"}
							target='_blank'
							className='flex w-full items-center justify-center gap-2 rounded-md border border-black bg-gray-100 px-2 py-2 text-black shadow-sm hover:bg-gray-200 '
						>
							<HiOutlineDownload className='h-4 w-4' />
							get itinerary
						</Link> */}
						<Link
							href={"#costing"}
							className='flex w-full items-center justify-center gap-2 rounded-md border border-black bg-gray-100 px-2 py-2 text-black shadow-sm hover:bg-gray-200 '>
							Price
						</Link>
						{isCustomized || Number(price) === 0 || dates.length === 0 ? (
							<div
								// disabled={true}
								className='flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-md bg-gray-400 px-2 py-2 shadow-sm'
							>
								book now
							</div>
						) : (
							<Link
								// href={`/${prebooking === true ? "book" : "bookingquery"}/${slug}`}
								href={`/bookingquery/${slug}`}
								className='flex w-full items-center justify-center gap-2 rounded-md bg-secondaryMain text-black px-4 py-2 shadow-sm hover:bg-secondaryDark'
							>
								<MdOutlineAirplanemodeActive className='h-4 w-4' />
								book now
							</Link>
						)}
					</div>
					{/* <div className='w-full overflow-hidden rounded-b-2xl rounded-t-sm bg-white shadow-sm'>
						<div className='w-full bg-primaryLight py-2'>
							<h3 className='px-2 text-lg font-semibold text-white'>
								Why Capture a Trip ?
							</h3>
						</div>
						<div className='flex flex-col overflow-hidden rounded-b-2xl bg-white p-4'>
							<ul className='flex flex-col gap-1'>
								<li className='flex items-center gap-3'>
									<LuCheckCircle className='h-5 w-5 text-green-500' />
									<div className='flex flex-col'>
										<span className='font-semibold'>24/7 Customer Support</span>
										<span className='ml-1 text-xs text-gray-400'>
											We&apos; re here to assist you around the clock.
										</span>
									</div>
								</li>
								<li className='flex items-center gap-3'>
									<LuCheckCircle className='h-5 w-5 text-green-500' />
									<div className='flex flex-col'>
										<span className='font-semibold'>Best Price Assurance</span>
										<span className='ml-1 text-xs text-gray-400'>
											Ensuring you always receive the best rates.
										</span>
									</div>
								</li>
								<li className='flex items-center gap-3'>
									<LuCheckCircle className='h-5 w-5 text-green-500' />
									<div className='flex flex-col'>
										<span className='font-semibold'>Best Services</span>
										<span className='ml-1 text-xs text-gray-400'>
											We provide the best services.
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div> */}
				</div>
			</div>

			{/* Related Trips */}
			<section className='-mt-20 flex w-full flex-col items-center justify-center'>
				<RelatedTripsSlider
					slug={params.slug}
				/>
			</section>

		</>
	);
}
