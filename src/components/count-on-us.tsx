import Image from "next/image";
import React from "react";

export default function CountOnUs() {
	const countOnUs = [
		{
			img: "img-58.png",
			heading: "Agent Free Model",
			para: "We at Capture A Trip believe in one-on-one communication with our travellers. We have  direct to consumer model where travellers deal with us with no agent involved.",
		},
		{
			img: "img-59.png",
			heading: "50% Women Travellers",
			para: "Our experienced trip leaders accompany all travel batches, enable the ease &amp; safety in traveling for all and especially women. We're proud to say that almost 50% of our travellers are women.",
		},
		{
			img: "img-60.png",
			heading: "Transparency with Travellers",
			para: "Our travel experts always provide authentic scenarios and never sugarcoat. Through this open communication channel we have built an honest and transparent relationship with our travellers.",
		},
		{
			img: "img-61.png",
			heading: "Tailored Companionship",
			para: "To ensure the agreement among the batch that everyone's able to enjoy, we filter travellers based on factors such as age groups, comfort of traveling with the opposite gender and much more.",
		},
	];

	return (
		<section className=' flex flex-col items-center gap-10 px-4 '>
			<h2 className='text-textColor px-5 md:px-10  font-[700] text-[1.5rem] md:text-[2.25rem]'>
				Reasons To Count On Us!
			</h2>
			<div className='mx-auto grid grid-cols-2 xl:grid-cols-4 w-full gap-3 md:gap-4 rounded-lg px-5 md:px-10 max-w-[1440px]'>
				{countOnUs.map((data, index) => (
					<CountOnUsCard key={index} data={data} />
				))}
			</div>
		</section>
	);
}

const CountOnUsCard = ({
	key,
	data,
}: {
	key: number;
	data: {
		img: string;
		heading: string;
		para: string;
	};
}) => {
	return (
		<>
			<div
				key={data.heading}
				className='bg-primaryMain/10 max-h-[300px] md:max-w-fit lg:max-w-full border-md durantion-300 relative my-1 flex cursor-pointer flex-col items-center justify-around overflow-hidden rounded-lg border border-zinc-200 p-2 shadow-sm transition-all hover:shadow-md basis-1/2 md:basis-1/4'
			>
				<div className='flex flex-col gap-4 text-center'>
					<p className='rouned-md h-full md:h-40 rounded-sm border-b border-zinc-200 px-1 py-4 text-[0.65rem] md:text-base leading-[1.5] text-gray-700'>
						{data.para}
					</p>
				</div>
				<div className='md:mt-4 flex flex-row gap-1 text-center'>
					<h2 className='p-2 text-sm md:text-xl font-semibold  text-gray-900'>
						{data.heading}
					</h2>
					<div className='bg-primaryMain/80 h-fit hidden md:block rounded-full p-2 md:p-6'>
						<div className='relative h-5 w-5 lg:h-14 lg:w-14'>
							<Image
								src={`/assets/images/${data.img}`}
								alt={data.heading}
								fill
								className='object-contain'
								blurDataURL='/assets/249.jpg'
								quality={50}
								loading="lazy"
							/>
						</div>
					</div>
				</div>

				{/* absolute patterns */}
				<div className='bg-primaryMain absolute -left-5 -top-5 flex h-10 w-10 flex-col items-center justify-center rounded-full opacity-50'></div>
			</div>
		</>
	);
};
