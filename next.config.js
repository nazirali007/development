const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */

const redirectMap = {
	"/trip/leh-to-leh-turtuk-tsomoriri": "/trip/leh-to-tsomoriri",
	"/trip/leh-to-leh-with-turtuk": "/trip/leh-to-turtuk",
	"/trip/delhi-leh-srinagar": "/trip/delhi-to-leh-srinagar-tour",
	"/trip/delhi-sarchu-leh": "/trip/delhi-to-sarchu-leh",
	"/trip/delhi-leh-delhi": "/trip/delhi-to-leh",
	"/northern-lights": "/northern-lights-tour-package",
	"/trip/leh-ladakh-bike-tour": "/trip/leh-ladakh-bike-trip",
	"/trip/manali-leh-manali": "/trip/manali-to-leh-ladakh-bike-trip",
	"/trip/manali-to-leh-ladakh-bike-trip": "/trip/ladakh-bike-trip-from-manali",
	"/trip/srinagar-leh-delhi": "/trip/srinagar-to-leh-bike-trip",
	"/new-year-trip-packages": "/newyear-getaways",
	"/international-newyear-tour-package": "/new-year-trip-packages",
	"/baku-tour-packages": "/baku-tour-package",
	"/upcoming-trips/all": "/upcoming-trips",
	"/blog/exploring-the-famous-foods-of-meghalaya":
		"/blog/famous-foods-of-meghalaya",
	"/trip/manali-jispa-kasol-kheerganga": "/trip/manali-jispa-kasol-tosh",
	"/trip/winter-spiti-valley-expedition": "/trip/winter-spiti-valley",
	"/blog/visit-the-green-paradise-meghalaya":
		"/blog/green-paradise-in-meghalaya",
	"/blog/top-tourist-attractions-in-meghalaya":
		"/blog/tourist-attractions-in-meghalaya",
	"/trip/gabala-baku-trip": "/trip/gabala-baku-trip-Shahdag",
	"/dussehra-weekend": "/weekend-trip-from-delhi",
	"/trip/bangkok-pattaya": "/trip/bangkok-pattaya-tour-packages",
	"/upcoming-trips/July-trip": "/upcoming-trips",
	"/blog/best-time-to-visit-canada-toronto": "/blog/best-times-to-visit-canada",
	"/holi-trips": "/trip/pushkar-holi	",
	"/trip/full-moon-party-thailand": "/trip/Thailand-with-full-moon-party",
	"/goa-trip": "/trip/all-girls-trip-goa",
	"/trip/manali-atal-tunnel-lahaul": "/trip/kasol-kheerganga-manali-sissu	",
	"/blog/places-to-visit-in-udaipur-in-1-day":
		"/blog/places-to-visit-in-udaipur-in-1-days	",
	"/featured": "/",
	// "/blog/places-to-visit-in-Jamshedpur": "/blog/places-to-visit-in-jamshedpur",
	"/bookingquery": "/",
	"/undefined": "/",
	"/trip/kasol-tosh-manali-solang": "/trip/manali-jispa-kasol-tosh",
	"/upcoming-trips/April-trip": "/upcoming-trips",
	"/trip/jaisalmer": "/jaisalmerlongewala",
	"/trip/mcleod-bir-paragliding": "/trip/Mcleod-Bir-Tirthan",
	"/blog/places-to-visit-in-and-near-dalhousie":
		"/blog/places-to-visit-in-near-dalhousie",
	"/upcoming-trips/September-trip": "/upcoming-trips",
	"/slider/3": "/",
	"/leh-ladakh-tour-packa": "/leh-ladakh-tour-packages",
	"/trip/Winter-Kashmir-Short-circuit": "/trip/winter-kashmir-fullcircuit",
	"/others": "/",
	"/slider/undefined": "/",
	"/trip/3-days-trip-from-delhi": "/weekend-trip-from-delhi",
	"/trip/leh-ladakh-package-from-kolkata": "/leh-ladakh-tour-packages",
	"/trip/winter-kashmir-fullcircuit-XMas": "/trip/WinterKashmirXMas",
	"/trip/singapore-honeymoon": "/singapore-tour-package",
	//"/trip/shangarh-retreat": "",
	"/trip/Singapore": "/singapore-tour-package",
	"/trip/parents-kashmir-trip-short": "/kashmir-tour-package",
	//"/trip/srinagar-leh-delhi": "",
	"/blog/chashme-shahi-kashmir": "/blog/chashme-shahi-garden",
	//"/trip/delhi-leh-srinagar": "",
	"/upcoming-trips/October-trip": "/upcoming-trips",
	"/trip/McleodBirTirthanNewYear": "/trip/Mcleod-Bir-Tirthan",
	"/trip/kasolmanalisolang": "/trip/kasolmanalisissu",
	"/thailand": "/thailand-tour-packages",
	"/blog/agumble-tourist-places": "/blog/agumbe-tourist-places",
	"/trip/Winter-Spiti-christmas": "/trip/Winter-Spiti-christmas-ny",
	//"/trip/tirthannewyear": "",
	"/trip/vietnam-girls-trip": "/vietnam-tour-package",
	// "/trip/Mcleodganj-Triund": "/trip/mcleodganj-triund",
	"/trip/jaisalmerxmasnewyear": "/trip/jaisalmer-new-year-tour-package",
	"/trip/parashar-lake": "/",
	"/blog/zero-bridage": "/blog/zero-bridge",
	"/trip/leh-ladakh-tour-packages-from-mumbai": "/leh-ladakh-tour-packages",
	"/trip/gokarna-long-circuit": "/trip/gokarna-tour-packages",
	"/trip/manalisolang": "/trip/kasolmanalisissu",
	"/trip/link": "/",
	"/upcoming-trips/January-trip": "/upcoming-trips",
	"/lander": "/",
	"/upcoming-trips/March-trip": "/upcoming-trips",
	"/trip/goa-group-trip": "/trip/all-girls-trip-goa",
	"/blog/kashmir-backpackingp-trip": "/blog/kashmir-backpacking-trip",
	"/Kedarnath-Trip": "/kedarnath-tour-packages",
	"/upcoming-trips/November-trip": "/upcoming-trips",
	"/trip/chopta-chandrashila": "/trip/chopta-chandrashila-trek-tungnath",
	"/trip/narkanda-chitkul-kalpa": "/",
	// "/trip/Summer-kashmir-long-circuit": "/trip/Summer-Bashmir-long-circuit",
	"/$": "/",
	"/trip/nepal-ghandruk": "/nepal-tour-package",
	"/trip/jaisalmernewyear": "/trip/jaisalmer-new-year-tour-package",
	"/trip/hampta-pass": "/trip/hampta-pass-trek-package",
	"/blog/places-to-visit-in-delhi-with-summer":
		"/blog/places-to-visit-in-delhi-with-family",
	"/north-east": "/",
	//"/trip/baku-gabala-sheki-shahdag": "",
	"/kedarnath-trip": "/kedarnath-tour-packages",
	"/trip/spiti-valley-tour-package-from-delhi": "/spiti-valley",
	"/blog/hidden-places-to-visit-in-ooty": "/blog/hidden-places-in-ooty",
	"/blog/places-to-visit-in-mauritius-for-honeymoon":
		"/blog/mauritius-honeymoon-places",
	"/blank": "/",
	"/upcoming-trips/February-trip": "/upcoming-trips",
	"/blogs-page": "/travel-blogs",
	"/thailand-girls-trip": "/trip/thailand-girls-trip",
	//"/trip/baku-gabala-sheki-trip": "",
	"/trip/sikkim": "/trip/sikkim-trip-group",
	"/trip/meghalaya": "/meghalaya-tour-package",
	"/leh-ladakh": "/leh-ladakh-tour-packages",
	"/good-friday-tour-packages": "/weekend-trip-from-delhi",
	"/thailand-tour-packages.": "/thailand-tour-packages",
	// "/blog/Whats-more-to-kedarkantha-than-being-a-trek":
	// 	"/blog/whats-more-to-kedarkantha-than-being-a-trek",
	"/blog": "/travel-blogs",
	"/slider/1": "/",
	"/meghalaya-tour-pack...": "/meghalaya-tour-package",
	"/trip/parents-kerala-trip": "/kerala-tour-package",
	"/trip/gokarna-package-from-bangalore":
		"/trip/gokarna-packages-from-bangalore",
	"/trip/kasol-kheerganga": "/trip/kasol-kheerganga-trek",
	//"/trip/delhi-leh-srinagar/": "",
	"/Nepal": "/nepal-tour-package",
	"/upcoming-trips/December-trip": "/upcoming-trips",
	"/trip/vietnampackagefrommumbai": "/trip/vietnam-tour-package-from-mumbai",
	"/blog/tourist-places-in-araku-valley": "/",
	"/-": "/",
	"/blog/places-to-visit-in-araku-valley": "/blog/araku-valley-tourist-places",
	"/blog/best-time-to-visit-keyna": "/blog/best-time-to-visit-kenya",
	"/trip/kedarkantha": "/trip/kedarkantha-trek-packages",
	//"/trip/winter-spiti-valley-Good-Friday": "",
	"/slider/4": "/",
	"/trip/spiti-valley-bike-trips": "/trip/spiti-valley-bike-tour",
	"/almaty-tour-package": "/trip/almaty-tour-package-from-delhi",
	"/Domestic-Trip-13": "/domestic",
	"/trip/vietnam": "/vietnam-tour-package",
	"/blog/best-place-to-celebrate-new-Year-in-uttarakhand":
		"/blog/best-places-to-celebrate-new-year-in-uttarakhand",
	"/leh-spiti-tour-packages": "/spiti-valley",
	"/trip/valley-of-flower": "/trip/valley-of-flowers-trek",
	"/trip/kaziranga-meghal": "/trip/kaziranga-meghalaya-tour-package",
	"/blog/time-to-visit-dhanaulti": "/blog/best-time-to-visit-dhanaulti",
	"/blog/things-to-in-bir-billing": "/blog/things-to-do-in-bir-billing",
	"/trip/winter-kashmir-long-circuit": "/trip/winter-kashmir-fullcircuit",
	"/blog/meghalaya trip packages": "/blog/places-to-visit-in-meghalaya",
	"/trip/spiti-valley-tours-from-mumbai": "/spiti-valley",
	"/trip/meghalaya-tour-packages": "/meghalaya-tour-package",
	"/trip/one-day-trip-from-delhi": "/weekend-trip-from-delhi",
	"/baku-tour-package-from-delhi": "/baku-tour-package",
	"/blog/Uttarakhand": "/blog/places-to-visit-in-uttarakhand",
	"/trip/WinterSpitiXmas": "/trip/Winter-Spiti-christmas-ny",
	"/trip/leh-ladakh-bike-": "/trip/leh-ladakh-bike-trip",
	"/Sikkim": "/trip/sikkim-trip-group",
	"/trip/magical-dubai": "/dubai-tour-package",
	"/customized-kashmir-spring-trip": "/kashmir-tour-package",
	"/trip/leh-to-leh-with-Turtuk-including-flights":
		"/trip/leh-to-leh-with-Turtuk",
	"/blog/foods-to-try-in-shimla": "/blog/foods-in-shimla",
	"/trip/MeghalayaBackpackingX'masNewYear": "/trip/meghalaya-christmas-ny",
	"/2020": "/",
	"/enquiry-page": "/",
	"/trip/chopta-chandrashila-trek": "/trip/chopta-chandrashila-trek-tungnath",
	"/public/assets/images/underline.svg": "/",
	"/trip/Newyear-bali-gili-package": "/trip/xmas-bali-tour-package",
	"/Europe-tour-package":"/europe-tour-packages",
	"/trip/singapore-trip-package":"/trip/singapore-trip-with-flight",
	"/trip/leh-ladakh-bike-trip":"/trip/ladakh-bike-trip"
};
const nextConfig = {
	output: "standalone",
	// This setting is crucial for Amplify deployments
	trailingSlash: false,
	siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://captureatrip.com",
	generateRobotsTxt: true,
	experimental: {
		nextScriptWorkers: true,
		optimizePackageImports: ["icon-library"],
	},
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				// destination: "https://captureatrip.com/api/:path*",
				destination: "http://localhost:3000/api/:path*",
			},
		];
	},
	async redirects() {
		return Object.entries(redirectMap).map(([source, destination]) => ({
			source,
			destination,
			permanent: true,
		}));
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "captureatrip.s3.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "captureatrip-cms-storage.s3.ap-south-1.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "captureatrip-static-server.s3.ap-south-1.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "captureatrip-new-website.s3.ap-south-1.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
		],
	},
	async headers() {
		return [
			{
				// matching all API routes
				source: "/api/:path*",
				// destination: "https://captureatrip.com/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: "*" },
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
					},
					{
						key: "Access-Control-Allow-Headers",
						value:
							"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
					},
				],
			},
		];
	},
};

module.exports = withBundleAnalyzer(nextConfig);

// export default nextConfig;
