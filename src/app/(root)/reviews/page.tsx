
import React from 'react'
import dynamic from 'next/dynamic';
import NavBar from "@/components/nav-bar";
import ScrollButton from '@/components/scroll-button';
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Reviews",
	description:"Read authentic reviews from customers who’ve experienced unforgettable trips with Capture a Trip. See why we're a top choice for tours and activities worldwide.",
	alternates: {
		canonical: '/reviews',
	},
};

const Reviews = dynamic(() => import('@/components/reviews'), {
	loading: () => <p>Loading...</p>,
	ssr: false,
})

// import { ElfsightWidget } from 'next-elfsight-widget';

const page = () => {
	return (
		<>
			<div className='mt-[-60%] md:mt-[-30%] lg:mt-[-15%] flex flex-col items-center gap-36 !pt-0 pb-32'>
				{/* src={"/assets/images/img-about-us.jpg"} */}

				<div className='h-[100vh] flex justify-center items-center w-full bg-cover bg-fixed text-white font-bold uppercase text-3xl md:text-6xl relative z-20' style={{ backgroundImage: `url(/assets/images/reviews-img.jpg)` }}>
					<div className='z-30 mt-[235px] text-center'>
						Checkout Our Reviews
					</div>
					<div className='absolute left-0 top-0 z-10 h-full w-full bg-black/40'></div>
				</div>
				<div className='px-8 md:px-4 flex items-center justify-center'>
					<Reviews />
				</div>
			</div>
		</>
	)
}

export default page
