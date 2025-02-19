/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import { getBlogContent } from "@/lib/express";
import { getStrapiBlogContent } from "@/lib/strapi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ShareButton } from "@/components/share-button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
	CAT_TWITTER_LINK,
	CAT_FB_LINK,
	CAT_INSTA_LINK,
	CAT_LINKEDIN_LINK,
	CAT_WHATSAPP_LINK,
} from "@/server/db/static/variables";
import moment from "moment";
import RecentBlogs from "@/components/recent-blogs";
import BlogSocialIcons from "@/components/blog-social-icons";
import avatar from "../../../../../../public/assets/images/img-52.jpg";
import { FaMedium } from "react-icons/fa6";
import { FaQuora } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { db } from "@/db/drizzle";
import { blogs } from "@/db/schema";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const strapiData = await getStrapiBlogContent({ slug: params.slug });
	if (!strapiData) return notFound();

	return {
		title: strapiData?.metacontent?.metatitle || "",
		description: strapiData?.metacontent?.metadescription || "",
		keywords: strapiData?.metacontent?.metakeywords || [],
		alternates: {
			canonical: `/blog/${strapiData?.slug}`,
		},
	};
}
export default async function Page({ params }: { params: { slug: string } }) {
	const strapiDataFull = await getBlogContent({ slug: params.slug });
	if (!strapiDataFull) return notFound();
	const strapiData = strapiDataFull[0];
	//console.log(strapiData?.content, "=====");
	return (

		<main className=''>
			{/* Json Schema LD */}
			{strapiData?.schemamarkup && (
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(strapiData?.schemamarkup),
					}}
				/>
			)}
			<section>
				<section className='relative z-10 flex h-[60vh] w-full items-end justify-center pb-10'>
					<Image
						src={
							strapiData.bannerimage ??
							strapiData.bannerimageurl ??
							"/assets/249.jpg"
						}
						alt={strapiData.bannerimagealt}
						fill
						className='object-cover'
						placeholder='blur'
						blurDataURL='/assets/249.jpg'
						quality={50}
					/>
					<div
						className='absolute left-0 top-0 h-full w-full'
						style={{
							background:
								"linear-gradient(180deg, #00000050 30%, rgba(255,255,255,1) 100%)",
						}}
					/>
				</section>

				<section className='flex h-full flex-col justify-between gap-10 px-4 md:px-20 lg:flex-row'>
					<div className='flex h-full flex-col gap-10 lg:flex-row'>
						<BlogSocialIcons
							url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.slug}`}
						/>
						<div className={cn("blog mx-auto -mt-24 flex flex-col !gap-10")}>
							<div className='z-20 flex h-full w-full flex-col items-end justify-between gap-2 text-left text-gray-800'>
								<h1 className=' w-full !text-3xl font-bold !leading-[1] md:!text-5xl'>
									{strapiData?.title}
								</h1>
								<div className='w-full px-1 py-2'>
									<div className='flex justify-start gap-2'>
										{strapiData?.author?.username ?
											<Image
												className='h-14 w-14 rounded-full object-cover'
												src={strapiData?.author?.avatar || "/profile.svg"}
												height={100}
												width={100}
												quality={50}
												alt='Rounded avatar'
											/>
											: ""}

										<div className=''>
											<a
												href={`${process.env.NEXT_PUBLIC_BASE_URL}/author/${strapiData.author?.id}`}
											>
												{strapiData?.author?.username ?? ""}
											</a>
											<div className=''>
												{moment(strapiData.publishedAt).format("MMM DD, YYYY")}
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								className='article lg:w-[50vw]'
								dangerouslySetInnerHTML={{ __html: strapiData?.content }}
							/>
							<section className='flex flex-col !gap-1'>
								{strapiData?.author ? (
									<div className='relative my-8 rounded-lg px-2 py-8 md:mt-4'>
										<div className='flex w-full max-w-3xl justify-start pb-8 text-3xl font-bold text-black md:text-4xl'>
											Author
										</div>
										<div className='flex w-full max-w-3xl flex-col items-start sm:flex-row md:gap-8'>
											<div className='flex h-full w-full justify-center sm:w-auto md:pt-12'>
												{
													// Center the Image
													strapiData?.author?.avatar ? (
														<div className='relative h-32 w-32 rounded-full'>
															<Image
																src={strapiData.author.avatar}
																alt='Author_Image'
																fill
																quality={50}
																className='h-full w-full rounded-full object-cover object-center'
															/>
														</div>
													) : (
														<div className='relative h-32 w-32 rounded-full'>
															<Image
																src='/profile.svg'
																alt='Author'
																fill
																quality={50}
																className='h-full w-full rounded-full object-cover object-center'
															/>
														</div>
													)
												}
											</div>

											<div className='flex w-full flex-col items-center gap-3 sm:w-auto sm:items-start'>
												<a
													href={`${process.env.NEXT_PUBLIC_BASE_URL}/author/${strapiData.author?.id}`}
													className='font-display mb-2 text-2xl font-semibold text-black'
												>
													{strapiData.author?.username
														? strapiData.author?.username
														: ""}
												</a>

												<div className='md:text-md mb-4 p-0 text-justify text-gray-900'>
													<p>{strapiData.author?.description ?? ""}</p>
												</div>
												<div className='flex justify-start gap-4'>
													<Link
														href={"https://medium.com/@travellerrinki"}
														target='/blank'
													>
														<FaMedium color='black' size={20} />
													</Link>
													<Link
														href={
															"https://www.quora.com/profile/Rinki-Sharma-Traveller"
														}
														target='/blank'
													>
														<FaQuora color='#A82400' size={20} />
													</Link>
													<Link
														href={"https://www.reddit.com/user/travellerrinki/"}
														target='/blank'
													>
														<FaReddit color='#FF4500' size={20} />
													</Link>
												</div>
											</div>
										</div>
									</div>
								) : null}
							</section>
						</div>
						{strapiData?.relatedblogs?.data.length > 0 ? (
							<div className='mt-16 flex h-full w-full flex-col gap-4 md:sticky md:top-16 lg:w-[20rem]'>
								<h2
									className={`relative w-fit text-start text-xl font-bold after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-[30%] after:rounded-3xl after:bg-primaryMain after:content-[''] lg:w-full lg:text-3xl`}
								>
									Related Blogs
								</h2>
								<div className='grid h-full w-full grid-cols-2 items-end gap-4 md:grid-cols-3 lg:flex lg:h-fit lg:flex-col'>
									{strapiData?.relatedblogs.data
										.slice(0, 3)
										.map((blog: any, index: number) => (
											<Link
												key={index}
												className='group relative flex h-full w-full flex-col gap-0.5 overflow-hidden transition duration-300 ease-in-out lg:h-fit'
												href={`/blog/${blog.attributes.slug}`}
											>
												<div
													className={`xl:[13rem] relative h-[10rem] w-full overflow-hidden rounded-lg lg:h-[9rem]`}
												>
													<Image
														src={
															blog.attributes.bannerimage?.data?.attributes
																?.url ||
															blog.attributes.bannerimageurl ||
															"/assets/249.jpg"
														}
														alt={blog.attributes.bannerimagealt}
														fill
														placeholder='blur'
														className='bg-zinc-200 object-cover object-center transition duration-300 ease-in-out group-hover:opacity-90'
														blurDataURL='/assets/249.jpg'
														quality={50}
														// objectPosition="center"
														style={{
															objectFit: "cover",
															objectPosition: "center",
														}}
													/>
													<div className='absolute left-0 top-0 z-10 hidden h-full w-full bg-black/50 transition duration-300 ease-in-out group-hover:flex'></div>
												</div>
												<div className='my-auto flex flex-col text-primaryMain'>
													<span className='w-fit px-1 text-xs text-neutral-800 '>
														{moment(blog.attributes.publishedAt).format(
															"MMM DD, YYYY"
														)}
													</span>
													<h2
														title={blog.attributes.title}
														className='line-clamp-2 text-base font-semibold text-black/80 transition duration-300 ease-in-out group-hover:text-black md:text-sm'
													>
														{blog.attributes.title}
													</h2>
												</div>
											</Link>
										))}
								</div>
							</div>
						) : (
							<>
								<RecentBlogs />
							</>
						)}
					</div>
				</section>
			</section>
		</main>
	);
}

{
	/* <Link
href={`/blog/${blog.attributes.slug}`}
className='group flex rounded-lg h-28 flex-col overflow-hidden group-hover:cursor-pointer lg:h-32 transition duration-150 ease-in-out group-hover:opacity-90'
key={index}
>
<div className="relative h-full w-full">
	<Image
		src={blog.attributes.bannerimageurl}
		alt={blog.attributes.bannerimagealt}
		fill
		className='relative size-20 object-cover transition duration-150 ease-in-out group-hover:opacity-90'
		placeholder='blur'
		blurDataURL='/assets/249.jpg'
		quality={50}
	/>
</div>
<p className={cn('line-clamp-1 text-start font-medium uppercase text-white bg-black/80 p-1 text-sm sm:text-base transition duration-150 ease-in-out group-hover:opacity-90',
)}
>
	{blog.attributes.title}
</p>
</Link> */
}
