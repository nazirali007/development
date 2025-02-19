import { StrapiTagType, StrapiImageType, StrapiLocationType } from "../components";


export interface StrapiActivityInterface {
	id: number;
	attributes: {
		name: string;
		slug: string;
		description: string;
		fullday: boolean;
		cost: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		image: {
			data: StrapiImageType
		};
		tags: StrapiTagType[];
		location: StrapiLocationType,

	};
};
