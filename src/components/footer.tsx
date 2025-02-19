import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/assets/icons";
import { Blogs } from "@/server/db/blogs/list-blog";
import Socials from "./reusable/socials";
import { LINKTREE_LINK } from "@/server/db/static/variables";
import { ScrollToTopButton } from "./scroll-button";
import { MapPin } from 'lucide-react';
import { CAT_OFFICE_ADDRESS } from "@/server/db/static/variables";

export default async function Footer() {
	const recentPost = Blogs.sort(
		(a, b) => b.createdAt.getTime() - a.createdAt.getTime()
	).slice(0, 10);
	const quickLinks = [
		{ label: "Blogs", href: "/travel-blogs", },
		{ label: "Disclaimer", href: "/disclaimer" },
		{ label: "Privacy Policy", href: "/privacy-policy" },
		{ label: "Cancellation policy", href: "/cancellation" },
		{ label: "Terms & Conditions", href: "/terms-and-conditions" },
		{ label: "Write for Us", href: "/travel-write-for-us" },
		{ label: "About Us", href: "/about-us" },
		{ label: "Linktree", href: LINKTREE_LINK, taget: true },
	];
	return (
		<>
			<footer className='pb-6 mt-24 md:mt-[116px] pt-5 md:pt-0 flex h-full flex-col items-center gap-4 shadow-sm'>
				<div className='mx-auto flex h-full max-w-[1400px] flex-col items-center gap-0'>
					<div className='relative -top-8 h-20 w-20 md:h-36 md:w-36 rounded-full'>
						<Image
							src={"/assets/images/circle-logo-2.png"}
							priority
							alt='CAT Logo'
							fill
							className='rounded-full object-cover'
							blurDataURL='/assets/249.jpg'
							quality={75}
							placeholder='blur'
						/>
					</div>
					{/* Socials Link */}
					<Socials />
					<div className='mt-[60px] grid gap-x-4 gap-y-4 px-6 text-sm leading-[1.8] sm:gap-y-8 md:gap-x-12 lg:grid-cols-4 lg:gap-x-16'>
						<div className='flex flex-col gap-2'>
							<h2 className='text-base md:text-lg font-semibold'>About Us</h2>
							<p className='text-justify sm:max-w-[80%] md:max-w-[70%] lg:max-w-full text-xs sm:text-sm lg:text-base'>
								<span
									className='text-sm md:text-lg font-medium'
								>
									{`S`}
								</span>
								{`tep into a world of adventure with Capture A Trip, where every journey is an opportunity to connect, explore, and discover. For over 6 years, we've been curating unforgettable travel experiences that bring people together and fulfill their wanderlust.... `}
								<Link
									href={"/about-us"}
									className='text-primaryMain inline-block underline-offset-2 hover:underline'
								>
									{`View More`}
								</Link>
							</p>
						</div>
						<div className='flex flex-col gap-2'>
							<h2 className='text-base md:text-lg  font-semibold'>Travel Blogs</h2>
							<div className='flex flex-col gap-y-0.5 md:gap-y-1 text-xs sm:text-sm lg:text-base'>
								{recentPost.map((post) => (
									<Link
										key={post.blogslug}
										href={`/blog/${post.blogslug}`}
										target="_blank"
										className='hover:text-primaryMain h-fit w-fit underline-offset-1 transition-all duration-200 ease-in-out flex flex-row items-start text-xs sm:text-sm lg:text-base'
									>
										{/* {post.blogname} */}
										<span className='bold md:text-base lg:text-lg pr-1 text-primaryLight'>
											#
										</span>
										{post.blogname}
									</Link>
								))}
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<h2 className='text-base md:text-lg font-semibold'>Quick Links</h2>
							<div className='flex flex-col gap-y-0.5 md:gap-y-1 text-xs sm:text-sm lg:text-base'>
								{quickLinks.map((data, index) => (
									<Link
										key={index}
										href={data.href}
										target={data.taget ? "_blank" : ""}
										className='hover:text-primaryMain w-fit underline-offset-1 transition-all duration-200 ease-in-out text-xs sm:text-sm lg:text-base'
									>
										{/* {data.label} */}
										<span className='bold'>{data.label.charAt(0)}</span>

										{data.label.slice(1)}
									</Link>
								))}
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<h2 className='text-base md:text-lg font-semibold'>Address</h2>
							<div className='flex flex-col text-xs sm:text-sm lg:text-base'>
								<h3 className='text-sm md:text-base font-semibold'>Capture a Trip India Pvt Ltd - Delhi</h3>
								<p>1473-G NN-1/9619, Bramh Gali, West Rohtash Nagar, Shahdara, New Delhi -110032</p>
								<p className='mt-2'>Mobile: +91-8287636079 / 8076760552</p>
							</div>
							<div className='flex flex-col text-xs sm:text-sm lg:text-base md:mt-4'>
								<h3 className='text-sm md:text-base font-semibold'>CaptureaTrip India Pvt Ltd - Faridabad</h3>
								<Link
									href={CAT_OFFICE_ADDRESS}
									target='_blank'
									className='hover:text-primaryMain my-1 border flex flex-row bg-slate-100 px-1 py-0.5 rounded-lg hover:underline gap-1 items-center w-fit text-xs sm:text-sm'
								>
									<MapPin className="size-4" /> <span>View on Map</span>
								</Link>
								<p>Office No 304, 3rd floor, SRS Tower, Sector-31, Near Mewla Maharajpur Metro Station,Faridabad, Haryana 121003, India</p>
								<p className='mt-2'>{`Mobile: +91-8368653222`}</p>
							</div>
						</div>
					</div>
					<div className='mx-auto flex w-full flex-col items-center mt-8 gap-4 bg-zinc-100 px-4 py-6 shadow-sm sm:w-[98%] sm:rounded-md md:px-24 md:py-12 lg:flex-row lg:p-6'>
						<div className='text-primaryMain text-center text-sm font-bold'>
							<p className='max-w-[90%] flex-wrap text-center text-xs sm:max-w-full sm:text-sm'>
								© 2016 - {new Date().getFullYear()} Capture A Trip India Pvt Ltd. All
								rights reserved
							</p>
						</div>
						<div className='flex max-w-[90%] flex-wrap gap-x-1 sm:max-w-full sm:items-center'>
							<div className='relative h-7 w-7'>
								<Icons.img73 className='absolute h-full w-full' />
							</div>
							<div className='relative h-7 w-7'>
								<Icons.img74 className='absolute h-full w-full' />
							</div>
							<div className='relative h-7 w-7'>
								<Icons.img75 className='absolute h-full w-full' />
							</div>
							<div className='relative h-7 w-7'>
								<Image
									src={"/assets/images/bhim.svg"}
									alt=''
									fill
									placeholder='blur'
									blurDataURL='/assets/249.jpg'
									quality={50}
								/>
							</div>
							<div className='relative h-7 w-7'>
								<Icons.img77 className='absolute h-full w-full' />
							</div>
							<div className='relative h-7 w-7'>
								<Image
									src={"/assets/images/jio.svg"}
									alt=''
									fill
									placeholder='blur'
									blurDataURL='/assets/249.jpg'
									quality={50}
								/>
							</div>
							<div className='relative h-7 w-7'>
								<Image
									src={"/assets/images/rupay.svg"}
									alt=''
									fill
									placeholder='blur'
									blurDataURL='/assets/249.jpg'
									quality={50}
								/>
							</div>
							<div className='relative h-7 w-7'>
								<Image
									src={"/assets/images/my-airtel.svg"}
									alt=''
									fill
									placeholder='blur'
									blurDataURL='/assets/249.jpg'
									quality={50}
								/>
							</div>
							<div className='relative h-7 w-7'>
								<Icons.img81 className='absolute h-full w-full' />
							</div>
							<div className='relative h-7 w-7'>
								<Image
									src={"/assets/images/cash.svg"}
									alt=''
									fill
									placeholder='blur'
									blurDataURL='/assets/249.jpg'
									quality={50}
								/>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div
				className="relative max-w-[1400px] gap-1 mt-2 p-2 mx-auto flex w-full justify-end items-center px-4 md:px-24 lg:px-6"
			>
				<ScrollToTopButton className="" />
			</div>
		</>
	);
}
