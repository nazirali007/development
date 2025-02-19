import dynamic from "next/dynamic";
// import DynamicDescription from "@/components/dynamic-description";
// import MaxWidthContent from "@/components/max-width-content";
// import SocialMediaHero from "@/components/social-media-hero";
// import TripsShower from "@/components/trips-shower";
import { notFound } from "next/navigation";
import { getStrapiCatergoryContent } from "@/lib/strapi";
import { categoryData } from "@/lib/express"
import showdown from "showdown";
import React from "react";
import { formatIndianRupees } from "@/lib/utils";
import Image from "next/image";
import { db } from "@/db/drizzle";
import { eq, sql, inArray, and, isNotNull } from "drizzle-orm";
import { categories, filesRelatedMorphs, tripsCategoriesLinks, files, trips } from "@/db/schema";
import { Loader } from "lucide-react";
import Description from "@/components/Description";
// import getstrapicate
// const DynamicDescription = dynamic(() => import("@/components/dynamic-description"));
const MaxWidthContent = dynamic(() => import("@/components/max-width-content"));
const SocialMediaHero = dynamic(() => import("@/components/social-media-hero"));
const TripsShower = dynamic(() => import("@/components/trips-shower"));
const GetQuoteHeroForm = dynamic(() => import("@/components/get-quote-hero-form"));

// const PageDescription = dynamic(() => import("@/components/page-description"));
// const { Worker } = require("node:worker_threads");

type Trip = {
	id: number;
	name: string;
	durationdays: number;
	price: number;
	discount: number;
	slug: string;
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const startTime = performance.now();
	// const strapiContent = await getStrapiCatergoryContent({ slug: params.slug });
	const drizzleData = await db
		.select({
			metatitle: categories.metatitle,
			metadescription: categories.metadescription,
			metakeywords: categories.metakeywords, // Assuming the column name is 'metakeywords' for keywords
			slug: categories.slug
		})
		.from(categories)
		.where(eq(categories.slug, params.slug))
		.limit(1)
		.then(results => results[0] || null);
	if (!drizzleData) return notFound(); // 404

	// console.log(drizzleData , "-----------");

	// const worker = new Worker('./worker.ts')
	// worker.postMessage([40, 2]);
	// worker.addEventListener('message', event => {
	// 	console.log(event.data);
	// });


	let keywords = drizzleData?.metakeywords?.split(', ') || [];

	const endTime = performance.now();
	const executionTime = endTime - startTime;

	console.log(`\n\n drizzle data for meta data of ${params.slug} took  ${executionTime.toFixed(2)} milliseconds\n\n`);

	return {
		title: drizzleData?.metatitle ?? '',
		description: drizzleData?.metadescription ?? '',
		keywords: keywords || '',
		alternates: {
			canonical: `/${drizzleData?.slug}`
		},
	};
}

