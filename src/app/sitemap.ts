import { MetadataRoute } from 'next'
import { getStrapiCollectionCount, getStrapiCollectionSlugs } from "@/lib/strapi"

interface categorySlugObjectType {
	id: string,
	attributes: {
		slug: string,
		updatedAt: string
	}
}


async function fetchData() {
	try {
		let categories = await getStrapiCollectionSlugs('categories');
		let trips = await getStrapiCollectionSlugs('trips');
		let blogs = await getStrapiCollectionSlugs('blogs');
		let customized = await getStrapiCollectionSlugs('customizeds');
		return {
			categories: categories ?? [],
			trips: trips ?? [],
			blogs: blogs ?? [],
			customized: customized ?? []
		};
	} catch (error) {
		console.error('Error fetching data from Strapi:', error);
		return { categories: [], trips: [], blogs: [], customized: [] }; // Return empty arrays to avoid build failure
	}
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const { categories, trips, blogs, customized } = await fetchData();
	if (categories.length === 0 || trips.length === 0 || blogs.length === 0 || customized.length === 0) {
		console.warn('One or more collections from Strapi are empty.');
	}
	// console.log('Categories:===================', categories);
	// console.log('Trips:', trips);
	// console.log('Blogs:8888888888888888888888888888++++++++++++++++++++++++++++++++++++++++', blogs.length);
	// console.log('Customized:', customized);


	let dynamicData: any = []

	let sitemapArray: MetadataRoute.Sitemap = [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/disclaimer`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/reviews`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-and-conditions`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/travel-write-for-us`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	]


	dynamicData = [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/disclaimer`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/domestic`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/reviews`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-and-conditions`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/travel-write-for-us`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		...categories.map((category: categorySlugObjectType) => ({
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/${category.attributes.slug}`,
			lastModified: category.attributes.updatedAt,
			changeFrequency: 'hourly',
			priority: 1,
		})),
		...trips.map((trip: categorySlugObjectType) => ({
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/trip/${trip.attributes.slug}`,
			lastModified: trip.attributes.updatedAt,
			changeFrequency: 'hourly',
			priority: 1,
		})),
		...blogs.map((blog: categorySlugObjectType) => ({
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.attributes.slug}`,
			lastModified: blog.attributes.updatedAt,
			changeFrequency: 'hourly',
			priority: 1,
		})),
		...customized.map((trip: categorySlugObjectType) => ({
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/${trip.attributes.slug}`,
			lastModified: trip.attributes.updatedAt,
			changeFrequency: 'hourly',
			priority: 1,
		}))

	]

	// sitemapArray = trips.map((trip: categorySlugObjectType) => ({
	// 	url: `${process.env.NEXT_PUBLIC_BASE_URL}/trip/${trip.attributes.slug}`,
	// 	lastModified: trip.attributes.updatedAt,
	// 	changeFrequency: 'yearly',
	// 	priority: 1,
	// }))

	// sitemapArray = blogs.map((blog: categorySlugObjectType) => ({
	// 	url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.attributes.slug}`,
	// 	lastModified: blog.attributes.updatedAt,
	// 	changeFrequency: 'yearly',
	// 	priority: 1,
	// }))

	// sitemapArray = customized.map((custom: categorySlugObjectType) => ({
	// 	url: `${process.env.NEXT_PUBLIC_BASE_URL}/${custom.attributes.slug}`,
	// 	lastModified: custom.attributes.updatedAt,
	// 	changeFrequency: 'yearly',
	// 	priority: 1,
	// }))

	sitemapArray = dynamicData
	return sitemapArray
}