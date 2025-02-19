module.exports = {
	// siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://www.captureatrip.com",
	siteUrl: "https://www.captureatrip.com",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
			{
				userAgent: "*",
				disallow: [
					"/api/",
					"/admin/",
					"/search/",
					"/book/",
					"/bookings/",
					"/internal",
					"/cgi-bin/",
				],
			},
		],
		additionalSitemaps: ["https://www.captureatrip.com/sitemap-0.xml"],
	},
};
