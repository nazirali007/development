import React from "react";
import SocialMediaHero from "@/components/social-media-hero";
import Image from "next/image";
import GetQuoteHeroForm from "@/components/get-quote-hero-form";
import TripsShower from "@/components/trips-shower";
import MaxWidthContent from "@/components/max-width-content";
import DynamicDescription from "@/components/dynamic-description";
import { getStrapiCatergoryContent } from "@/lib/strapi";
import showdown from "showdown";
import { notFound } from "next/navigation";
import PageDescription from "@/components/page-description";
import AboutUs from "@/components/about-us";
import { categories } from "@/db/schema";
import { db } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { categoryData } from "@/lib/express";
export const dynamic = "force-dynamic"
import Description from "@/components/Description";

export async function generateMetadata() {
	const startTime = performance.now();
	const drizzleData = await db
		.select({
			metatitle: categories.metatitle,
			metadescription: categories.metadescription,
			metakeywords: categories.metakeywords,
			slug: categories.slug
		})
		.from(categories)
		.where(eq(categories.slug, "domestic"))
		.limit(1)
		.then(results => results[0] || null);
	if (!drizzleData) return notFound(); // 404
	let keywords = drizzleData?.metakeywords?.split(', ') || [];
	const endTime = performance.now();
	const executionTime = endTime - startTime;
	console.log(`\n\n drizzle data for meta data of domestic took  ${executionTime.toFixed(2)} milliseconds\n\n`);
	return {
		title: drizzleData?.metatitle ?? '',
		description: drizzleData?.metadescription ?? '',
		keywords: keywords || '',
		alternates: {
			canonical: `/${drizzleData?.slug}`
		},
	};
}

export default async function Page() {
	const startTime = performance.now();
	const data = await categoryData({ slug: "domestic" })
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
			<main className=''>
				{/* Json Schema LD */}
				{schemaMarkup && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
					/>
				)}
				<section className='relative min-h-screen max-h-screen w-full'>
					<Image
						src={bannerimage?.data?.attributes?.url || bannerimageurl}
						alt={"Capture A Trip Domestic Trips"}
						fill
						placeholder='blur'
						blurDataURL='/assets/249.jpg'
						quality={50}
						className='object-cover object-center'
					/>
					<div className='absolute left-0 top-0 z-0 h-full w-full bg-black/40' />
					<div className='absolute left-0 right-0 top-0 bottom-0 z-10 flex w-full flex-col items-center justify-around'>
						{/* <div className='md:w-3/4 flex justify-evenly md:grid grid-cols-12 h-full mt-60 sm:mt-20'> */}
						<div className='mt-40 flex w-full justify-around lg:mt-20'>
							<div className='col-span-12 flex items-center  lg:col-span-8 lg:w-2/5'>
								<h1 className='text-center text-3xl font-bold text-white md:text-5xl lg:text-start lg:text-5xl xl:text-7xl'>
									{title}
								</h1 >
							</div >
							<div className='col-span-4 hidden w-1/4 items-center lg:flex'>
								<GetQuoteHeroForm />
							</div>
						</div >
						<div className='w-full'>
							<SocialMediaHero position='absolute' />
						</div>
					</div>
				</section>

				<Description
					heading={title!}
					titleabout={titleAbout ?? ""}
					description={about!}
				/>
				<MaxWidthContent className='pb-16 pt-8 w-full'>
					<TripsShower Trips={data.trips} />
				</MaxWidthContent>
			</main>
		</>
	);
}
