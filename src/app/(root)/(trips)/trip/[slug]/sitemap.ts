// import { BASE_URL } from '@/app/lib/constants'
import { getStrapiCollectionCount, getStrapiCollectionSlugs } from "@/lib/strapi"
import { MetadataRoute } from "next"
interface categorySlugObjectType {
	id: string,
	attributes: {
		slug: string,
		updatedAt: string
	}
}


export async function generateSitemaps() {
	// Fetch the total number of products and calculate the number of sitemaps needed
	let categoriesCount: number = await getStrapiCollectionCount('categories')
	const siteMapsObjects = Array.from({ length: categoriesCount }, (_, i) => ({ id: i }));
	return siteMapsObjects
}


export default async function sitemap({
	id,
}: {
	id: number
}): Promise<MetadataRoute.Sitemap> {
	// Google's limit is 50,000 URLs per sitemap
	const start = id * 50000
	const end = start + 50000
	let categories: categorySlugObjectType[] = await getStrapiCollectionSlugs('categories') ?? []

	return categories.map((category: categorySlugObjectType) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/${category.attributes.slug}`,
		lastModified: category.attributes.updatedAt,
	}))
}