import { StrapiImageType } from "../components";
import { StrapiActivityInterface } from "./activity";
import { StrapiTestimonyType } from "./testimony";
import { StrapiTripType } from "./trips";

export interface StrapiCampaignType {
	id: number;
	attributes: {
		slug: string,
		createdAt: string,
		updatedAt: string,
		publishedAt: string,
		Location: {
			id: number,
			destination: string
		},
		background: { data: StrapiImageType[] }
		activities: { data: StrapiActivityInterface[] },
		trips: { data: StrapiTripType[] }
		testimonies: { data: StrapiTestimonyType[] },
		gallery1: { data: StrapiImageType[] }
		gallery2: { data: StrapiImageType[] }
	}
}
