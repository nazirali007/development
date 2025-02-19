import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getStrapiAllBlogs, getStrapiBlogsContent } from "@/lib/strapi";
import { getAuthorImage } from "@/lib/express";
import { notFound, redirect } from "next/navigation";
import BlogsList from "@/components/blogs-list";
import { FaLongArrowAltRight } from "react-icons/fa";
import FeaturedBlogsCarsouel from "@/components/featured-blogs";

export async function generateMetadata() {
	const strapiContent = await await getStrapiBlogsContent();

	if (!strapiContent) return notFound(); // 404

	let keywords = strapiContent?.metacontent?.metakeywords?.split(", ") || [];

	return {
		title: strapiContent?.metacontent.metatitle ? strapiContent?.metacontent.metatitle : "",
		description: strapiContent?.metacontent.metadescription
			? strapiContent?.metacontent.metadescription
			: "",
		keywords: keywords || "",
		alternates: {
			canonical: `/travel-blogs`,
		},
	};
	``;
}
// build test
export default async function Page({ searchParams }: { searchParams: string }) {
	const strapiContent = await getStrapiBlogsContent();
	const authorsName = strapiContent.featuredblogs?.data?.map((item: any) => item?.attributes?.author?.data?.attributes?.username)
	const authorImage = await getAuthorImage({ names: authorsName });
	const { page = 1 }: any = searchParams;

	if (page < 1) return redirect("/travel-blogs");

	const allBlogs = await getStrapiAllBlogs({
		query: {
			page: page || 1,
			PER_PAGE: 16,
		},
	});

	if (!strapiContent) return notFound(); // 404
	let landing = strapiContent.landing.data.attributes;
	const allAuthorNames = allBlogs?.map((item: any) => item?.attributes?.author?.data?.attributes?.username);
	const allAuthorImages = await getAuthorImage({ names: allAuthorNames });
	return (
		<>
			<main className='flex h-full w-full flex-col items-center'>
				{strapiContent.schemamarkup && (
					<script
						type='application/ld+json'
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(strapiContent.schemamarkup),
						}}
					/>
				)}
				<div className='max-w-screen relative flex min-h-[75vh] w-full flex-col items-center justify-center gap-8 bg-primaryMain px-2 py-10 sm:px-4 md:min-h-[75vh] md:flex-row md:px-20 md:py-20'>
					<div className='mt-10 flex w-full max-w-7xl flex-col items-center justify-center bg-transparent md:mt-0 md:flex-row'>
						<div
							className={`mt-10 flex w-full flex-col justify-center md:mt-0 md:h-60 lg:h-[50vh]`}
						>
							<h1 className='relative flex w-fit flex-col items-center justify-start text-start text-4xl font-bold text-white after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-[45%] after:rounded-xl after:bg-white md:text-6xl after:md:h-2'>
								Travel Blogs
							</h1>
							<div
								className={`mt-6 flex w-full flex-col items-start justify-center bg-transparent`}
							>
								<div className='text-xl font-bold text-slate-100 md:text-3xl'>
									{landing.title}
								</div>
								<div className='flex w-full flex-col items-start justify-start gap-2'>
									<div className='text-justify text-sm font-medium md:text-base'>
										{landing.description}
									</div>
									<Link
										href={`/blog/${landing.slug}`}
										className='flex w-max cursor-pointer items-center gap-2 rounded-lg border border-white px-2 py-1 font-bold text-white transition-all duration-150 hover:gap-4 hover:bg-gray-50/30'
									>
										Read More
										<FaLongArrowAltRight />
									</Link>
								</div>
							</div>
						</div>

						{/* right with image */}
						<Link
							href={`/blog/${landing.slug}`}
							className={`group relative mt-10 h-44 w-full overflow-hidden rounded-xl transition-all duration-300 ease-in-out md:mt-0 md:h-60 lg:h-[50vh]`}
						>
							<Image
								src={landing.bannerimageurl || "/assets/249.jpg"}
								alt={landing.bannerimagealt}
								fill
								placeholder='blur'
								className='overflow-hidden rounded-xl object-cover object-center transition-all duration-300 ease-in-out group-hover:opacity-90'
								blurDataURL='/assets/249.jpg'
								quality={50}
								style={{ objectFit: "cover", objectPosition: "center" }}
							/>
							<div className='absolute left-0 top-0 z-10 hidden h-full w-full bg-black/50 transition duration-300 ease-in-out group-hover:flex'></div>
						</Link>
					</div>
				</div>

				<div
					className={cn(
						"relative z-20 my-20 flex w-full flex-col items-center justify-center md:my-10"
					)}
				>
					{strapiContent.featuredblogs.data.length > 2 && (
						<>
							<section
								className={cn(
									"mx-auto h-full w-full max-w-7xl gap-x-2 gap-y-2 px-2 md:gap-x-6 md:gap-y-4 "
								)}
							>
								<h2 className='flex w-full px-2 text-start text-3xl font-bold text-black/80 sm:text-4xl'>
									Featured Blogs
								</h2>
								<FeaturedBlogsCarsouel
									featuredBlogs={strapiContent.featuredblogs}
									authorImage={authorImage}
								/>
							</section>
						</>
					)}
				</div>

				<section
					id='blogs-list'
					className='mt-20 flex w-full flex-col gap-14 px-4'
				>
					<h2 className='mx-auto flex w-full max-w-7xl px-2 text-start text-3xl font-bold text-black/80 sm:text-4xl'>
						Recent Blogs...
					</h2>
					<BlogsList data={allBlogs} allAuthorImages={allAuthorImages} currentPage={page} />
				</section>
			</main>
		</>
	);
}
