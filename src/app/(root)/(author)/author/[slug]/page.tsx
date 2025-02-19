import React from "react";
import Link from "next/link";
import Image from "next/image";
import author from "@/author.json";
import { notFound } from "next/navigation";
import { getAuthorContent } from "@/lib/express";
import { Icons } from "@/assets/icons";
import moment from "moment";
export default async function Author({ params }: { params: { slug: string } }) {
    const AuthorDataSlug = await getAuthorContent({ slug: params.slug });
    if (!AuthorDataSlug) return notFound();
    const AuthorData = author.filter(
        (item: any) => item.id === AuthorDataSlug.id
    );

    return (
        <div className=''>
            <div
                style={{ backgroundImage: `url("/assets/campaign/bali5.jpg")` }}
                className='flex h-[60vh] items-center justify-center bg-cover  bg-center bg-no-repeat text-3xl font-[600]  text-white xl:text-5xl '
            >
                <div className=' text-center'> I came I saw I captured</div>
            </div>
            <div className='flex h-auto flex-col items-center justify-evenly px-6 pb-2 pt-0 md:justify-center md:px-8 xl:justify-between xl:px-12'>
                <div className='mb-1  mt-2 flex w-full flex-col items-center justify-center gap-2 xl:mb-4'>
                    <div className='relative h-32 w-32 rounded-full'>
                        <Image
                            src={AuthorDataSlug?.avatar || "/profile.svg"}
                            alt='Author'
                            height={100}
                            width={100}
                            quality={50}
                            className='h-full w-full rounded-full object-cover object-center'
                        />
                    </div>
                </div>

                <div className='flex  flex-col gap-4 rounded-bl-2xl rounded-tr-2xl px-2 py-4 md:px-4 xl:gap-6 xl:px-8'>
                    <div className='text-start text-2xl font-[600] text-black md:text-4xl'>
                        {AuthorDataSlug?.username || ""}
                    </div>
                    <div className=' text-md text-black xl:text-lg '>
                        {AuthorDataSlug?.description || ""}
                    </div>
                    <div className='mb-2 flex items-center justify-center gap-4 text-[#007DBC] xl:justify-start'>
                        <Link
                            href={AuthorData[0].facebook}
                            arial-label={"CAT Facebook"}
                            target='_blank'
                            className={` ${AuthorData[0]?.facebook !== "" ? "" : "hidden"} relative h-4 w-4 md:h-6 md:w-6`}
                        >
                            <Icons.img69 className='absolute h-full w-full transition-all duration-200 hover:scale-125' />
                        </Link>
                        <Link
                            href={AuthorData[0].twitter}
                            arial-label={"CAT Twiiter / X"}
                            target='_blank'
                            className={` ${AuthorData[0]?.twitter !== "" ? "" : "hidden"} relative h-4 w-4 md:h-6 md:w-6`}
                        >
                            <Icons.img68 className='absolute h-full w-full transition-all duration-200 hover:scale-125' />
                        </Link>
                        <Link
                            href={AuthorData[0].instagram}
                            arial-label={"CAT Instagram"}
                            target='_blank'
                            className={` ${AuthorData[0]?.instagram !== "" ? "" : "hidden"} relative h-4 w-4 md:h-6 md:w-6`}
                        >
                            <Icons.img70 className='absolute h-full w-full transition-all duration-200 hover:scale-125' />
                        </Link>
                        <Link
                            href={AuthorData[0].linkedin}
                            arial-label={"CAT Linkedin"}
                            target='_blank'
                            className={` ${AuthorData[0]?.linkedin !== "" ? "" : "hidden"} relative h-4 w-4 md:h-6 md:w-6`}
                        >
                            <Icons.img71 className='absolute h-full w-full transition-all duration-200 hover:scale-125' />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='mx-2 mt-8 px-3  py-4 md:mx-3 md:px-6  md:py-5 xl:mx-4 xl:mt-0 xl:px-12 xl:py-6'>
                <div className='mb-3 text-2xl font-[600] text-black md:text-4xl xl:mb-4'>
                    Related <span className='text-[#007DBC]'>Blogs</span>
                </div>
                {AuthorDataSlug.blogs.length > 0 ? (
                    <div className='grid h-auto grid-cols-2 gap-1 rounded-xl md:grid-cols-3 md:gap-3 xl:grid-cols-4  xl:gap-4'>
                        {AuthorDataSlug?.blogs.map((item: any) => (
                            <Link
                                href={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${item?.slug}`}
                                key={item?.id}
                                className=''
                            >
                                <div className='flex h-fit w-full grow flex-col gap-2 rounded-xl border border-white p-1 md:p-0 xl:h-[50vh]'>
                                    <div className='relative h-[150px] max-h-[200px] w-full overflow-hidden rounded-md lg:max-h-[300px] lg:min-h-[200px] '>
                                        <Image
                                            src={
                                                item?.bannerimageurl ??
                                                item?.bannerimage ??
                                                "/assets/campaign/bali5.jpg"
                                            }
                                            alt={item?.bannerimagealt ?? "author blog"}
                                            fill
                                            quality={50}
                                            className='h-full w-full object-cover object-center'
                                        />
                                    </div>
                                    <div className='items-evenly relative flex w-full flex-col gap-2 font-[600] text-white md:gap-4'>
                                        <div className='z-50 w-[100%] text-[14px] text-black md:text-[1rem] truncate text-ellipsis whitespace-nowrap overflow-hidden '>
                                            {item?.title}
                                        </div>
                                        <div className='flex items-center gap-2  text-[0.75rem] text-neutral-600 md:text-[1rem]  '>
                                            <div className='relative h-6 w-6 rounded-full'>
                                                <Image
                                                    src={AuthorDataSlug?.avatar || "/profile.svg"}
                                                    alt='Author'
                                                    height={100}
                                                    width={100}
                                                    quality={50}
                                                    className='h-full w-full rounded-full object-cover object-center'
                                                />
                                            </div>
                                            <div>
                                                {item?.publishedAt &&
                                                    moment(item?.publishedAt).format("MMM DD, YYYY")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className='col-span-6 flex h-96 flex-col items-center justify-center text-center'>
                        <Image
                            src='/assets/images/sad-figure.svg'
                            alt='No Blogs Found'
                            width={300}
                            height={300}
                            className='object-contain'
                            quality={50}
                        />

                        <h1 className='text-2xl font-bold text-gray-950'>No Blogs Found</h1>
                        <p className='text-sm font-medium text-gray-950'>
                            For any queries, or custom trips, please contact us directly.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
