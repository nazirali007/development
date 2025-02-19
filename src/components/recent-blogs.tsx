import { getStrapiAllBlogs } from '@/lib/strapi'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

async function RecentBlogs() {
    const recentBlogs = await getStrapiAllBlogs({
        query: {
            page: 1,
            PER_PAGE: 3,
        },
    })

    return (
        <>
            <div className='flex h-full w-full lg:w-[20rem] flex-col gap-4 mt-16 md:sticky md:top-16'>
                <h2 className={`text-xl lg:text-3xl w-fit font-bold lg:w-full text-start relative after:content-[''] after:h-1 after:rounded-3xl after:bg-primaryMain after:absolute after:-bottom-1 after:left-0 after:w-[30%]`}>
                    Recent Blogs
                </h2>
                <div className='h-full lg:h-fit w-full gap-4 grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-col items-end'>
                    {recentBlogs?.length > 0 && recentBlogs
                        .map(
                            (blog: any, index: number) => (
                                <Link
                                    key={index}
                                    className='group relative overflow-hidden h-full w-full lg:h-fit flex flex-col gap-0.5 transition duration-300 ease-in-out'
                                    href={`/blog/${blog.attributes.slug}`}
                                >
                                    <div
                                        className={`xl:[13rem] relative h-[10rem] w-full overflow-hidden rounded-lg lg:h-[9rem]`}
                                    >
                                        <Image
                                            src={blog.attributes.bannerimage?.data?.attributes?.url || blog.attributes.bannerimageurl || '/assets/249.jpg'}
                                            alt={blog.attributes.bannerimagealt}
                                            fill
                                            placeholder='blur'
                                            className='object-cover bg-zinc-200 object-center transition duration-300 ease-in-out group-hover:opacity-90'
                                            blurDataURL='/assets/249.jpg'
                                            quality={50}
                                            style={{ objectFit: "cover", objectPosition: "center" }}
                                        />
                                        <div className='absolute left-0 top-0 z-10 hidden h-full w-full bg-black/50 transition duration-300 ease-in-out group-hover:flex'></div>
                                    </div>
                                    <div className='my-auto flex flex-col text-primaryMain'>
                                        <span className="text-neutral-800 w-fit px-1 text-xs ">
                                            {moment(blog.attributes.publishedAt).format("MMM DD, YYYY")}
                                        </span>
                                        <h2 title={blog.attributes.title} className='text-base line-clamp-2 md:text-sm font-semibold text-black/80 transition duration-300 ease-in-out group-hover:text-black'>
                                            {blog.attributes.title}
                                        </h2>
                                    </div>
                                </Link>
                            )
                        )}
                </div>
            </div>

        </>
    )
}

export default RecentBlogs