export default async function Page({ params }: { params: { slug: string, id: number } }) {
	const startTime = performance.now();
	const data = await categoryData({ slug: params.slug })
	if (!data) {
		return notFound(); // Redirect to 404 page if data is not found
	}

	const {
		id,
		slug,
		title,
		about,
		titleAbout,
		bannerimage,
		bannerimageurl,
		bannerimagealt,
		schemaMarkup,
	} = data.category
	const endTime = performance.now();
	const executionTime = endTime - startTime;
	console.log(
		`Express data fetch for ${slug} took ${executionTime.toFixed(2,)} milliseconds`,
	);
	return (
		<>
			<main className="-mt-20 lg:mt-0">
				{/* Json Schema LD */}
				{schemaMarkup! && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
					/>
				)}
				<section className='relative min-h-screen max-h-screen w-full'>
					<Image
						// src={mergeData.bannerimage?.data?.attributes?.url || mergeData.bannerimageurl}
						src={bannerimage! ?? bannerimageurl!}
						rel="preload"
						alt={"Capture A Trip Upcoming Trips"}
						fill
						priority
						fetchPriority="high"
						loading="eager"
						// placeholder='blur'
						// blurDataURL='/assets/249.jpg'
						// quality={50}
						className='object-cover object-center'
					/>
					<div className='absolute left-0 top-0 z-0 h-full w-full bg-black/40' />
					<div className='absolute left-0 right-0 top-0 bottom-0 z-10 flex w-full flex-col items-center justify-around'>
						{/* <div className='md:w-3/4 flex justify-evenly md:grid grid-cols-12 h-full mt-60 sm:mt-20'> */}
						<div className='mt-40 flex w-full justify-around lg:mt-20'>
							<div className='col-span-12 flex items-center  lg:col-span-8 lg:w-2/5'>
								<h1 className='text-center text-3xl font-bold text-white md:text-5xl lg:text-start lg:text-5xl xl:text-7xl'>
									{title}
								</h1>
							</div >
							<div className='col-span-4 hidden w-1/4 items-center lg:flex'>
								<GetQuoteHeroForm />
							</div>
						</div >
						<div className='w-full'>
							<SocialMediaHero position='absolute' />
						</div>
					</div >
				</section >
				<Description
					heading={title!}
					titleabout={titleAbout ?? ""}
					description={about!}
				/>
				{params?.slug === 'meghalaya-tour-package' &&
					<>
						<section className="w-full flex justify-center px-4 md:px-8 py-4">
							<div className="w-full max-w-5xl flex flex-col gap-6 md:gap-8">
								<h2 className="text-center text-[#212529] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
									Best Meghalaya Tour Packages
								</h2>
								<div className="w-[95%] md:w-[90%] overflow-x-auto border border-[#D1D5DB] bg-white">
									<table className="w-full border-collapse">
										<thead>
											<tr className="border-b border-[#D1D5DB]">
												<th className="p-1 md:p-1.5 text-left font-[600] lg:font-[700] text-[0.875rem] md:text-[1.25rem] text-[#030712] border-r border-[#D1D5DB]">
													Meghalaya Packages
												</th>
												<th className="p-1 md:p-1.5 text-center font-[600] lg:font-[700] text-[0.875rem] md:text-[1.25rem] text-[#030712] border-r border-[#D1D5DB]">
													Duration
												</th>
												<th className="p-1 md:p-1.5 text-center font-[600] lg:font-[700] text-[0.875rem] md:text-[1.25rem] text-[#030712] border-r border-[#D1D5DB]">
													Price
												</th>
												<th className="p-1 md:p-1.5 text-center font-[600] lg:font-[700] text-[0.875rem] md:text-[1.25rem] text-[#030712]">
													Itinerary
												</th>
											</tr>
										</thead>
										<tbody>
											{data.trips?.map((trip: Trip, index: number) => (
												<tr
													key={trip.id}
													className={`border-b border-[#D1D5DB] hover:bg-gray-50 transition-colors
                    ${index === data.trips.length - 1 ? 'border-b-0' : ''}`}
												>
													<td className="p-1 md:p-1.5 font-[600] text-[0.75rem] lg:text-[1rem] text-[#212529] border-r border-[#D1D5DB]">
														{trip.name}
													</td>
													<td className="p-1 md:p-1.5 text-center font-[600] text-[0.75rem] lg:text-[1rem] text-[#212529] border-r border-[#D1D5DB]">
														{trip.durationdays}D/{trip.durationdays - 1}N
													</td>
													<td className="p-1 md:p-1.5 text-center font-[600] text-[0.75rem] lg:text-[1rem] text-[#212529] border-r border-[#D1D5DB]">
														<span className="line-through mr-2">
															₹{formatIndianRupees(Number(trip.price))}
														</span>
														<span className="font-semibold">
															₹{formatIndianRupees(Number(trip.discount))}
														</span>
													</td>
													<td className="p-1 md:p-1.5 text-center font-[600] text-[0.75rem] lg:text-[1rem] text-[#212529]">
														<a
															href={`/trip/${trip.slug}`}
															className="text-[#007DBC] hover:text-[#005d8c] transition-colors"
														>
															View Itinerary
														</a>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</section>
					</>
				}
				{/* <About/> */}
				{/* Description */}
				{/* {drizzleData?.about && drizzleData?.smallabout && drizzleData?.titleabout ? (
					<PageDescription
						heading={drizzleData?.titleabout || drizzleData.title!}
						smallDescription={drizzleData?.smallabout}
						description={converter.makeHtml(drizzleData?.about)}
					/>
				) : ( */}
				{/* <DynamicDescription
					heading={drizzleData?.title!}
					description={converter.makeHtml(drizzleData?.about!)}
				/> */}
				{/* )} */}

				{/* Trips */}
				<MaxWidthContent className='pb-16 pt-8 w-full'>
					<TripsShower Trips={data.trips} />
				</MaxWidthContent>
			</main >
		</>
	);
}
