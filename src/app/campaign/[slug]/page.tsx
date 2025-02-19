import React from 'react'
import { getStrapiCampaignContent, options } from '@/lib/strapi';
import { cn, formatIndianRupees } from '@/lib/utils';
import { FaWhatsapp } from "react-icons/fa";
// import './page.css'
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import Testimonials from "@/components/campaign/testimonials";
import TestimonialMobile from "@/components/campaign/testimonialMobile";

import Link from 'next/link';
import { FaGoogle, FaInstagram, FaMinus, FaPhoneAlt, FaPlus, FaTripadvisor } from 'react-icons/fa';
import { TbMapSearch } from "react-icons/tb";
import TestimonyCarousel from '@/components/TestimonyCarousel';
import { StrapiCampaignType } from '@/types/collections/campaign';
import { BsStarFill } from 'react-icons/bs';
import { GoPeople } from "react-icons/go";
import { RiMapPin2Line } from "react-icons/ri";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import CampaignForm from '@/components/campaign/form';
// import { CloudSnow } from 'lucide-react';
import { CAT_INSTA_FOLLOWER_COUNT, CAT_GOOGLE_REVIEWS_COUNT, ITINERARIES_COUNT } from "@/server/db/static/variables";
import { TbCoinRupee } from "react-icons/tb";
import HomeCarousel from '@/components/campaign/homeCarousel';
import Footer from '@/components/footer';
import NavCampaign from '@/components/navbar/nav-campaign';
import TripCards from '@/components/campaign/tripCards';
import TripCardsLarge from '@/components/campaign/tripCardLarge';
import ReelCards from '@/components/campaign/reel';
import ReelCardsLarge from '@/components/campaign/reelLarge';
// export async function generateMetadata({
// 	params,
// }: {
// 	params: { slug: string };
// }) {
// 	const strapiContent = await getStrapiTripPageContent({ slug: params.slug });

// 	if (!strapiContent) {
// 		return notFound(); // Redirect to 404 page if data is not found
// 	}
// 	let keywords: any = [];

// 	if (strapiContent.metakeywords) {
// 		keywords.push(strapiContent.metakeywords);

// 		return {
// 			title: strapiContent.metatitle,
// 			description: strapiContent.metadescription,
// 			keywords: keywords,
// 			alternates: {
// 				canonical: `/trip/${strapiContent.slug}`,
// 			},
// 		};
// 	}

// 	return {
// 		title: strapiContent.metatitle,
// 		description: strapiContent.metadescription,
// 		keywords: keywords,
// 		alternates: {
// 			canonical: `/trip/${strapiContent.slug}`,
// 		},
// 	};
// }

