"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import moment from 'moment'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CustomCarouselPrevious,
    CustomCarouselNext,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import avatar from '../../public/assets/images/img-52.jpg';

function FeaturedBlogsCarsouel({
    featuredBlogs,
    authorImage
}: {
    featuredBlogs: any,
    authorImage: any,
}) {
    return (
        <>
            <div className="mt-4 gap-x-2 gap-y-2 px-2 md:gap-x-6 flex flex-col w-full">
                <Carousel className='rounded-lg h-full w-full max-w-[1220px] mx-auto items-stretch justify-stretch md:flex overflow-hidden md:overflow-visible'
                    opts={{
                        align: "center"
                    }}
                >
                    <CarouselContent className='rounded-lg gap-x-2'>
                        {featuredBlogs.data.map((blog: {
                            attributes: {
                                title: string;
                                slug: string;
                                description: string;
                                bannerimageurl: string;
                                bannerimagealt: string;
                                updatedAt: string;
                                publishedAt: string;
                            };
                        }, index: number) => (

                            <CarouselItem
                                className='h-96 rounded-xl overflow-hidden w-full border hover:opacity-90 basis-1/2 sm:basis-1/2 md:basis-1/3 min-w-[280px] sm:min-w-[320px]'
                                key={index}
                            >
                                <Link href={`/blog/${blog.attributes.slug}`}>
                                    <div className='relative h-[70%] w-full overflow-hidden group cursor-pointer transition-opacity duration-300'>
                                        <Image
                                            src={blog.attributes.bannerimageurl}
                                            alt={blog.attributes.bannerimagealt}
                                            fill
                                            className='object-cover transition duration-300 ease-in-out group-hover:scale-105'
                                            placeholder='blur'
                                            blurDataURL='/assets/249.jpg'
                                            quality={50}
                                        />
                                    </div>
                                    <div className='bg-white h-full flex-col flex flex-1 px-2 py-4'>

                                        {/* <span title={`Last Updated: ${moment(blog.attributes.updatedAt).format("MMM DD, YYYY")}`}
                                                    className="text-neutral-800 w-fit px-1 text-sm bg-slate-100 rounded-md p-1 mb-1 border border-slate-200"
                                                >
                                                    {moment(blog.attributes.updatedAt).format("MMM DD, YYYY")}
                                                </span> */}
                                        <h2 title={blog.attributes.title} className='text-base truncate md:text-lg font-semibold text-black/80 transition duration-300 ease-in-out group-hover:text-black w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                                            {blog.attributes.title}
                                        </h2>

                                        <div className='absolute top-[320px] flex items-center gap-2 px-2'>
                                            {featuredBlogs.data[index].attributes.author.data ?
                                                <Image
                                                    className='h-6 w-6 rounded-full object-cover'
                                                    src={featuredBlogs.data[index].attributes.author.data &&
                                                        authorImage?.find((item: any) =>
                                                            item.author?.username === featuredBlogs.data[index].attributes.author.data.attributes.username
                                                        )?.author?.avatar || "/profile.svg"

                                                    }
                                                    alt='Author avatar'
                                                    height={100}
                                                    width={100}
                                                    quality={50}
                                                />
                                                :
                                                null
                                            }
                                            <span className='text-xl text-gray-600'>
                                                {featuredBlogs.data[index].attributes.author.data ?
                                                    `${featuredBlogs.data[index].attributes.author.data.attributes.username}, `
                                                    : ''
                                                }
                                                {moment(blog.attributes.publishedAt).format("MMM DD, YYYY")}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselNext
                        aria-label='Next'
                        className={cn(`hidden md:flex absolute -right-3 top-1/2 h-10 w-10 -translate-y-1/2 bg-gray-300 2xl:-right-10`)}
                    />

                    <CarouselPrevious
                        aria-label='Previous'
                        className={cn(`hidden md:flex absolute -left-3 top-1/2 h-10 w-10 -translate-y-1/2 bg-gray-300 2xl:-left-12`)}
                    />
                </Carousel>

            </div>
        </>
    )
}

export default FeaturedBlogsCarsouel