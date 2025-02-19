"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CustomCarouselPrevious,
	CustomCarouselNext,
} from "@/components/ui/carousel";
import MaxWidthContent from "@/components/max-width-content";
import Image from "next/image";
import { useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
{/* @ts-ignore */ }
import useKeypress from "react-use-keypress"; // @ts-ignore types are not available

const slideVariants = {
	hiddenRight: {
		x: "100%",
		opacity: 0,
	},
	hiddenLeft: {
		x: "-100%",
		opacity: 0,
	},
	visible: {
		x: "0",
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		transition: {
			duration: 0.5,
		},
	},
};

export default function ImageSlideShow({
	images,
}: {
	images: string[];
}) {
	const [selectedImage, setSelectedImage] = useState<
		| string
		| any
	>(null);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState<"right" | "left" | null>(null);

	const openImageDialog = (index: number) => {
		setSelectedImage(images[index]);
		setCurrentIndex(index);
	};

	const closeImageDialog = () => {
		setSelectedImage(null);
	};

	const handleNext = () => {
		if (selectedImage === null) return;
		setDirection("right");
		const nextIndex = currentIndex + 1 === images.length ? 0 : currentIndex + 1;
		setCurrentIndex(nextIndex);
		setSelectedImage(images[nextIndex]);
	};

	const handlePrevious = () => {
		if (selectedImage === null) return;
		setDirection("left");
		const previousIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(previousIndex);
		setSelectedImage(images[previousIndex]);
	};

	useKeypress("ArrowRight", handleNext);
	useKeypress("ArrowLeft", handlePrevious);
	useKeypress("Escape", closeImageDialog)

	const handlers = useSwipeable({
		onSwipedLeft: handleNext,
		onSwipedRight: handlePrevious,
		onSwipedDown: closeImageDialog,
		trackMouse: true,
	});
	return (
		<section className='flex w-full flex-col'>
			<MaxWidthContent className='w-full'>
				<Carousel
					className='relative'
					opts={{
						loop: true,
					}}
				>
					<CarouselContent>
						{images.map((image, index) => (
							<CarouselItem
								key={index}
								data-dialog-target='image-dialog'
								onClick={() => openImageDialog(index)}
								className='group relative mr-1 h-60 w-full basis-1/2 cursor-pointer overflow-hidden !rounded-lg sm:basis-1/3 md:mr-2 md:h-80 md:basis-1/3 lg:h-96 lg:basis-1/3 xl:basis-1/3'
							>
								<Image
									src={image}
									alt={image}
									fill
									className='relative h-60 w-full !rounded-lg object-cover opacity-90 transition-transform duration-300 ease-in-out hover:opacity-100 group-hover:scale-110 md:h-80 lg:h-96'
									blurDataURL='/assets/249.jpg'
									// quality={10}
									placeholder='blur'
									loading='eager'
								/>
								<div className='absolute inset-0 hidden items-center justify-center !rounded-lg bg-black bg-opacity-50 group-hover:flex'>
									<BsFullscreen size={24} className='text-white' />
								</div>
							</CarouselItem>
						)
						)}
					</CarouselContent>

					{/* Buttons */}
					<section className='hidden w-full items-center justify-end py-4 sm:flex'>
						<div className='relative flex h-16 w-full max-w-24 gap-4'>
							<CustomCarouselPrevious aria-label='Previous' />
							<CustomCarouselNext aria-label='Next' />
						</div>
					</section>
				</Carousel>
			</MaxWidthContent>

			{selectedImage && (
				<div
					data-dialog-backdrop='image-dialog'
					data-dialog-backdrop-close='true'
					className='min-w-screen fixed inset-0 z-[999] flex min-h-screen items-center justify-center bg-black bg-opacity-95'
				>
					<div {...handlers} className='relative mx-auto flex h-full max-h-[80vh] w-full items-center justify-center '>
						<AnimatePresence>
							<motion.div
								variants={slideVariants}
								transition={{ duration: 0.2 }}
								onClick={closeImageDialog}
							>
								<Image
									src={selectedImage}
									alt='image'
									fill
									style={{
										objectFit: 'contain'
									}}
									blurDataURL='/assets/249.jpg'
									// quality={10}
									placeholder='blur'
									className='relative cursor-pointer'
									loading='eager'
								/>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Dots */}
					<div className='absolute left-0 right-0 bottom-0 flex items-center justify-between p-4'>
						<button
							onClick={handlePrevious}
							className='rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 duration-150 transition ease-in-out p-2'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-chevron-left h-full w-full'
							>
								<path d='m15 18-6-6 6-6'></path>
							</svg>
							<span className='sr-only'>Previous slide</span>
						</button>

						<div className='flex gap-2 flex-col items-center justify-center'>
							<span
								className='text-white text-sm md:text-base xl:text-lg font-bold'
							>
								{selectedImage.index + 1} / {images.length}
							</span>
						</div>

						<button
							onClick={handleNext}
							className='rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 duration-150 transition ease-in-out p-2'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-chevron-right h-full w-full'
							>
								<path d='m9 18 6-6-6-6'></path>
							</svg>
							<span className='sr-only'>Next slide</span>
						</button>
					</div>
				</div>
			)}
		</section>
	);
}
