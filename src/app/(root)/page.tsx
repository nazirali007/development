/* eslint-disable @next/next/no-img-element */
import { assetLink } from "@/assets/image-aws";
import CountOnUs from "@/components/count-on-us";
import HomeAnimation from "@/components/home-animation";
import InDoubt from "@/components/in-doubt";
import HomeSearchbox from "@/components/home-searchbox";
import SocialMediaHero from "@/components/social-media-hero";
import YTCarouselHome from "@/components/yt-carousel-home";
import {
	highlightedCategories,
} from "@/server/db/categories/featured-category";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BannerCarousel from "@/components/reusable/banner-carousel";
import NewTripsSlider from "@/components/trip-slider";
import { getStrapiCarouselContent, getStrapiBannerSlider, getStrapiCuratedCategories, options } from "@/lib/strapi";
import React from "react";
import { getHomeCarouselData, getHomeCuratedData, getHomeData } from "@/lib/express";


export const metadata: Metadata = {
	title: "Capture A Trip - Book Tours Packages, Backpacking Adventures, & International Trips"
};

export const dynamic = "force-dynamic"

export default async function Home() {
	const startTime = performance.now();
	// const curatedCategories = await getHomeCuratedData();
	// const carouselContent = await getStrapiCarouselContent();
	// const carouselContent = await getHomeCarouselData();
	const homeData = await getHomeData()
	const { carouselContent, curatedCategories, banner1, banner2 } = homeData || {};
	const endTime = performance.now();
	const executionTime = endTime - startTime;
	console.log(
		`Express data fetch for home took ${executionTime.toFixed(2,)} milliseconds`,
	);

	// const bannerSlider = await getStrapiBannerSlider({ name: "banner1" });
	// const bannerSlider2 = await getStrapiBannerSlider({ name: "banner2" });
	const isInternational = false;

	// console.log('trips', carouselContent)

	return (
		<>
			<main className=''>
				<section className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden pb-20'>
					<Image
						src={`${assetLink}/img-07.jpg`}
						alt='hero-banner'
						fill
						rel="preload"
						className='object-cover'
						// quality={50}
						priority
					/>
					<div className='absolute left-0 top-0 z-0 h-full w-full bg-black/40' />
					<div className='max-w-3xl p-10 w-full mx-auto relative mt-20 z-50 flex flex-col items-center lg:gap-5'>
						<h1 className='text-center text-xl font-semibold text-white md:text-4xl md:font-medium'>
							Connecting Travelers Since 2016
						</h1>
						<HomeAnimation />
						{/* Searchbar */}
						<HomeSearchbox />
					</div>
					<SocialMediaHero position='absolute' />
				</section>
				{curatedCategories ? (
					<>
						<section className='flex flex-col gap-8 py-8 md:py-20'>
							<h2 className='text-center text-3xl font-bold md:text-5xl'>
								Curated Categories
							</h2>
							<div className='px-[4%]'>
								<div className='mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-2 gap-y-3 sm:gap-y-10 md:grid-cols-3 md:gap-x-4 md:gap-y-10 lg:grid-cols-4'>
									{curatedCategories.map((data: {
										id: number,
										slug: string,
										curatedimageurl: string,
										curatedcardalt: string,
										curatedimage: string,
									}) => (
										<a href={data.slug} key={data.slug} className='group relative'>
											<div className='relative top-0 z-10 overflow-hidden min-h-[12.5rem] sm:min-h-[300px] md:min-h-auto rounded-lg transition-all duration-300 ease-in-out group-hover:-top-6 md:h-[15rem] xl:h-96'>
												<Image
													src={data.curatedimage}
													alt={data.curatedcardalt}
													fill
													className='object-cover object-left group-hover:opacity-90'
													placeholder='blur'
													blurDataURL='/assets/249.jpg'
													// quality={50}
													style={{
														objectFit: "cover",
														objectPosition: "center"
													}}
												/>
											</div>
											<div className='absolute left-0 top-0 z-0 flex h-full w-full items-end justify-center pb-4 transition-all duration-200 ease-in-out group-hover:top-4 md:group-hover:top-8'>
												<div className='flex w-full items-center justify-center gap-2'>
													<span className='bg-primaryMain h-[2px] w-[20%]' />
													<button className='font- medium border-primaryMain  text-primaryMain relative rounded-full border-2 bg-white px-1 py-0.5 md:py-1 text-[0.5rem] transition-all duration-200 ease-in-out hover:shadow-sm hover:font-semibold md:text-xs xl:text-sm'>
														View Details
													</button>
													<span className='bg-primaryMain h-[2px] w-[20%]' />
												</div>
											</div>
										</a>
									))}
								</div>
							</div>
						</section>
					</>) : null}

				{/* <section className='max-w-md hidden mx-auto h-auto overflow-scroll'>
					<Link href="/international-newyear-tour-package">
						<img
							src="/assets/Gifs/IMG_0971.GIF"
							width={100}
							height={100}
							alt="background"
							className="w-full h-full object-cover"
						/>
					</Link>
				</section> */}
				{banner1 ? (
					<section className="my-12 md:my-20">
						<BannerCarousel bannerSliders={banner1} />
					</section>
				) : null}

				{
					carouselContent && (
						carouselContent.map((data: any) => <NewTripsSlider key={data.id} Trips={data.trips} heading={data.title} slug={data.slug} />)
					)
				}

				{banner2 ? (
					<section className="my-12 md:my-20">
						<BannerCarousel bannerSliders={banner2} />
					</section>
				) : null}



				<InDoubt imgName='img-52.jpg' />
				<section className='flex flex-col gap-8 pt-8'>
					<div className='flex flex-col items-center gap-2 px-6'>
						<h2 className='text-textColor text-4xl font-bold md:text-3xl lg:text-5xl'>{`Customize Your Trip`}</h2>
						<p className='text-xs text-gray-500 md:text-sm lg:text-base'>{`We embrace the individuality and uniqueness of each traveler. Check out these customised trips curated with love that cater to your different needs!`}</p>
					</div>
					<div>
						{
							<div className='mx-auto grid w-full max-w-[1200px] h-[700px] sm:h-[900px] md:h-[500px] grid-rows-7 grid-cols-4 gap-x-2 px-8'>
								{highlightedCategories[0] && (
									<Link
										href={`/${highlightedCategories[0].slug}`}
										className='relative w-full overflow-hidden rounded-2xl col-span-4 row-span-3 mb-3 md:mb-0 md:col-span-2 md:row-span-7 hover:opacity-90'
									>
										<Image
											src={highlightedCategories[0].coverimageurl!}
											alt={highlightedCategories[0].coverimagealttag!}
											fill
											className='object-cover object-center'
											placeholder='blur'
											blurDataURL='/assets/249.jpg'
											// quality={50}
											style={{
												objectFit: "cover",
												objectPosition: "bottom"
											}}
										/>{" "}
										<div className='absolute bottom-0 left-0 z-10 h-fit w-full bg-black/50 py-1 text-center font-medium text-white sm:py-2 text-sm sm:font-semibold lg:text-lg lg:font-semibold xl:text-xl'>
											<p>{highlightedCategories[0].name}</p>
										</div>
									</Link>
								)}
								{highlightedCategories[1] && (
									<Link
										href={`/${highlightedCategories[1].slug}`}
										className='relative overflow-hidden rounded-lg col-span-2 row-span-2 md:col-span-1 md:row-span-4 hover:opacity-90 mb-2'
									>
										<Image
											src={highlightedCategories[1].coverimageurl!}
											alt={highlightedCategories[1].coverimagealttag!}
											fill
											className='object-cover'
											placeholder='blur'
											blurDataURL='/assets/249.jpg'
											// quality={50}
											style={{
												objectFit: "cover",
												objectPosition: "top"
											}}
										/>{" "}
										<div className='absolute bottom-0 left-0 z-10 h-fit w-full bg-black/50 py-1 text-center font-medium text-white sm:py-2 text-sm sm:font-semibold lg:text-lg lg:font-semibold xl:text-xl'>
											<p>{highlightedCategories[1].name}</p>
										</div>
									</Link>
								)}
								{highlightedCategories[2] && (
									<Link
										href={`/${highlightedCategories[2].slug}`}
										className='relative overflow-hidden rounded-lg col-span-2 row-span-2 md:col-span-1 md:row-span-4 hover:opacity-90 mb-2'
									>
										<Image
											src={highlightedCategories[2].coverimageurl!}
											alt={highlightedCategories[2].coverimagealttag!}
											fill
											className='object-cover object-left'
											placeholder='blur'
											blurDataURL='/assets/249.jpg'
											// quality={50}
											style={{
												objectFit: "cover",
												objectPosition: "left"
											}}
										/>{" "}
										<div className='absolute bottom-0 left-0 z-10 h-fit w-full bg-black/50 py-1 text-center font-medium text-white sm:py-2 text-sm sm:font-semibold lg:text-lg lg:font-semibold xl:text-xl'>
											<p>{highlightedCategories[2].name}</p>
										</div>
									</Link>
								)}
								{highlightedCategories[3] && (
									<Link
										href={`/${highlightedCategories[3].slug}`}
										className='relative overflow-hidden rounded-lg hover:opacity-90 col-span-2 row-span-2 md:col-span-1 md:row-span-4'
									>
										<Image
											src={highlightedCategories[3].coverimageurl!}
											alt={highlightedCategories[3].coverimagealttag!}
											fill
											className='object-cover'
											placeholder='blur'
											blurDataURL='/assets/249.jpg'
											// quality={50}
											style={{
												objectFit: "cover",
												objectPosition: "top"
											}}
										/>{" "}
										<div className='absolute bottom-0 left-0 z-10 h-fit w-full bg-black/50 py-1 text-center font-medium text-white sm:py-2 text-sm sm:font-semibold lg:text-lg lg:font-semibold xl:text-xl'>
											<p>{highlightedCategories[3].name}</p>
										</div>
									</Link>
								)}
								{highlightedCategories[4] && (
									<Link
										href={`/${highlightedCategories[4].slug}`}
										className='relative overflow-hidden rounded-lg hover:opacity-90 col-span-2 row-span-2 md:col-span-1 md:row-span-4'
									>
										<Image
											src={highlightedCategories[4].coverimageurl!}
											alt={highlightedCategories[4].coverimagealttag!}
											fill
											className='object-cover'
											placeholder='blur'
											blurDataURL='/assets/249.jpg'
											// quality={50}
											style={{
												objectFit: "cover",
												objectPosition: "top"
											}}
										/>{" "}
										<div className='absolute bottom-0 left-0 z-10 h-fit w-full bg-black/50 py-1 text-center font-medium text-white sm:py-2 text-sm sm:font-semibold lg:text-lg lg:font-semibold xl:text-xl'>
											<p>{highlightedCategories[4].name}</p>
										</div>
									</Link>
								)}
								{highlightedCategories[5] && (
									<Link
										href={`/${highlightedCategories[5].slug}`}
										className='relative overflow-hidden rounded-lg hover:opacity-90'
									>
										<Image
											src={highlightedCategories[5].coverimageurl!}
											alt={highlightedCategories[5].coverimagealttag!}
											fill
											className=''
											placeholder='blur'
											blurDataURL='/assets/249.jpg'
											// quality={50}
											style={{
												objectFit: "cover",
												objectPosition: "top"
											}}
										/>{" "}
										<div className='absolute bottom-0 left-0 z-10 h-fit w-full bg-black/50 py-1 text-center font-medium text-white sm:py-2 text-sm sm:font-semibold lg:text-lg lg:font-semibold xl:text-xl'>
											<p>{highlightedCategories[5].name}</p>

										</div>
									</Link>
								)}
							</div>
						}
					</div>
				</section>
				<CountOnUs />
				<YTCarouselHome />
			</main >
		</>
	);
}
