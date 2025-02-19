// Import required dependencies
"use client"
import React, { useState, ReactNode } from 'react'
import showdown from "showdown";
import {
	Dialog,
	DialogContent,
	// DialogHeader,
	// DialogTitle,
	DialogTrigger
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

// Assuming tripdescription is a string or JSX content
const AboutUs = ({ tripdescription, smalldescription, title }: { tripdescription: string | JSX.Element, smalldescription?: string, title?: string }) => {
	const [show, setShow] = useState(false);
	const converter = new showdown.Converter();
	return (
		// <Dialog>
		// 	<div>
		// 		<div className="max-h-[30vh] w-full overflow-hidden">
		// 			{smalldescription ? (
		// 				<p className="text-sm sm:text-base font-normal leading-normal">{smalldescription}</p>
		// 			) : <div dangerouslySetInnerHTML={{ __html: tripdescription }} />
		// 			}
		// 		</div>
		// 		<DialogTrigger className="flex justify-end font-semibold text-primaryMain hover:text-primaryLight cursor-pointer">Read More</DialogTrigger>
		// 	</div>
		// 	<DialogContent className='h-[70vh] w-full sm:max-w-[65vw] md:max-w-[80vh] bg-white'>
		// 		<ScrollArea className='pr-6 w-full'>
		// 			{/* <DialogHeader className='h-fit border-b-gray-300 pb-1'>
		// 				<DialogTitle className='text-xl sm:text-4xl md:text-5xl font-bold'>About the Trip</DialogTitle>
		// 			</DialogHeader> */}
		// 			<article className='font-normal'><div className="article !text-sm" dangerouslySetInnerHTML={{ __html: tripdescription }} /></article>
		// 		</ScrollArea>
		// 	</DialogContent>
		// </Dialog>
		<div className="flex w-full h-full flex-col gap-2 border border-black/80 px-4 pt-4 pb-1 md:pb-2 rounded-xl shadow-md justify-between">
			<div className=''>
				<h2 className="text-xl font-bold text-black/80 md:text-3xl">
					{title ? title : 'About the trip'}
				</h2>
				<span className="text-sm pb-1 cursor-pointer font-semibold text-primaryLight hover:text-primaryDark transition-colors delay-150"
					onClick={() => setShow(!show)}
				>
					Read {show ? "Less" : "More"}
				</span>
				{/* <h2 className=" text-transparent w-1 h-1">{`Book ${heading} at Best Price`}</h2> */}
			</div>
			<div className="inline-block "><article className={` font-normal leading-normal overflow-hidden article transition-[max-height] duration-300 ease-in-out ${show ? "max-h-[100%]" : "max-h-[50vh]"}`}>
				{/* `${show ? "max-h-full" : "max-h-[10vh]"} border` */}
				<div
					dangerouslySetInnerHTML={{ __html: converter.makeHtml(tripdescription as string) }}
				>
				</div>
			</article>
			</div>
		</div>

		// <div className=' flex flex-col px-2 md:px-4 pl:32 lg:px-0 py-10 md:py-16 border items-center justify-center'>
		// 	<div className="flex w-[90vw] md:w-[70vw] flex-col gap-2 border border-black/80 px-4 pt-4 pb-1 md:pb-2 rounded-xl shadow-md">
		// 		<div className='flex flex-col md:flex-row gap-1 md:items-end md:gap-2 justify-between'>
		// 			<h2 className="text-3xl font-bold text-black/80 md:text-4xl lg:text-5xl">
		// 				About the trip
		// 			</h2>
		// 			<div className="text-sm pb-1 cursor-pointer font-semibold text-primaryLight hover:text-primaryDark transition-colors delay-150"
		// 				onClick={() => setShow(!show)}
		// 			>
		// 				Show {show ? "Less" : "More"}
		// 			</div>
		// 			{/* <h2 className=" text-transparent w-1 h-1">{`Book ${heading} at Best Price`}</h2> */}
		// 		</div>
		// 		<div className="inline-block"><article className={`font-normal leading-normal overflow-hidden article transition-[max-height] duration-300 ease-in-out ${show ? "max-h-[100%]" : "max-h-[30vh]"}`}>
		// 			{/* `${show ? "max-h-full" : "max-h-[10vh]"} border` */}
		// 			<div
		// 				dangerouslySetInnerHTML={{ __html: converter.makeHtml(tripdescription) }}
		// 			>
		// 			</div>
		// 		</article>
		// 		</div>
		// 	</div>
		// 	{/* <div className='h-[70vh] w-full sm:max-w-[65vw] bg-white'>
		// 		<div className='pr-6'>
		// 			<div className='h-fit border-b-gray-300 pb-1'>
		// 				<div className='text-xl sm:text-4xl'>{`Book ${heading} at Best Price`}</div>
		// 			</div>
		// 			<article>
		// 				<div className="article font-normal leading-normal" dangerouslySetInnerHTML={{ __html: description }} /></article>
		// 		</div>
		// 	</div> */}
		// </div>

	);
};

export default AboutUs;
