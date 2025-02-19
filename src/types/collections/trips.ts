import { StrapiRelatedImageType, StrapiItineraryAccordionType, StrapiImageType } from "../components";

// type Attributes = ;

export interface StrapiTripType {
	id: number;
	attributes: {
		slug: string;
		name?: string;
		description?: string;
		price?: number;
		discount?: string;
		pickup?: string;
		drop?: string;
		inclusions?: string;
		exclusions?: string;
		note?: string;
		itinerary?: string;
		prebooking?: boolean;
		isCustomized?: boolean;
		isInternational?: boolean;
		isDomestic?: boolean;
		coverimageurl?: string;
		bannerimageurl?: string;
		reviewvideourl?: string | null;
		perk1?: string | null;
		perk2?: string | null;
		durationdays?: number;
		metatitle?: string;
		metakeywords?: string;
		metadescription?: string;
		schemamarkup?: string | null;
		itinerarypdfurl?: string | null;
		coverImageurlalt?: string;
		bannerimageurlalt?: string;
		titledescription?: string | null;
		smalldescription?: string | null;
		createdAt?: string;
		updatedAt?: string;
		publishedAt?: string;
		dates?: any[];
		costing?: any[];
		relatedimagesurl?: StrapiRelatedImageType[];
		relatedtrips?: StrapiTripType[];
		itinerarypdf?: { data: any } | null;
		FAQ?: any[];
		itineraryaccordion?: StrapiItineraryAccordionType[];
		coverimage: { data: StrapiImageType } | null,
		bannerimage: { data: StrapiImageType } | null,
		tags: any[];
	};
};

type TripResponse = {
	data: StrapiTripType;
	meta: object;
};
