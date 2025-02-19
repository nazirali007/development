import Image from "next/image";
import React from "react";

export default function CountOnUsNeo() {
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
			heading: "Filtering Like Minded Travellers",
			para: "To ensure the agreement among the batch that everyone's able to enjoy, we filter travellers based on factors such as age groups, comfort of traveling with the opposite gender and much more.",
		},
	];

	return (
		<section className='flex flex-col items-center justify-center'>
			<div className="h-[45vh] w-[20vw] border flex flex-col rounded-xl relative justify-between gap-8 hover:scale-105 transition-all delay-150">
				<div className="h-[30%]">
					<Image
						src={`/assets/images/countonus/agentfree.png`}
						alt={"img"}
						fill
						placeholder='blur'
						className=' z-10 !h-[30%]'
						blurDataURL='/assets/249.jpg'
						quality={50}
					/>

				</div>
				<div className="bg-black/20 hover:bg-black/40 hover:backdrop-blur-sm absolute rounded-xl h-full w-full z-20 cursor-pointer">.</div>
				<div className="basis-1/2 pb-4 px-2 z-30 text-white ">
					<div className="text-3xl font-semibold drop-shadow-lg">{countOnUs[0].heading}</div>
					<div>{countOnUs[0].para}</div>
					<div></div>
				</div>
			</div>
		</section>
	);
}