const Page = async ({ params }: { params: { slug: string } }) => {
	const data: StrapiCampaignType = await getStrapiCampaignContent({ slug: params.slug })
	const totalStars = 5
	//console.log(data.attributes.background.data, "=====");
	// const carouselImages = [
	// 	'/assets/campaign/bali1.jpg',
	// 	'/assets/campaign/bali2.jpg',
	// 	'/assets/campaign/bali3.jpg',
	// 	'/assets/campaign/bali4.jpg',
	// 	'/assets/campaign/bali5.jpg'
	// ]

	return (
		<div className='bg-[#F0F9FF] dmsans overflow-x-hidden w-screen'>
			<NavCampaign />
			{/* <div className='px-2 md:px-12 py-16 h-screen bg-gradient-to-b from-primaryMain/90 via-cyan-300/90 to-transparent via-40% to-90%'>
				<div className='flex flex-col items-evenly gap-2 h-full justify-center bg-primaryDark rounded-3xl relative border-2 border-black/80'
				>
					<Image src="/assets/campaign/Bali-Banner.webp" alt='' fill className='rounded-3xl hidden sm:block' />

					<section className=' sm:hidden mx-auto h-full w-full overflow-none '>
						<img
							src="/assets/campaign/phone-banner.webp"
							width={100}
							height={100}
							alt="background"
							className="w-full h-full rounded-3xl"
						/>
					</section>
				</div>
			</div> */}
			<div className="">
				<HomeCarousel data={data?.attributes?.background?.data} />
			</div>
			<div className="flex  w-full justify-center items-end px-[2rem] md:px-[15.625rem] md:py-[6.25rem] py-[3.75rem]">
				<div className=' grid grid-cols-2 md:flex z-20 w-[19.375rem] md:w-[48.75rem] md:h-[2.375rem] justify-center  md:items-center justify-items-between gap-10 md:gap-[6.25rem]  bottom-20 text-black h-[7.25rem]'>
					<div className=' flex gap-2 items-center justify-center w-[8.375rem] md:w-[8.375rem] md:h-[2.375rem] h-[2.375rem] p-2'>

						<Image
							src={
								"/campaign/Group 66.svg"
							}
							alt="Google Image"
							height={50}
							width={50}
							className="h-[2.375rem] w-[2.375rem] "
						/>
						<div className="flex flex-col items-start ">
							<div className='flex gap-1  items-center text-[#3A3A3A] justify-center font-[500] text-[0.875rem]'>
								<Image
									src={
										"/campaign/Star.svg"
									}
									alt="Google Image"
									height={0.1}
									width={0.1}
									className="h-[1rem] w-[1.25rem] "
								/> 4.9
							</div>
							<div className='font-[400] w-[5.25rem] h-[1rem] text-[0.75rem] text-[#3A3A3A] '>{CAT_GOOGLE_REVIEWS_COUNT}+ reviews</div>
						</div>
					</div>
					<div className='flex gap-2  md:ml-0 items-center  justify-center justify-self-end   w-[7.375rem] h-[2.375rem] p-2'>
						<Image
							src={
								"/campaign/Vector.svg"
							}
							alt="Google Image"
							height={50}
							width={50}
							className="h-[2.375rem] w-[2.375rem]"
						/>
						<div className="flex flex-col items-start">
							<div className='flex gap-1 text-[#3A3A3A]  items-center justify-center font-[500] text-[0.875rem]'>								<Image
								src={
									"/campaign/Users.svg"
								}
								alt="Google Image"
								height={1}
								width={1}
								className="h-[1rem] w-[1.25rem] "
							/> {CAT_INSTA_FOLLOWER_COUNT}k+</div>
							<div className='font-[400] w-[5.25rem] h-[1rem] text-[0.75rem] text-[#3A3A3A]'>Community</div>
						</div>
					</div>
					<div className='flex gap-2 md:mt-0 items-center justify-start w-[8.375rem] h-[2.375rem] p-2 '>
						<Image
							src={
								"/campaign/Group 67.svg"
							}
							alt="Instagram Image"
							height={50}
							width={50}
							className="h-[2.375rem] w-[2.375rem]"
						/>
						<div className="flex flex-col items-start">
							<div className='flex gap-1 text-[#3A3A3A] items-center justify-center font-[500] text-[0.875rem]'>
								<Image
									src={
										"/campaign/Map_Pin.svg"
									}
									alt="Google Image"
									height={1}
									width={1}
									className="h-[1rem] w-[1.25rem] "
								/> 500+
							</div>
							<div className='text-[#3A3A3A] font-[400] w-[3.5rem] h-[1rem] text-[0.75rem] '>Itineraries</div>
						</div>
					</div>
					<div className='flex gap-2 md:mt-0 md:ml-0 items-center justify-center justify-self-end w-[7.375rem] h-[2.375rem] p-2'>
						<Image
							src={
								"/campaign/rupee.svg"
							}
							alt="Google Image"
							height={50}
							width={50}
							className="h-[2.375rem] w-[2.375rem]"
						/>
						<div className="flex flex-col items-start">
							<div className='flex gap-1 text-[#3A3A3A] items-center justify-center font-[500] text-[0.875rem]'>								<Image
								src={
									"/campaign/Group 143.svg"
								}
								alt="Google Image"
								height={1}
								width={1}
								className="h-[1rem] w-[1.25rem] "
							/>EMI</div>
							<div className='font-[400] w-[5.25rem] h-[1rem] text-[0.75rem] text-[#3A3A3A]'>Book Now & Pay Later
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* form and world map */}

			<div id='form1' className='w-full relative'>
				<div className="w-full flex justify-center  bg-[#DDF2EC] border-green-600">

					<div className="px-[1.25rem] md:pl-0 md:px-0 w-full h-auto pb-6 md:pb-0 md:w-[80rem] md:h-[16.125rem] flex flex-col justify-start items-start md:items-center ">
						<div className="text-[1.25rem] mt-[1.25rem] md:ml-[0rem] md:text-[1.5rem] w-[10.875rem] h-[1.625rem] md:w-[15.063rem] md:h-[2rem] text-start md:text-center md:mt-[2.5rem] font-[500]">
							Need Assistance ?
						</div>
						<div className="text-[1rem]  mt-[0.5rem] md:mt-[1rem] md:ml-[0rem] text-[#5A5A5A] w-full h-auto md:w-[25.625rem] md:h-[3.25rem] md:text-[1.25rem] font-[400] text-start md:text-center  leading-[1.302rem] ">
							Skip the line and connect with our Destination Expert on WhatsApp right away!
						</div>
						<div className=" mt-[1.25rem] md:mt-[1.5rem] md:ml-[0rem] flex justify-center w-full md:w-[25.625rem]">
							<Link target="_blank" href={`https://api.whatsapp.com/send?phone=918368653222&text=Hello%20Vishal,%20i%20am%20interested%20for%20Bali%20trip`} className="w-[100%] h-[3.375rem] md:w-[25.625rem] bg-[#35AF46] py-2 px-2 md:px-[4rem] rounded-[0.75rem] flex justify-center items-center font-[600]  text-white text-[1rem]"><FaWhatsapp className=" w-[1.25rem] h-[1.25rem] md:w-[1.25rem] md:h-[1.25rem] mr-[0.5rem]" /> <span className="h-[1.375rem] text-[1rem] leading-[1.375rem] font-[600] w-auto">Chat with Us</span></Link>
						</div>

					</div>
				</div>
				{/* <div className='lg:flex relative justify-around gap-4 px-6 '>
					<div className='w-[119px] h-[89px] lg:w-[292px] lg:h-[219px] absolute md:-ml-52 -mt-28 lg:-mt-40 ml-16'>
						<Image src={'/assets/campaign/worldMap-upper.svg'} alt='' fill />
					</div>
					<div className='w-[221.3px] h-[465.9px] lg:w-[616px] lg:h-[1190px] absolute -left-20 z-9'>
						<Image src={'/assets/campaign/worldMap-left.svg'} alt='' fill />
					</div>
					<div className='w-[300px] h-[380px] lg:w-[771px] lg:h-[983px] absolute -right-10 overflow-x-hidden md:right-0 z-9'>
						<Image src={'/assets/campaign/worldMap-right.svg'} alt='' fill className='overflow-x-hidden' />
					</div>

				</div> */}

				<div className="w-full flex justify-center ">

					<div className=" flex justify-center items-center w-full md:w-[67.5rem] md:h-[1.5rem] h-[1.5rem] mt-[2.5rem] mb-[2.5rem] md:mb-[3.125rem] md:mt-[3.125rem] font-normal gap-[0.5rem]">
						<div className=" w-full flex justify-end">
							<Image
								src="/campaign/Line 7new.svg"
								alt=""
								height={0.125}
								width={1}
								className="w-full hidden md:block rounded-[0.063rem] object-contain"
							/>
							<Image
								src="/campaign/Line 7.svg"
								alt=""
								height={0.125}
								width={1}
								className="w-full md:hidden rounded-[0.063rem] object-contain"
							/>
						</div>
						<div className=" flex items-center justify-center  w-[1.125rem] h-[1.5rem] font-[400] text-[1rem]">
							Or
						</div>
						<div className=" w-full flex justify-start">
							<Image
								src="/campaign/Line 6new.svg"
								alt=""
								height={0.125}
								width={1}
								className="w-full hidden md:block rounded-[0.063rem] object-contain"
							/>
							<Image
								src="/campaign/Line 6.svg"
								alt=""
								height={0.125}
								width={1}
								className="w-full md:hidden rounded-[0.063rem] object-contain"
							/>
						</div>
					</div>


				</div>

				<CampaignForm destination={data?.attributes?.Location?.destination} destinationSlug={data?.attributes?.slug} />

			</div>

			{/* curated packages */}
			< div className='mt-[2.5rem] md:mt-[6.25rem] z-20 flex flex-col items-start md:items-center w-screen ml-[1.25rem] md:ml-0 '>
				<div className=' justify-center flex flex-col w-full items-start md:items-center '>
					<div className='  text-start md:text-center w-[16.75rem] h-[5.25rem] md:w-auto md:h-[3.563rem] flex justify-start items-center'>
						<div className=" text-[2rem] md:text-[2.75rem] text-[#1F2B33] font-[600] leading-[2.604rem] md:leading-[3rem]"><span className="text-[#007DBC] leading-[2.604rem] font-[600] md:leading-[3rem]">Best{" "}</span>Curated Packages</div>

					</div>
					<div className=' mt-[1rem] md:mt-[1rem] '>
						<p className='flex flex-wrap leading-[1.465rem] text-[#7A7A7A] w-[90%] pr-6 line-clamp-5 break-words h-auto md:w-[37.5rem] text-[1rem] md:text-[1.125rem] md:h-[2.875rem] md:text-center font-[400] text-start '>
							Indulge in our carefully crafted packages to immerse you in the
							most captivating and transformative travel adventures
						</p>
					</div>
				</div>
				{/* tripcards 1 */}



				<TripCards data={data} />
				<TripCardsLarge data={data} />



				{/* tripcards 2 */}
				{/* <div className='w-full md:my-8 flex flex-col md:px-32'>
					{data?.attributes.trips?.data?.map((data) => {
						return (
							<div key={data.id} className='shadow-lg shadow-gray-500 md:shadow-none contain-content my-4 md:p-0 w-full rounded-xl'>
								<div className='p-2 mb-[57px] sm:mb-0 h-[370px] sm:h-[300px] w-full ' >
									<article className="relative h-full flex justify-center px-6 pb-8 pt-40 mx-auto">
										<Image fill src={`${data.attributes?.bannerimage?.data?.attributes?.url ?? data.attributes?.coverimage?.data?.attributes?.url ?? data?.attributes?.bannerimageurl ?? data?.attributes?.coverimageurl}`} alt="No Photo" className="absolute rounded-xl inset-0 h-full w-full object-cover object-center"
											quality={50}
										/>
										{data?.attributes?.isCustomized &&
											<div className='text-textColor/95 flex w-full items-center h-10 justify-between font-semibold absolute left-0 top-1.5 md:top-4'>
												<div className='flex flex-row mb-2 items-center justify-between w-full gap-x-0.5 md:gap-x-2 text-[0.6rem] lg:text-base'>
													<span className='relative text-black bg-secondaryMain pl-1 md:pl-2 pr-4 md:pr-5 py-1' style={{ clipPath: 'polygon(0 0, 83% 0, 100% 100%, 0% 100%)' }}>
														<div className="absolute h-[300%] w-4 bg-white/60 shadow-lg shadow-white -z-10 top-0 left-0 skew-x-12 animate-fade-in-right repeat-infinite duration-1000"></div>
														<div className="flex gap-2">
															<span className='text-[0.8rem] font-bold flex gap-1 lg:text-base text-gray-600'>
																<span className=" font-semibold"></span>
																<span className=" font-semibold">
																	Customizable
																</span>
															</span>
														</div>
													</span>
												</div>
											</div>}
										<div className="absolute rounded-xl inset-0 md:bg-gradient-to-l bg-gradient-to-t from-gray-900 to-60% to-gray-900/10 pr-2">
											<div className="h-7 w-full m-2 flex-col justify-end items-end inline-flex pr-2 md:pt-4">
												<div className="px-3 py-0.5 bg-white rounded-[100px] inline-flex justify-center   items-center gap-2">
													<div className="text-black text-xs font-bold font-['DM-Sans'] leading-normal">{data?.attributes?.durationdays}D/{data?.attributes?.durationdays! - 1}N</div>
												</div>
											</div>
											<div className='absolute bottom-0 sm:text-end sm:right-0 m-2 flex flex-col gap-2 pr-2 pb-2'>
												<div className="self-stretch text-white sm:text-3xl text-2xl font-bold font-['DM-Sans']">{data?.attributes?.name}</div>
												<div className="text-white sm:text-2xl text-xl font-semibold font-['DM-Sans'] leading-5 sm:leading-[30px]">{'₹' + formatIndianRupees(data.attributes.price ?? 0) + '/-'}</div>
												<div className="gap-2 flex sm:justify-end">
													{data.attributes?.tags?.map((data) =>
														<div key={data.id}>
															<div className="text-[#00111a] text-xs font-semibold font-['DM-Sans'] w-max h-7 px-3 py-1.5 bg-[#91c7e2] rounded-[100px]">{data.Title}</div>
														</div>
													)}
												</div>
												<div className='hidden sm:flex w-full mt-2 gap-2 justify-end'>
													<Link href="tel:+918287636079" className="w-11 h-11 px-2 bg-white rounded-[10px] border border-[#005986] justify-center items-center gap-2 inline-flex">
														<FaPhoneAlt className="h-3 w-3 sm:h-5 sm:w-5" />
													</Link>
													<Link href="#form1" className="sm:w-[350px] h-11 px-4 py-[18px] bg-[#e55d1a] rounded-lg justify-center items-center inline-flex">
														<div className="text-center text-white text-base font-semibold font-['DM-Sans'] leading-snug flex gap-2">Send Enquiry</div>
													</Link>
												</div>
											</div>
										</div>
									</article>
									<div className='sm:hidden flex gap-2 mt-2'>
										<Link href="tel:+918287636079" className="w-11 h-11 px-2 bg-white rounded-[10px] border border-[#005986] justify-center items-center gap-2 inline-flex">
											<div className="w-5 h-5 relative"><FaPhoneAlt className="h-5 w-5" /></div>
										</Link>
										<Link href="#form1" className="w-full h-11 px-4 py-[18px] bg-[#e55d1a] rounded-lg justify-center items-center inline-flex">
											<div className="text-center text-white text-base font-semibold font-['Inter'] leading-snug">Send Enquiry</div>
										</Link>
									</div>
								</div>
							</div>
						)
					})
					}
				</div> */}
			</div >


			{/* Activities */}
			< div className="ml-[1.25rem] md:ml-0 mt-[2.5rem] md:mt-[4.375rem]   h-full w-full relative  z-10" >
				{/* <div className='absolute -top-28 md:-top-72 w-full md:h-[32.375rem] h-[126.811px]'>
					<Image src="/assets/campaign/activity-upper.svg" alt='' fill objectFit='cover' />
				</div>
				<div className='absolute -bottom-12 md:-bottom-36 w-full md:h-[254px] h-[79px]'>
					<Image src="/assets/campaign/activity-lower.svg" alt='' fill objectFit='cover' />
				</div> */}
				{/* <div className='absolute w-[54px] h-[84px] md:w-[12%] md:h-[20%] lg:w-[174px] lg:h-[267px] right-0 -top-2 z-20'>
					<Image src="/assets/campaign/magnifying-glass.svg" alt='' fill objectFit='cover' />
				</div> */}
				<div className=' flex pb-4 md:px-16 flex-col items-center justify-center w-screen md:ml-0 md:pb-0 '>
					<div className='w-full flex flex-col items-start md:items-center justify-center md:px-0 relative '>
						<div className=" text-[#141414] w-full line-clamp-2 h-auto md:w-[43rem] md:h-[3.563rem] text-[2rem] md:text-[2.75rem] font-[600]  leading-[2.604rem] text-start md:text-center md:leading-[3.581rem]">Things to do in <span className="text-[#007DBC]  font-[600]">{data?.attributes?.Location?.destination}</span></div>
						<div className=" mt-[1rem] md:mt-[1rem] text-[#7A7A7A] text-start md:text-center font-[400] w-[90%] pr-6 line-clamp-5 break-words h-auto md:w-[37.5rem] md:h-[2.875rem] text-[1rem] md:text-[1.125rem] z-30  leading-[1.375rem] md:leading-[1.465rem]">Indulge in our carefully crafted packages to immerse you in the most captivating and transformative travel adventures.</div>
					</div>

					<ReelCards data={data} />
					<ReelCardsLarge data={data} />
					{/* <div className=''>
						{data?.attributes?.activities?.data.map((data) => {
							return (
								<div
									key={data.id}
									className='md:p-0'>
									<div className='h-[35vh] w-full' >
										<article className="relative h-full  flex justify-center px-4 pt-10 pb-6">
											<Image fill
												src={`${data?.attributes?.image?.data?.attributes.url}`}
												alt="Image" className="absolute rounded-xl inset-0 h-full w-full object-cover object-center" />
											<div className="absolute rounded-xl inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 text-start">
												<div className="h-7 m-2 flex justify-end">
													<div className="px-3 py-0.5 bg-black rounded-[100px] justify-center items-center gap-2 inline-flex text-end">
														<div className="text-white text-xs font-bold font-['DM-Sans'] leading-normal">
															{data?.attributes?.fullday === true ? "Full-day" : "Half-day"}
														</div>
													</div>
												</div>
												<div className='text-start m-2  absolute bottom-0'>
													<div className="self-stretch text-white text-md md:text-xl font-bold font-['DM-Sans']">
														{data?.attributes?.name}
													</div>
													<div className='flex justify-start gap-1'>
														<div>
															<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-[#DAECF5] size-2 md:size-4">
																<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
																<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
															</svg>

														</div>
														<div className="text-[#91c7e2] text-[13px] font-normal font-['DM-Sans'] leading-none md:leading-[21px]">
															{data?.attributes?.location.destination}
														</div>
													</div>
													<div className="text-white/70 text-[13px] font-normal font-['DM-Sans'] leading-none md:leading-[21px] my-1">
														{data?.attributes?.description}
													</div>
													{data?.attributes?.tags.map((data) =>
														<div key={data.id} className="md:h-7 h-4 px-1 md:px-3 pt-1 pb-4 md:py-1.5 mr-2 my-1 bg-[#91c7e2] rounded-[100px] gap-2 inline-flex">
															<div className="text-[#00111a] md:text-xs text-[8px] font-normal font-['DM-Sans']"> {data.Title}
															</div>
														</div>
													)}
												</div>
											</div>
										</article>
									</div>
								</div>
							)
						}
						)}
					</div> */}
				</div>
			</div >

			{/*Testimonials*/}
			<TestimonialMobile data={data} />
			<Testimonials data={data} />


			{/* True belief */}
			{/* <div className='my-2 flex flex-col md:flex-row justify-center bg-white w-full px-6 md:px-16 md:my-8 md:gap-8 items-center'>
				<div className='flex flex-col md:flex-row items-center md:justify-start'>
					<div className='flex w-full flex-col flex-wrap items-center justify-center md:w-auto'>
						<div className='z-50 m-2 flex flex-col flex-wrap items-start justify-center text-4xl sm:text-5xl md:text-6xl md:w-[70%]'>
							<p className='font-["DM_Sans"] flex-row gap-4 w-full'>
								Our true
								<span className='italic text-[#005986] ml-2'>
									beliefs
								</span>
							</p>
							<p className='font-["DM_Sans"] flex gap-4 w-full'>
								for
								<span className='italic text-[#005986]'>
									your
								</span>
								benefits
							</p>
							<div className='description overflow-hidden mt-4 text-base text-gray-500 md:mt-6  font-["DM_Sans"] text-justify'>
								Our beliefs aren&apos;t just words; they are the foundation of
								every adventure we offer. With high commitment to
								sustainability, authenticity, and customer-centricity, we
								ensure that every trip you take with us is valuable.
							</div>
						</div>
						<div className=' last flex justify-start'>
							<Image
								src='/assets/campaign/travel.png'
								width={400}
								height={400}
								alt='image'
								className='mt-2 hidden rounded-2xl lg:block'
							/>
						</div>
					</div>
					<Image
						src='/assets/campaign/travel.png'
						width={250}
						height={250}
						alt='image'
						className='w-[65%] rounded-2xl lg:hidden'
					/>

				</div>

				<div className='md:flex grid grid-cols-2  w-full h-full md:flex-col md:items-start md:justify-center gap-2 md:gap-4'>
					<div className='accord flex h-[80px] lg:h-[100px] items-center md:justify-center justify-start gap-2 md:gap-4 rounded-3xl border border-sky-800 px-2 py-2 w-full md:w-[520px] md:px-6 md:py-16'>
						<div className='rounded-full  flex justify-center border border-sky-800 p-2 lg:p-4'>
							<Image
								src='/assets/campaign/user.png'
								width={50}
								height={50}
								alt='image'
								className='w-full'
							/>
						</div>
						<div className='flex flex-col flex-wrap'>
							<p className='font-bold text-xs md:text-lg'>Customer centric</p>
							<p className='hidden md:block'>
								Being customer-centric is the compass that guides our travel
								services. We prioritize our customer&apos;s needs.
							</p>
						</div>
					</div>

					<div className='accord flex h-[80px] lg:h-[100px] items-center  justify-start gap-2 md:gap-4 rounded-3xl border border-sky-800 px-2 py-2 md:h-[100px] w-full md:w-[520px] md:px-6 md:py-16'>
						<div className='rounded-full flex justify-center border border-sky-800 p-3 lg:p-4'>
							<Image
								src='/assets/campaign/leaf.png'
								width={50}
								height={50}
								alt='image'
								className='w-full'
							/>
						</div>
						<div className='flex flex-col flex-wrap'>
							<p className='font-bold text-xs md:text-lg'>Sustainable Travel</p>
							<p className='hidden md:block'>
								Committed to responsible and eco-conscious journeys, traveling
								the world with minimal footprints and pollutions.
							</p>
						</div>
					</div>

					<div className='accord flex h-[80px] lg:h-[100px] items-center  justify-start gap-2 md:gap-4 rounded-3xl border border-sky-800 px-2 py-2 md:h-[100px] w-full md:w-[520px] md:px-6 md:py-16'>
						<div className='rounded-full border flex justify-center border-sky-800 p-3 lg:p-4'>
							<Image
								src='/assets/campaign/aero.png'
								width={50}
								height={50}
								alt='image'
								className='w-full'
							/>
						</div>
						<div className='flex flex-col flex-wrap'>
							<p className='font-bold text-xs md:text-lg'>Authentic Experiences</p>
							<p className='hidden md:block'>
								We deliver journeys that immerse you in unforgettable
								encounter with the world&apos;s diverse cultures & landscapes.
							</p>
						</div>
					</div>

					<div className='accord flex h-[80px] lg:h-[100px] items-center  justify-start gap-2 md:gap-4 rounded-3xl border border-sky-800 px-2 py-2 md:h-[100px] w-full md:w-[520px] md:px-6 md:py-16'>
						<div className='rounded-full border flex justify-center border-sky-800 p-2 lg:p-4'>
							<Image
								src='/assets/campaign/star.png'
								width={50}
								height={50}
								alt='image'
								className='w-[90%]'
							/>
						</div>
						<div className='flex flex-col flex-wrap'>
							<p className='font-bold text-xs md:text-lg'>Quality Guides</p>
							<p className='hidden md:block'>
								Every journey will be led by knowledgeable, passionate experts
								who enhance your travel experience.
							</p>
						</div>
					</div>
				</div>
			</div > */}

			{/* gallery */}
			< div className='min-h-screen hidden' >
				<div className='m-4 flex flex-wrap justify-center gap-4 px-3 py-2 md:mx-16 md:gap-4 md:px-16 md:py-8 '>
					<div className='flex flex-wrap justify-center gap-2 md:gap-4'>
						{data?.attributes.gallery1.data.slice(0, 3).map((element: any) => {
							return (
								<Image
									key={element.id}
									src={element.attributes.url}
									width={500}
									height={500}
									alt='Fall'
									className={
										data?.attributes?.gallery1.data.indexOf(element) === 0
											? "h-[20vh] w-full rounded-3xl lg:h-[30vh]  xl:h-[40vh] xl:w-[48%] shadow-lg shadow-slate-500 "
											: "h-[20vh] w-[48%] rounded-3xl lg:h-[30vh] xl:h-[40vh] xl:w-[24%] shadow-lg shadow-slate-500"
									}
								/>
							);
						})}
					</div>
					<div className='flex flex-wrap justify-center gap-2 md:gap-4'>
						{data?.attributes.gallery2?.data?.slice(0, 3).map((element: any) => {
							return (
								<Image
									key={element.id}
									src={element.attributes.url}
									width={500}
									height={500}
									alt='Fall'
									className={
										data?.attributes?.gallery2.data.indexOf(element) === 2
											? "h-[20vh] w-full rounded-3xl lg:h-[30vh] xl:h-[40vh] xl:w-[48%] shadow-lg shadow-slate-500"
											: "h-[20vh] w-[48%] rounded-3xl lg:h-[30vh] xl:h-[40vh] xl:w-[24%] shadow-lg shadow-slate-500"
									}
								/>
							);
						})}
					</div>
				</div>
			</div>

			{/* Get-a-quote-banner */}
			{/* <section className="my-12 md:my-20 hidden sm:block">
				<Link href="#form2" >
					<div className='relative group mx-auto h-40 sm:h-60 md:h-[16rem] lg:h-[16rem] xl:h-[20rem] w-full aspect-w-16 aspect-h-9 object-contain my-8' >
						<Image
							className='object-cover object-center w-full h-full transition-all group-hover:opacity-90 duration-300 ease-in-out'
							src="/assets/campaign/landpage-banner.jpg" alt='' fill />
					</div>
				</Link>
			</section> */}

			{/* <section className='my-12 md:my-20 sm:hidden h-full w-full overflow-scroll'>
				<Link href="#form2">
					<Image
						src="/assets/campaign/banner-mobile.jpg"
						height={100}
						width={100}
						alt="background"
						className="w-full h-full object-cover"
					/>
				</Link>
			</section> */}

			{/* Gallery by travellers */}

			< div className='mt-[40px] md:mt-[4.375rem] px-[20px] md:px-[100px]' >
				<div className=' flex items-center justify-start md:justify-center mb-[1.5rem]  md:mb-[60px]  '>
					<div className='w-[320px] flex-wrap md:w-full justify-start md:justify-center h-auto md:h-auto text-[2rem] flex font-[600] md:text-[2.75rem] leading-[2.604rem] md:leading-[3.581rem] '>
						<span>Gallery by&nbsp;</span><span className="text-[#007DBC]">Travelers</span>
					</div>
				</div>

				<div className=' w-full flex flex-col md:flex-row justify-between items-center gap-[1rem] md:gap-[32px]'>
					<div className='w-[100%] h-[40vh]  md:w-[50%] md:h-[80vh] justify-center gap-2 md:gap-4'>
						{data?.attributes.gallery2.data.slice(1, 2).map((element: any) => {
							return (
								<Image
									key={element.id}
									src={element.attributes.url}
									width={500}
									height={500}
									alt='Fall'
									className=

									"h-full w-full rounded-[12px]"

								/>
							);
						})}
					</div>
					<div className='grid grid-cols-2  w-[100%] h-[40vh] md:w-[50%] md:h-[80vh]  gap-[1rem] md:gap-[32px]'>
						{data?.attributes.gallery1?.data?.slice(1, 4).map((element: any) => {
							return (
								<Image
									key={element.id}
									src={element.attributes.url}
									width={500}
									height={500}
									alt='Fall'
									className="h-full w-full rounded-[12px]"
								/>
							);
						})}
						{data?.attributes.gallery2?.data?.slice(1, 4).map((element: any) => {
							return (
								<Image
									key={element.id}
									src={element.attributes.url}
									width={500}
									height={500}
									alt='Fall'
									className="h-full w-full  rounded-[12px]"
								/>
							);
						})}
					</div>

				</div>
			</div >
			{/* FOOTER FORM  */}
			<div
				className=' relative px-[20px]  md:px-[100px] mt-[40px] md:mt-[100px] bg-bottom flex w-full bg-cover bg-no-repeat flex-col items-center  lg:gap-4'
			>
				<Image
					className='w-full opacity-70 object-cover'
					src="/assets/Banners/footerImage.svg" alt='No Photo' fill />
				<div className=' absolute left-0 top-0 w-full  bg-white bg-opacity-30 bg-no-repeat h-full'></div>
				<div className='w-full md:w-[60%] mt-[40px] md:mt-[6.25rem] md:justify-center justify-start flex-wrap relative text-[2rem] flex font-[600] md:text-[2.75rem] leading-[2.604rem] md:leading-[3.581rem] '>

					<div className=" ">Ready to&nbsp;<span className="text-[#007DBC] ">embark&nbsp;</span>on</div>
					<div className="">a <span className="text-[#007DBC] ">new journey ?</span> </div>

				</div>
				{/* <div id='form2' className='relative mt-[1rem] w-full sm:w-72 md:w-[80%] flex flex-wrap leading-[1.465rem] text-[#7A7A7A] text-[1rem] md:text-[1.125rem] md:text-center font-[400] text-start'>
					Don&apos;t let your dream getaway remain a dream any longer. Take action now and let us craft your next unforgettable adventure. Join us in turning your travel  fantasies into unforgettable realities.
				</div> */}
				{/* <div className='mt-8 flex justify-center md:mt-0 z-10 px-6 p-10'>

				</div> */}
				<div className="md:mt-[3.75rem] mt-[1.5rem] md:mb-[6.25rem] mb-[2.5rem]"><CampaignForm destination={data?.attributes.Location.destination} destinationSlug={data?.attributes.slug} />

				</div>


			</div >
			<Footer />
		</div >
	);
};

export default Page;



