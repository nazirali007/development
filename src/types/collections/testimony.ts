import { StrapiImageType } from "../components"
import { StrapiActivityInterface } from "./activity"
import { StrapiTripType } from "./trips"

export interface StrapiTestimonyType {
	id: 1,
	attributes: {
		Title: string,
		name: string,
		rating: string,
		review: string,
		createdAt: string,
		updatedAt: string,
		publishedAt: string,
		avatar: { data: StrapiImageType },
		media: {
			data: StrapiImageType[]
		}
	}
}
