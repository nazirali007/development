"use client"
import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel"

const TestimonyCarousel = () => {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
		// api.
	}, [api])
	// console.log('embla api', api?.scrollNext())

	return (
		<div className="mx-auto max-w-xs border border-red-400">
			<Carousel opts={{
				loop: true,
			}} setApi={setApi} className="w-full max-w-xs border border-blue-400">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index: number) => (
						<CarouselItem key={index} className='border-red-400'>
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-0 gap-2 bg-red-300 ">
									<div className="text-4xl font-semibold border w-4/5 h-full">{index + 1}</div>
									<div className='flex flex-col h-full border w-1/5'>
										<div className='flex items-center border h-1/3'>{index + 2}</div>
										<div className='flex items-center border h-1/3'>{index + 3}</div>
										<div className='flex items-center border h-1/3'>{index + 4}</div>
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="py-2 text-center text-sm text-muted-foreground">
				Slide {current} of {count}
			</div>
		</div>
	)
}

export default TestimonyCarousel



