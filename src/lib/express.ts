"use server";

import axios from "axios";

const ENV = process.env.APP_ENV ?? process.env.NODE_ENV;
export const blogData = async ({ slug }: { slug: string }) => {
	try {
		const res = await axios
			.get(`${process.env.EXPRESS_URL}/api/blogs-cards?slugs=${slug}`)
			.then((data) => {
				return data;
			});
		if (!res) {
			return null;
		}
		return res.data;
	} catch (error) {
		console.log("error: while fetching category data ", error);
		return null;
	}
};

export const categoryData = async ({ slug }: { slug: string }) => {
	console.log("env => ", ENV);
	try {
		const res = await axios
			.get(`${process.env.EXPRESS_URL}/api/category?slug=${slug}&env=${ENV}`)
			.then((data) => {
				return data;
			});
		if (!res) {
			return null;
		}
		return res.data;
	} catch (error) {
		console.log("error: while fetching category data ", error);
		return null;
	}
};
export const getTripData = async ({ slug }: { slug: string }) => {
	try {
		const res = await axios
			.get(`${process.env.EXPRESS_URL}/api/trips?slug=${slug}&env=${ENV}`)
			.then((data) => {
				return data;
			});
		if (!res) {
			return null;
		}
		return res.data;
	} catch (error) {
		console.log("error: while fetching trip data ", error);
		return null;
	}
};
export const getRelatedTripData = async ({ slug }: { slug: string }) => {
	try {
		const res = await axios
			.get(`${process.env.EXPRESS_URL}/api/related-trips?slug=${slug}`)
			.then((data) => {
				return data;
			});
		if (!res) {
			return null;
		}
		return res.data;
	} catch (error) {
		console.log("error: while fetching related trip data ", error);
		return null;
	}
};

export const getHomeData = async () => {
	try {
		const res = await axios
			.get(`${process.env.EXPRESS_URL}/api/home?env=${ENV}`)
			.then((data) => {
				return data;
			});
		if (!res) {
			return null;
		}
		return res.data;
	} catch (error) {
		console.log("error: while fetching home carousel data ", error);
		return null;
	}
};

export const getHomeCarouselData = async () => {
	try {
		const res = await axios
			.get(`${process.env.EXPRESS_URL}/api/home/carousel`)
			.then((data) => {
				return data;
			});
		if (!res) {
			return null;
		}
		return res.data;
	} catch (error) {
		console.log("error: while fetching home carousel data ", error);
		return null;
	}
};
export const getHomeCuratedData = async () => {
	try {
		const res = await axios
			.get(`${process.env.EXPRESS_URL}/api/home/curated`)
			.then((data) => {
				return data;
			});
		if (!res) {
			return null;
		}
		return res.data;
	} catch (error) {
		console.log("error: while fetching home carousel data ", error);
		return null;
	}
};
export const getBlogContent = async ({ slug }: { slug: string }) => {
	try {
		const res = await axios
			.get(`${process.env.EXPRESS_URL}/api/blog?slug=${slug}`)
			.then((data) => {
				return data;
			});
		if (!res) {
			return null;
		}
		return res.data;
	} catch (err) {
		console.log("Error while fetching Blogs data", err);
		return null;
	}
};
export const getAuthorContent = async ({ slug }: { slug: string }) => {
	try {
		const res = await axios
			.get(`${process.env.EXPRESS_URL}/api/author?id=${slug}`)
			.then((data) => {
				return data;
			});
		if (!res) {
			return null;
		}
		return res.data;
	} catch (err) {
		console.log("Error while fetching Blogs data", err);
		return null;
	}
};
export const getAuthorImage = async ({ names }: { names: string[] }) => {
	try {
		if (names.length === 0) return null;
		const res = await axios.get(`${process.env.EXPRESS_URL}/api/blog/authorimage`, {
			params: { names: JSON.stringify(names) },
		});
		return res.data;
	} catch (err) {
		console.log("Error while fetching Author Image", err);
		return null;
	}
};
