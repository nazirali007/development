"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
	Sheet,
	SheetClose,
	CustomSheetContent,
	SheetTrigger,
	SheetCloseButton,
} from "./ui/sheet";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useAnimation } from "framer-motion"; //

interface NavBarProps {
	phone?: string;
}

export default function NavBar({ phone }: NavBarProps) {
	const [activeNav, setActiveNav] = useState(false); // Initial logo width
	const [searchBoxFlag, setSearchBoxFlag] = useState(false); // Initial logo width
	const path = usePathname();
	const controls = useAnimation();
	const scrollThreshold = 50; // Adjust this value as needed
	// Function to handle scroll event
	const handleScroll = () => {
		if (window.scrollY > scrollThreshold) {
			setActiveNav(true); // Change logo width when scrolled down
		} else {
			setActiveNav(false); // Reset logo width when scrolled back up
		}
		if (window.scrollY > 400) {
			setSearchBoxFlag(true); // Change logo width when scrolled down
		} else {
			setSearchBoxFlag(false); // Reset logo width when scrolled back up
		}
	};


	// Add scroll event listener when component mounts
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			// Remove scroll event listener when component unmounts
			window.removeEventListener("scroll", handleScroll);
		};
	}, [activeNav]);

	const navRoutes = [
		{
			label: "Home",
			href: "/",
			active: path === "/",
		},
		{
			label: "International Trips",
			href: "/international-tour-packages",
			active: path === "/international-tour-packages",
			sublinks: [
				{
					label: "Vietnam",
					href: "/vietnam-tour-package",
					active: path === "/vietnam-tour-package",
				},
				{
					label: "Thailand",
					href: "/thailand-tour-packages",
					active: path === "/thailand-tour-packages",
				},
				{
					label: "Dubai",
					href: "/dubai-tour-package",
					active: path === "/dubai-tour-package",
				},
				{
					label: "Bali",
					href: "/bali-tour-packages",
					active: path === "/bali-tour-packages",
				},
				{
					label: "Russia",
					href: "/russia-tour-packages",
					active: path === "/russia-tour-packages",
				},
				{
					label: "Maldives",
					href: "/maldives-tour-package",
					active: path === "/maldives-tour-package",
				},
				{
					label: "Nepal",
					href: "/nepal-tour-package",
					active: path === "/nepal-tour-package",
				},
				{
					label: "Singapore",
					href: "/singapore-tour-package",
					active: path === "/singapore-tour-package",
				},
				{
					label: "Almaty",
					href: "/almaty-tour-package",
					active: path === "/almaty-tour-package",
				},
				{
					label: "Baku",
					href: "/baku-tour-packages",
					active: path === "/baku-tour-packages",
				},
			],
		},
		{
			label: "Domestic Trips",
			href: "/domestic",
			active: path === "/domestic",
			sublinks: [
				{
					label: "Himachal",
					href: "/himachal-tour-packages",
					active: path === "/himachal-tour-packages",
				},
				{
					label: "Uttarakhand",
					href: "/uttarakhand-tour-packages",
					active: path === "/uttarakhand-tour-packages",
				},
				{
					label: "Meghalaya",
					href: "/meghalaya-tour-package",
					active: path === "/meghalaya-tour-package",
				},
				{
					label: "kerala",
					href: "/kerala-tour-package",
					active: path === "/kerala-tour-package",
				},
				{
					label: "Kedarkantha",
					href: "/trip/kedarkantha-trek-packages",
					active: path === "/trip/kedarkantha-trek-packages",
				},
				{
					label: "Spiti",
					href: "/spiti-valley",
					active: path === "/spiti-valley",
				},
				{
					label: "Ladakh",
					href: "/leh-ladakh-tour-packages",
					active: path === "/leh-ladakh-tour-packages",
				},
				{
					label: "Andaman",
					href: "/andaman-tour-packages",
					active: path === "/andaman-tour-packages",
				},
				{
					label: "Kashmir",
					href: "/kashmir-tour-package",
					active: path === "/kashmir-tour-package",
				},
				{
					label: "Rajasthan",
					href: "/rajasthan-tour-package",
					active: path === "/rajasthan-tour-package",
				},
			],
		},
		{
			label: "Weekend Trips",
			href: "/weekend-trip-from-delhi",
			active: path === "/weekend-trip-from-delhi",
		},
		{
			label: "Upcoming Trips",
			href: "/upcoming-trips",
			active: path === "/upcoming-trips",
		},
		// {
		// 	label: "Visa",
		// 	href: "/visa",
		// 	active: path === "/visa",
		// },
		{
			label: "Blog",
			href: "/travel-blogs",
			active: path === "/travel-blogs",
		},
	];

	return (
		<>
			<motion.nav
				className={cn(
					"sticky top-2 inset-x-2 md:left-0 md:top-0 z-[999] h-fit w-[95vw] md:w-full py-2 px-4 md:py-2 rounded-lg md:rounded-none transition-all ease-in-out duration-300",
					activeNav ? " bg-primaryMain backdrop-blur-sm md:bg-primaryMain shadow-lg transition-colors duration-200" : "bg-transparent"
				)}
				animate={{ backgroundColor: activeNav ? "rgb(0 125 188 / 1)" : "transparent" }} // Animate background color
			>
				<div className='flex h-full w-full items-stretch justify-between gap-2'>
					<div className='flex w-full lg:w-auto items-center justify-between lg:gap-16 xl:gap-10'>
						{/* Logo, Image and Phone */}
						<div className='flex w-full items-center justify-center md:justify-start sm:gap-4 xl:gap-6'>
							<Link
								href={"/"}
								className=''
							>
								<Image
									src='/assets/images/logomd.png'
									alt='logo'
									// fill
									height={60}
									width={60}
									className='sm:hidden'
									blurDataURL='/assets/249.jpg'
								// quality={50}
								/>
								<Image
									src={"/assets/images/logolg.png"}
									alt='logo'
									// fill
									height={50}
									width={160}
									className='hidden sm:block '
									blurDataURL='/assets/249.jpg'
								// quality={50}
								/>
							</Link>
							<div className='flex items-center justify-center text-sm w-full md:w-min'>
								{phone ? (
									<a
										href={`tel:${phone}`}
										className='flex w-max items-center gap-1 font-bold text-white'
									>
										<Phone className='mr-1 h-4 w-4' />
										{phone}
									</a>
								) : (
									<Link
										href={`tel:+918287636079`}
										className='flex items-center gap-2 w-max justify-center text-center font-bold text-white flex-row'
									>
										<Phone className='h-4 w-4' />
										{`(+91) 8287636079`}
									</Link>
								)}
							</div>
							{/* {searchBoxFlag && (
								<div className='hidden lg:block '>
									<NavSearchbox
									// iconClass='text-primaryMain'
									// innerfont='text-[0.9vw]'
									/>
								</div>
							)} */}
						</div>
						{/* Nav for Mobile view */}
						<MobileNavbar navRoutes={navRoutes} />
					</div>
					{/* <div className=" border border-blue-400"> */}
					{/* Nav for Desktop */}
					<ul className='hidden w-full items-center justify-between gap-3 font-semibold text-white lg:flex xl:gap-6 max-w-fit'>
						{navRoutes.map((route) => (
							<li
								key={route.href}
								className='flex h-10 items-center justify-start text-start'
							>
								{route.sublinks ? (
									<div className='group relative flex cursor-pointer items-center gap-1 transition-all duration-300 ease-in-out'>
										<Link href={route.href} className='flex flex-col gap-1'>
											{route.label}
											<span className='h-0.5 w-full origin-left scale-x-0 bg-white transition-all duration-300 ease-in-out' />
										</Link>
										<ChevronDown className='flex pb-0.5 group-hover:hidden' />{" "}
										<ChevronUp className='hidden pb-0.5 group-hover:flex' />{" "}
										<span className='absolute top-full hidden w-full flex-col justify-center rounded-sm bg-zinc-50 !px-1 !py-0.5 text-black duration-300 ease-in-out group-hover:flex md:gap-2 md:p-2'>
											{route.sublinks.map((sublink) => (
												<Link
													key={sublink.href}
													href={sublink.href}
													className={cn(
														"hover:text-primaryMain rounded-sm px-1 py-1 duration-300 ease-in-out hover:bg-zinc-100",
														sublink.active
															? "text-primaryMain bg-zinc-100 font-semibold shadow-sm hover:text-black"
															: ""
													)}
												>
													{sublink.label}
												</Link>
											))}
										</span>
									</div>
								) : (
									<Link href={route.href} className='group flex flex-col gap-1'>
										{route.label}
										<span className='h-0.5 w-full origin-left scale-x-0 bg-white transition-all duration-300 ease-in-out group-hover:scale-x-100' />
									</Link>
								)}
							</li>
						))}
					</ul>
					{/* </div> */}
				</div>
				{/* {
                    activeNav &&
                    <div className='bg-white border-2 border-primaryMain px-2 lg:hidden'>
                        <Searchbox />
                    </div>
                } */}
			</motion.nav>
		</>
	);
}

