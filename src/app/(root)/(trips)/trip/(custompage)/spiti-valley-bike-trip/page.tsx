import DateShow from "@/components/date-show";
import GetQuoteSubPageForm from "@/components/get-quote-sub-page-form";
import { formatIndianRupees } from "@/lib/utils";
import { IndianRupee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedNumber from "@/components/reusable/animated-number";
import ImageSlideShow from "@/components/images-slideshow";
import AboutUs from "@/components/about-us";
import InclusionExclusion from "@/components/inclusion-exclusion";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineAirplanemodeActive } from "react-icons/md"
import { SendEnquiryButton } from "@/components/trip-action-button";
import { MessagesSquare } from 'lucide-react';
import { getStrapiTripPageContent } from "@/lib/strapi";
import showdown from "showdown";
import MaxWidthContent from "@/components/max-width-content";
import TripsShower from "@/components/trips-shower";
import { categoryData, getTripData } from "@/lib/express";

export const dynamic = "force-dynamic"
const globalslug = "spiti-valley-bike-trip"

export async function generateMetadata() {
	const strapiContent = await getStrapiTripPageContent({ slug: globalslug });

	if (!strapiContent) {
		return notFound(); // Redirect to 404 page if data is not found
	}
	;

	let keywords: any = [];

	if (strapiContent.metakeywords) {

		keywords.push(strapiContent.metakeywords);

		return {
			title: strapiContent.metatitle,
			description: strapiContent.metadescription,
			keywords: keywords,
			alternates: {
				canonical: `/trip/${globalslug}`
			},
		};
	}


	return {
		title: strapiContent.metatitle,
		description: strapiContent.metadescription,
		keywords: keywords,
		alternates: {
			canonical: `/trip/${strapiContent.slug}`
		},
	};
}

export default async function Page() {
	// let slug = 'leh-ladakh-bike-trip'
	const strapiContent = await getStrapiTripPageContent({ slug: globalslug });
	const tripData = await getTripData({ slug: globalslug });

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

	const relatedTripData = await categoryData({ slug: "spiti-valley" })
	const { trips } = relatedTripData
	const converter = new showdown.Converter();

	return (
		<>
			<div
				style={{ backgroundImage: `url(${bannerimageurl})` }}
				className='relative z-20 flex h-[95vh] w-full flex-col items-center justify-center bg-cover bg-fixed bg-bottom '
			>
				{/* Json Schema LD */}
				{schemamarkup && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: JSON.stringify(schemamarkup) }}
					/>
				)}
				<div className='absolute left-0 top-0 z-10 h-full w-full bg-black/40'></div>

				<div className='z-10 text-base font-bold capitalize text-white md:text-xl '>
					I Came, I Saw, I Captured
				</div>
				<h1 className='z-10 text-3xl font-bold capitalize text-white md:text-6xl text-center mx-4'>
					{name}
				</h1>

				<div className='text-white md:w-1/2'></div>

				<div className='absolute bottom-0 z-10 mb-20 flex  flex-col-reverse w-full items-start justify-center md:items-center gap-1 text-lg font-bold capitalize text-white md:flex-row md:gap-4 md:text-3xl px-4'>
					<div className='flex items-end gap-2'>
						Starting from ₹23,999
					</div>
				</div>

				<div className='bg-primaryLight absolute -bottom-4 left-0 right-0 z-20 w-full justify-center py-2 px-2 text-sm md:text-base font-bold text-white text-center'>
					<AnimatedNumber counter={25000} duration={2} start={24000} />+ people have travelled with us. Check out their{" "}
					<Link href='/reviews' className='cursor-pointer underline inline'>
						reviews!
					</Link>
				</div>
			</div>

			{/* Buttons for Small Devices */}
			<div className='fixed bottom-0 left-0 right-0 mb-2 mx-2 rounded-md z-[999] bg-white/90 backdrop-blur-sm shadow-xl md:hidden overflow-y-visible'>
			</div>
			<div className='flex flex-col justify-center items-center w-full'>
				{/* About */}
				<div className='mb-20 flex w-full lg:w-[60vw] flex-col items-center justify-center gap-8 px-8  md:flex-row md:justify-between'>
					{relatedimagesurl.length > 1 && (
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
					)}
					<div className='flex w-full flex-col gap-4 px-4 md:px-2'>
						<div className='text-xl font-bold text-black/80 md:text-4xl'>
							About the Trip
						</div>
						<AboutUs tripdescription={converter.makeHtml(description)} title={name} />
					</div>
				</div>
				{/* Trips */}
				<MaxWidthContent className='pb-16 pt-8 w-full'>
					<TripsShower Trips={trips} />
				</MaxWidthContent>
			</div>

		</>

	);
}
