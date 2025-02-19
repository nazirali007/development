"use client";
import React, { useState } from "react";
import classNames from 'classnames'
import { cn } from "@/lib/utils";

export default function InclusionExclusion({ inclusion, exclusion }: { inclusion: any, exclusion: any }) {

	const [isInclusion, setIsInclusion] = useState(true);

	const handleClick = (flag: boolean) => {
		setIsInclusion(flag);
	};

	return (
		<div className="flex flex-col gap-8 ">
			<div className="flex w-full text-xl font-bold text-black/80 md:text-4xl text-center">
				<div className={classNames({ "basis-1/2 py-4 ": true, " bg-zinc-300 cursor-pointer hover:bg-zinc-300/70 transition-colors delay-150": isInclusion })} onClick={() => handleClick(true)}>Inclusion</div>
				<div className={classNames({ "cursor-pointer basis-1/2 py-4 ": true, "bg-zinc-300 cursor-pointer hover:bg-zinc-300/70": !isInclusion })} onClick={() => handleClick(false)}>Exclusion</div>
			</div>
			<div className={cn("md:min-h-[50vh] font-normal leading-normal px-2 py-4 flex justify-start", inclusion ? 'px-2 lg:pl-10' : '')}>
				<article className='font-normal leading-normal w-full'>
					{isInclusion ?
						<div className='itinerary' dangerouslySetInnerHTML={{ __html: inclusion }} /> : <div className='itinerary' dangerouslySetInnerHTML={{ __html: exclusion }} />
					}
				</article>
			</div>
		</div>
	);
}
