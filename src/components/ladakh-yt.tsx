"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CustomCarouselPrevious,
    CustomCarouselNext,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import MaxWidthContent from "@/components/max-width-content";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Icons } from "@/assets/icons";
import { title } from "process";

const videos = [
    {
        id: 1,
        image: "/pmuCdXnQl-8-HD.jpg",
        video:
            "https://www.youtube.com/embed/-4hUuWDZwZg?si=q9XYiWjiDeMNwVvb",
        title: "Bike ride to ladakh | Capture a Trip",
    },
    {
        id: 2,
        image: "/assets/images/img-63.jpg",
        video:
            "https://www.youtube.com/embed/pmuCdXnQl-8?si=f7Eg-LbQojsLDVoh",
        title: "Leh Ladakh with Capture a Trip | Ladakh Tour Package | Biking and Backpacking",
    },
    {
        id: 3,
        image: "/RQrWFzNgye8-HD.jpg",
        video:
            "https://www.youtube.com/embed/RQrWFzNgye8?si=MuoSF5rgZWbFkME4",
        title: "Experiences with Capture a Trip | Ladakh Tour Package",
    },

];

export default function LadakhYT() {
    const [video1, setVideo1] = useState<boolean>(false);
    const [video2, setVideo2] = useState<boolean>(false);
    const [video3, setVideo3] = useState<boolean>(false);
    // console.log('trips: ', trips.map(({ slug, bannerimageurl, bannerimagealttag, coverimageurl, coverimagealttag, itinerarypdfurl }) => ({ slug, bannerimageurl, bannerimagealttag, coverimageurl, coverimagealttag, itinerarypdfurl })));

    return (
        <section className='my-10 flex w-full flex-col gap-8 px-4'>
            <div>
                <h2 className='text-center text-3xl font-bold uppercase text-textColor sm:text-4xl'>
                    The Reality Of A Trip
                </h2>
                <p className='text-center text-gray-500'>
                    Testimonials, Reviews, Experiences, Virtual Tours & Much More
                </p>
            </div>
            <MaxWidthContent className='w-full rounded-lg'>
                <Carousel className='relative rounded-lg'
                    opts={{
                        align: 'start',
                    }}
                >
                    <CarouselContent className='rounded-lg gap-x-2 sm:gap-x-4'>
                        <CarouselItem className='shadow-2x1 group relative h-80 w-full cursor-pointer overflow-hidden rounded-lg sm:h-72 sm:w-full sm:basis-1/2 md:h-72 md:w-full lg:w-full lg:basis-1/3'>
                            <div
                                className='shadow-2x1 relative h-full w-full rounded-lg transition-opacity duration-300 group-hover:opacity-90'
                                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                                    setVideo1(true)
                                }
                            >
                                {video1 ? (
                                    <ItemVideo src={videos[0].video} />
                                ) : (
                                    <ItemImage src={videos[0].image} title={videos[0].title} alt='image' />
                                )}
                            </div>
                        </CarouselItem>
                        <CarouselItem className='shadow-2x1 group relative h-80 w-full cursor-pointer overflow-hidden rounded-lg sm:h-72 sm:w-full sm:basis-1/2 md:h-72 md:w-full lg:w-full lg:basis-1/3'>
                            <div
                                className='shadow-2x1 relative h-full w-full rounded-lg transition-opacity duration-300 group-hover:opacity-90'
                                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                                    setVideo2(true)
                                }
                            >
                                {video2 ? (
                                    <ItemVideo src={videos[1].video} />
                                ) : (
                                    <ItemImage src={videos[1].image} title={videos[1].title} alt='image' />
                                )}
                            </div>
                        </CarouselItem>
                        <CarouselItem className='shadow-2x1 group relative h-80 w-full cursor-pointer overflow-hidden rounded-lg sm:h-72 sm:w-full sm:basis-1/2 md:h-72 md:w-full lg:w-full lg:basis-1/3'>
                            <div
                                className='shadow-2x1 relative h-full w-full rounded-lg transition-opacity duration-300 group-hover:opacity-90'
                                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                                    setVideo3(true)
                                }
                            >
                                {video3 ? (
                                    <ItemVideo src={videos[2].video} />
                                ) : (
                                    <ItemImage src={videos[2].image} title={videos[2].title} alt='image' />
                                )}
                            </div>
                        </CarouselItem>

                    </CarouselContent>
                    {/* <CustomCarouselPrevious
						aria-label='Previous'
						className={cn(`absolute block -left-3 top-1/2 2xl:-left-12
								  h-8 w-8 -translate-y-1/2`)}
					/>
					<CustomCarouselNext
						aria-label='Next'
						className={cn(`absolute block -right-3 top-1/2 2xl:-right-12
								  h-8 w-8 -translate-y-1/2`)}
					/> */}

                    <CarouselNext
                        aria-label='Next'
                        className={cn(`absolute flex -right-3 top-1/2 2xl:-right-12
								  h-10 w-10 -translate-y-1/2 bg-gray-300`)}
                    />

                    <CarouselPrevious
                        aria-label='Previous'
                        className={cn(`absolute flex -left-3 top-1/2 2xl:-left-12
						h-10 w-10 -translate-y-1/2 bg-gray-300`)}
                    />

                </Carousel>
            </MaxWidthContent>
        </section>
    );
}

const ItemImage = ({
    src,
    alt,
    className,
    title,
}: {
    src: string;
    alt?: string;
    className?: string;
    title: string;
}) => {
    return (
        <>
            <Image
                src={src}
                alt={alt || "image"}
                fill
                style={{
                    objectFit: "cover",
                    objectPosition: "top"
                }}
                className={cn(
                    "shadow-2x1 h-full w-full cursor-pointer rounded-lg object-fill object-center sm:object-cover ",
                    `${className}`
                )}
                blurDataURL='/assets/249.jpg'
                loading="lazy"
                quality={40}
            />
            <div className='absolute left-[48%] top-[52%] z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2'>
                <div className='absolute hidden h-full w-full group-hover:block'>
                    <Icons.ytSVGred className='h-full w-full' />
                </div>
                <div className='absolute h-full w-full opacity-60 group-hover:hidden'>
                    <Icons.ytSVGwhite className='h-full w-full' />
                </div>
            </div>

            <div className='absolute left-0 items-center flex bottom-0 right-0 z-20 h-12 line-clamp-1 w-full bg-gray-950/50 text-white p-1 px-2'>
                <p title={title} className="line-clamp-1 text-sm md:text-base">{title}</p>
            </div>
        </>
    );
};

const ItemVideo = ({
    src,
    title,
    className,
}: {
    src: string;
    title?: string;
    className?: string;
}) => {
    return (
        <iframe
            className={cn(
                "shadow-2x1 z-0 h-full w-full cursor-pointer rounded-lg bg-zinc-200",
                `${className}`
            )}
            src={src}
            title={title || "YouTube video player"}
            frameBorder='0'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay;'
            allowFullScreen
        />
    );
};
