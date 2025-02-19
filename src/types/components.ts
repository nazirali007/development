interface ImageFormats {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string | null;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
};

export interface StrapiImageType {
	id: number;
	attributes: {
		name: string;
		alternativeText: string | null;
		caption: string | null;
		width: number;
		height: number;
		formats: {
			small: ImageFormats;
			medium: ImageFormats;
			thumbnail: ImageFormats;
		};
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url: string;
		previewUrl: string | null;
		provider: string;
		provider_metadata: any | null;
		createdAt: string;
		updatedAt: string;
	}
};

export interface StrapiTagType {
	id: number,
	Title: string
}
export interface StrapiLocationType {
	id: number,
	destination: string
}

export interface StrapiRelatedImageType {
	id: number;
	Title: string;
};

export interface StrapiItineraryAccordionType {
	id: number;
	day: string | null;
	title: string;
	description: string;
};
