"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { cn } from '@/lib/utils';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

function BlogsList({
    data,
    currentPage,
    allAuthorImages,
}: {
    data: any[],
    currentPage: number,
    allAuthorImages: { author: { username: string, avatar: string } }[]
}) {
    const [blogs, setBlogs] = useState(data)
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        setBlogs(data)
    }, [data])

    useEffect(() => {
        // console.log(currentPage)
        setPage(currentPage)
    }, [currentPage])

    return (
        <>
            {blogs?.length > 0 ? (
                <>
                    <div
                        className={`mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-3 gap-y-4 md:gap-y-10 lg:grid-cols-4`}
                    >
                        {blogs.map((blog: any, index: number) => (
                            <Link
                                key={index}
                                className='group relative overflow-hidden'
                                href={`/blog/${blog.attributes.slug}`}
                            >
                                <div
                                    className={`xl:[13rem] relative h-[10rem] w-full overflow-hidden rounded-lg lg:h-[14rem]`}
                                >
                                    <Image
                                        src={blog.attributes?.bannerimage?.data?.attributes?.url || blog?.attributes?.bannerimageurl || '/assets/249.jpg'}
                                        alt={blog.attributes.bannerimagealt}
                                        fill
                                        placeholder='blur'
                                        className='object-cover object-center transition duration-300 ease-in-out group-hover:opacity-90'
                                        blurDataURL='/assets/249.jpg'
                                        quality={50}
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                    />
                                    <div className='absolute left-0 top-0 z-10 hidden h-full w-full bg-black/50 transition duration-300 ease-in-out group-hover:flex'></div>
                                </div>
                                <div className='my-auto mt-4 flex flex-col text-primaryMain'>
                                    <h2 title={blog.attributes.title} className='text-base line-clamp-2 md:text-lg font-semibold text-black/80 transition duration-300 ease-in-out group-hover:text-black'>
                                        {blog.attributes.title}
                                    </h2>
                                    <p className='text-xs line-clamp-1 sm:text-sm font-semibold text-black/60 transition duration-300 ease-in-out'>
                                        {blog.attributes.description}
                                    </p>
                                    <span
                                        className="text-neutral-800 w-fit px-1 text-sm"
                                    >
                                        <div className='flex justify-between items-center'>
                                            {blogs[index].attributes.author.data && (
                                                <Image
                                                    className='h-8 w-8 mr-2 rounded-full object-cover'
                                                    src={allAuthorImages?.find((item: any) => item?.author.username === blogs[index].attributes.author.data.attributes.username)?.author?.avatar || "/profile.svg"}
                                                    alt='Rounded avatar'
                                                    height={100}
                                                    width={100}
                                                    quality={50}
                                                />
                                            )}
                                            <div className=''>
                                                {blogs[index].attributes.author.data ? blogs[index].attributes.author.data.attributes.username + ', ' : ''}
                                            </div>
                                            <div className=''>
                                                {moment(blog.attributes.publishedAt).format("MMM DD, YYYY")}
                                            </div>
                                        </div>
                                    </span>
                                    {/* <span
                                        className='absolute top-[328px] flex justify-start gap-6'
                                    >
                                        
                                    </span> */}
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <h2 className='text-2xl font-bold text-black/80 text-center'>
                    No Blogs Found
                </h2>
            )}

            <div className='flex flex-col w-full justify-center text-center items-center'>
                {
                    <PaginationContent>
                        {
                            page > 1 && (
                                <PaginationItem
                                    onClick={() => setPage(page - 1)}
                                >
                                    <PaginationPrevious href={`?page=${Number(page) - 1}#blogs-list`} />
                                </PaginationItem>
                            )
                        }
                        <PaginationItem
                            onClick={() => setPage(1)}
                        >
                            <PaginationLink href={`?page=${1}#blogs-list`}>1</PaginationLink>
                        </PaginationItem>

                        {/* Current Page */}
                        {page > 2 ? (

                            <input
                                value={page}
                                // onChange={(e) => setPage(Number(e.target.value))}
                                type='tel'
                                disabled
                                title='Current Page'
                                className='text-sm text-bold hover:disabled:cursor-not-allowed border border-input flex text-center items-center justify-center h-10 w-10 bg-background hover:bg-accent hover:text-accent-foreground'
                            />
                        ) : (
                            <>
                                <PaginationItem
                                    onClick={() => setPage(2)}
                                >
                                    <PaginationLink href={`?page=${2}#blogs-list`}>2</PaginationLink>
                                </PaginationItem>
                            </>
                        )}


                        {page > 2 ? (
                            <>
                                <PaginationItem
                                    onClick={() => setPage(Number(page + 1))}
                                >
                                    <PaginationLink href={`?page=${Number(page) + 1}#blogs-list`}>{Number(page) + 1}</PaginationLink>
                                </PaginationItem>
                                <PaginationEllipsis />
                            </>
                        ) : null}
                        <PaginationItem>
                            <PaginationNext
                                href={`?page=${Number(page) + 1}#blogs-list`}
                                onClick={() => setPage(Number(page) + 1)}
                            />
                        </PaginationItem>
                    </PaginationContent>
                }
            </div>
        </>
    )
}

export default BlogsList