const MobileNavbar = ({ navRoutes }: any) => {
	return (
		<>
			<Sheet>
				<SheetTrigger asChild className='text-white lg:hidden h-16'>
					<Menu className='m-2 h-7 w-7 cursor-pointer text-zinc-100 hover:text-white' />
				</SheetTrigger>
				<CustomSheetContent side={"top"} className='bg-primaryMain backdrop-blur-sm z-[999] overflow-scroll border-b-primaryMain/50 rounded-bl-xl rounded-br-[5rem]'>
					<div
						className='flex items-center justify-between text-white'
					>
						<Link href='/'>
							<Image
								src='/assets/images/logomd.png'
								alt='logo'
								// fill
								height={50}
								width={50}
								className='flex items-center justify-center mx-auto'
								blurDataURL='/assets/249.jpg'
							// quality={50}
							/>
						</Link>
						<SheetCloseButton className='hover:rotate-12 duration-200 ease-in-out flex justify-center rounded-sm text-center items-center h-7 w-7 cursor-pointer text-white' />
					</div>
					<ul className='relative flex flex-col justify-center mt-2 text-lg font-semibold text-white'>
						{navRoutes.map((route: any) => (
							<li key={route.href} className='pb-4 group'>
								{route.sublinks ? (
									<Accordion type='single' collapsible>
										<AccordionItem value='item-1' className='border-none'>
											<div className='flex w-full items-center justify-between text-white'>
												<SheetClose asChild>
													<Link href={route.href} className="hover:text-primaryDark duration-300 ease-in-out">{route.label}</Link>
												</SheetClose>
												<AccordionTrigger className='p-0'></AccordionTrigger>
											</div>
											<AccordionContent className='flex ml-6 flex-col gap-2 pt-2 text-base font-medium'>
												{route.sublinks.map((sublink: any) => (
													<SheetClose key={sublink.href} asChild>
														<Link
															key={sublink.href}
															href={sublink.href}
															className={cn(
																"hover:text-primaryDark font-light duration-300 ease-in-out",
																sublink.active
																	? "font-medium underline underline-offset-2 hover:text-black"
																	: ""
															)}
														>
															{sublink.label}
														</Link>
													</SheetClose>
												))}
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								) : (
									<SheetClose asChild>
										<Link href={route.href} className="hover:text-primaryDark duration-300 ease-in-out">{route.label}</Link>
									</SheetClose>
								)}
							</li>
						))}
					</ul>
				</CustomSheetContent>
			</Sheet>
		</>
	)
}