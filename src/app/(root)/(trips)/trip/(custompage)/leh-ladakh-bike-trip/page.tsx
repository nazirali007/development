import DateShow from "@/components/date-show";
import GetQuoteSubPageForm from "@/components/get-quote-sub-page-form";
import { formatIndianRupees } from "@/lib/utils";
import { IndianRupee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedNumber from "@/components/reusable/animated-number";
import ImageSlideShow from "@/components/images-slideshow";
import AboutUs from "@/components/about-us";
import InclusionExclusion from "@/components/inclusion-exclusion";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { SendEnquiryButton } from "@/components/trip-action-button";
import { MessagesSquare } from "lucide-react";
import { getStrapiTripPageContent } from "@/lib/strapi";
import showdown from "showdown";
import MaxWidthContent from "@/components/max-width-content";
import TripsShower from "@/components/trips-shower";
import datatrip from "@/datatrip.json"
import { categoryData, getTripData, blogData } from "@/lib/express";
import Accordions from "@/components/reusable/accordion";
import Reviews from "@/components/reusable/reviews";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
	const strapiContent = await getStrapiTripPageContent({
		slug: "leh-ladakh-bike-trip",
	});

	if (!strapiContent) {
		return notFound(); // Redirect to 404 page if data is not found
	}
	let keywords: any = [];

	if (strapiContent.metakeywords) {
		keywords.push(strapiContent.metakeywords);

		return {
			title: strapiContent.metatitle,
			description: strapiContent.metadescription,
			keywords: keywords,
			alternates: {
				canonical: `/trip/${strapiContent.slug}`,
			},
		};
	}

	return {
		title: strapiContent.metatitle,
		description: strapiContent.metadescription,
		keywords: keywords,
		alternates: {
			canonical: `/trip/${strapiContent.slug}`,
		},
	};
}

export default async function Page() {
	// let slug = 'leh-ladakh-bike-trip'
	const strapiContent = await getStrapiTripPageContent({
		slug: "leh-ladakh-bike-trip",
	});

	const tripData = await getTripData({ slug: "leh-ladakh-bike-trip" });

	const {
		bannerimageurl,
		bannerimage,
		name,
		titledescription,
		itinerarypdfurl,
		coverimage,
		coverimageurl,
		itineraryPdf,
		price,
		discount,
		isCustomized,
		prebooking,
		durationdays,
		pickup,
		description,
		itinerary,
		inclusions,
		exclusions,
		note,
		slug,
		costing,
		reviewvideourl,
		relatedimagesurl,
		schemamarkup,
		// categories,
		smalldescription,
		itineraryaccordion,
		// categoriesSlug,
		...data
	} = tripData;

	// const categoriesSlug: string[] = [];

	let currentDate = new Date();
	let dates = data.dates;

	dates = dates.filter((date: string) => new Date(date) >= currentDate);

	const relatedTripData = await categoryData({
		slug: "leh-ladakh-tour-packages",
	});
	const { trips } = relatedTripData;
	const converter = new showdown.Converter();
	interface SEOData {
		id: number;
		title: string;
		description: string;
	}
	const getBlogData = await blogData({ slug: "a-bike-tour-through-ladakh-a-memorable-journey,easy-guide-to-understanding-the-best-time-to-visit-Ladakh-on-bike,best-bikes-in-india-for-ladakh-trip,how-to-plan-leh-ladakh-bike-trip" })
	const seoData: SEOData[] = [
		{
			id: 1,
			title: "How much does a Ladakh bike trip cost?",
			description: "The average cost for a Ladakh bike trip will be from 20,000 to 35,000. The cost may vary depending on the length of the trip and the mode of transport you choose.",
		},
		{
			id: 2,
			title: "Which is the best month to visit Ladakh by bike?",
			description: "The best time to visit Leh Ladakh depends upon individual preferences. However, Ladakh is renowned for its nearly year-round extraordinarily low temperatures. The summer month from April to July is the ideal time to explore Ladakh, when temperatures range between 15 to 30 degrees Celsius.",
		},
		{
			id: 3,
			title: "Is a Leh Ladakh bike trip worth it?",
			description: "Yes, the Leh Ladakh bike trip is very much worth it especially for adventure seekers as the place offers breathtaking views along the way, which leaves a long-lasting impression in your mind.",
		},
		{
			id: 4,
			title: "How many days are enough for a Ladakh bike trip?",
			description: "For a Ladakh bike trip, 3 to 4 days are enough, you cover the major attractions of the place",
		},
		{
			id: 5,
			title: "Is 4 days enough for a Ladakh trip?",
			description: "Yes, a 4-day trip is sufficient for the Ladakh trip, you can cover the major attractions of the place during this time.",
		},
		{
			id: 6,
			title: "Which bikes are rented in Ladakh?",
			description: "Many bikes are rented in Ladakh, such as KTM 390, Royal Enfield, Bajaj, Yamaha, and BMW. You can choose it according to your taste and preferences. ",
		},
		{
			id: 7,
			title: "How many km for a Ladakh bike trip?",
			description: "Ladakh bike trip distance varies according to the different starting points. However, the average km for the Ladakh bike trip is between 420km to 470km.",
		},
	];
	return (
		<>
			<div
				style={{ backgroundImage: `url(${bannerimageurl})` }}
				className='relative z-20 flex h-[95vh] w-full flex-col items-center justify-center bg-cover bg-fixed bg-bottom '
			>
				{/* Json Schema LD */}
				{schemamarkup && (
					<script
						type='application/ld+json'
						dangerouslySetInnerHTML={{ __html: JSON.stringify(schemamarkup) }}
					/>
				)}
				<div className='absolute left-0 top-0 z-10 h-full w-full bg-black/40'></div>

				<div className='z-10 text-base font-bold capitalize text-white md:text-xl '>
					I Came, I Saw, I Captured
				</div>
				<h1 className='z-10 mx-4 text-center text-3xl font-bold capitalize text-white md:text-6xl'>
					{name}
				</h1>

				<div className='text-white md:w-1/2'></div>

				<div className='absolute bottom-0 z-10 mb-20 flex  w-full flex-col-reverse items-start justify-center gap-1 px-4 text-lg font-bold capitalize text-white md:flex-row md:items-center md:gap-4 md:text-3xl'>
					<div className='flex items-end gap-2'>Starting from ₹23,999</div>
				</div>

				<div className='absolute -bottom-4 left-0 right-0 z-20 w-full justify-center bg-primaryLight px-2 py-2 text-center text-sm font-bold text-white md:text-base'>
					<AnimatedNumber counter={25000} duration={2} start={24000} />+ people
					have travelled with us. Check out their{" "}
					<Link href='/reviews' className='inline cursor-pointer underline'>
						reviews!
					</Link>
				</div>
			</div>

			{/* Buttons for Small Devices */}
			<div className='fixed bottom-0 left-0 right-0 z-[999] mx-2 mb-2 overflow-y-visible rounded-md bg-white/90 shadow-xl backdrop-blur-sm md:hidden'></div>
			<div className='flex flex-col justify-center'>
				{/* About */}
				<div className='mb-20 flex w-full flex-col items-center justify-center gap-8 px-8 md:flex-row  md:justify-between'>
					{relatedimagesurl.length > 1 && (
						<div
							className='relative w-full lg:w-2/5 overflow-hidden bg-cover bg-center md:h-[50vh] lg:h-[70vh]'
							style={{
								backgroundImage: `url(${relatedimagesurl[1]})`,
								aspectRatio: 1,
								clipPath:
									"polygon(99.49% 57.16%,75.26% 93.15%,32.01% 96.65%,2.31% 65.02%,8.52% 22.08%,45.97% 0.16%,86.45% 15.77%)",
							}}
						>
							<div className='absolute left-0 top-0 h-full bg-black/10'></div>
						</div>
					)}
					<div id='about' className='flex w-full lg:w-3/5 flex-col gap-2'>
						{/* {strapiContent.titledescription &&
								<div className='text-xl font-bold text-black/80 md:text-4xl'>
									{strapiContent.titledescription}
								</div>
							} */}
						{/* HERE */}
						{smalldescription ? (
							<AboutUs
								tripdescription={converter.makeHtml(description)}
								smalldescription={smalldescription}
								title={titledescription}
							/>
						) : (
							<AboutUs
								tripdescription={converter.makeHtml(description)}
								title={titledescription}
							/>
						)}
					</div>
				</div>
				{/* Trips */}
				<MaxWidthContent className='w-full pb-16 pt-8'>
					<TripsShower Trips={trips} />
				</MaxWidthContent>
				<section className='mb-[3rem] flex w-full justify-center px-4 py-4 md:mb-[6.25rem] md:px-8'>
					<div className='flex w-full max-w-5xl flex-col items-center gap-6 md:gap-8'>
						<h2 className='text-center text-[1.5rem] font-[700] text-[#212529] md:text-[2.25rem]'>
							Best Ladakh Bike Tour Package
						</h2>
						<div className='w-[95%] overflow-x-auto border border-[#D1D5DB] md:w-[90%]'>
							<table className='w-full border-collapse'>
								<thead>
									<tr className='border-b border-[#D1D5DB]'>
										<th className='border-r border-[#D1D5DB] p-1 text-[0.875rem] font-[600] text-[#030712] md:p-1.5 md:text-[1.25rem] lg:font-[700]'>
											Ladakh Bike Trip Package
										</th>
										<th className='border-r border-[#D1D5DB] p-1 text-center text-[0.875rem] font-[600] text-[#030712] md:p-1.5 md:text-[1.25rem] lg:font-[700]'>
											Duration
										</th>
										<th className='border-r border-[#D1D5DB] p-1 text-center text-[0.875rem] font-[600] text-[#030712] md:p-1.5  md:text-[1.25rem] lg:font-[700]'>
											Price
										</th>
										<th className='p-1 text-center text-[0.875rem] font-[600] text-[#030712] md:p-1.5 md:text-[1.25rem] lg:font-[700] '>
											Itinerary
										</th>
									</tr>
								</thead>
								<tbody>
									<tr
										className='border-b border-[#D1D5DB] transition-colors hover:bg-gray-50'
									>
										<td className='border-r border-[#D1D5DB] p-1 text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											Leh Ladakh Bike Trip From Srinagar
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											10D/9N
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											<span className='font-semibold'>
												₹34,999
											</span>
										</td>
										<td className='p-1 text-center text-[0.75rem] font-[600] md:p-1.5 lg:text-[1rem]'>
											<a
												href={'/trip/srinagar-to-leh-bike-trip'}
												className='text-[#007DBC] transition-colors hover:text-[#005d8c]'
											>
												View Itinerary
											</a>
										</td>
									</tr>

								</tbody>
								<tbody>
									<tr
										className='border-b border-[#D1D5DB] transition-colors hover:bg-gray-50'
									>
										<td className='border-r border-[#D1D5DB] p-1 text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											Leh Ladakh Bike Trip From Manali
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											9D/8N
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											<span className='font-semibold'>
												₹30,499
											</span>
										</td>
										<td className='p-1 text-center text-[0.75rem] font-[600] md:p-1.5 lg:text-[1rem]'>
											<a
												href={'/trip/ladakh-bike-trip-from-manali'}
												className='text-[#007DBC] transition-colors hover:text-[#005d8c]'
											>
												View Itinerary
											</a>
										</td>
									</tr>

								</tbody>
								<tbody>
									<tr
										className='border-b border-[#D1D5DB] transition-colors hover:bg-gray-50'
									>
										<td className='border-r border-[#D1D5DB] p-1 text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											Srinagar Kargil Leh
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											8D/7N
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											<span className='font-semibold'>
												₹30,499
											</span>
										</td>
										<td className='p-1 text-center text-[0.75rem] font-[600] md:p-1.5 lg:text-[1rem]'>
											<a
												href={'/trip/srinagar-kargil-leh'}
												className='text-[#007DBC] transition-colors hover:text-[#005d8c]'
											>
												View Itinerary
											</a>
										</td>
									</tr>

								</tbody>
								<tbody>
									<tr
										className='border-b border-[#D1D5DB] transition-colors hover:bg-gray-50'
									>
										<td className='border-r border-[#D1D5DB] p-1 text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											Leh to Leh with Turtuk - 7 Days
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											7D/6N
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											<span className='font-semibold'>
												₹20,999
											</span>
										</td>
										<td className='p-1 text-center text-[0.75rem] font-[600] md:p-1.5 lg:text-[1rem]'>
											<a
												href={'/trip/leh-to-leh-with-Turtuk'}
												className='text-[#007DBC] transition-colors hover:text-[#005d8c]'
											>
												View Itinerary
											</a>
										</td>
									</tr>

								</tbody>
								<tbody>
									<tr
										className='border-b border-[#D1D5DB] transition-colors hover:bg-gray-50'
									>
										<td className='border-r border-[#D1D5DB] p-1 text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											Leh to Leh with Turtuk & Tso Moriri - 8 days
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											8D/7N
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											<span className='font-semibold'>
												₹23,499
											</span>
										</td>
										<td className='p-1 text-center text-[0.75rem] font-[600] md:p-1.5 lg:text-[1rem]'>
											<a
												href={'/trip/leh-to-leh-turtuk-tsomoriri'}
												className='text-[#007DBC] transition-colors hover:text-[#005d8c]'
											>
												View Itinerary
											</a>
										</td>
									</tr>

								</tbody>
								<tbody>
									<tr
										className='border-b border-[#D1D5DB] transition-colors hover:bg-gray-50'
									>
										<td className='border-r border-[#D1D5DB] p-1 text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											Leh to Leh with Nubra & Pangong - 6 Days
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											6D/5N
										</td>
										<td className='border-r border-[#D1D5DB] p-1 text-center text-[0.75rem] font-[600] text-[#212529] md:p-1.5 lg:text-[1rem]'>
											<span className='font-semibold'>
												₹24,999
											</span>
										</td>
										<td className='p-1 text-center text-[0.75rem] font-[600] md:p-1.5 lg:text-[1rem]'>
											<a
												href={'/trip/leh-to-leh'}
												className='text-[#007DBC] transition-colors hover:text-[#005d8c]'
											>
												View Itinerary
											</a>
										</td>
									</tr>

								</tbody>
							</table>
						</div>
					</div>
				</section>


				<section className="w-full px-4 md:px-12  ">
					<h2 className="w-full  mb-[2.5rem] md:mb-[3rem] lg:mb-[3.75rem] text-center font-[700] text-[1.5rem] md:text-[2.25rem] leading-[2.5rem] text-[#212529] ">
						Frequently Asked Questions
					</h2>
					<div className="w-full mb-[3rem] md:mb-[6.25rem]">
						<Accordions data={seoData} />
					</div>



					<div className="px-2 md:px-20 mb-[3rem] md:mb-[6.25rem]">
						<h2 className="w-full mb-[2.5rem] md:mb-[3rem] lg:mb-[3.75rem]  text-center font-[700] text-[1.5rem] md:text-[2.25rem] leading-[2.5rem] text-[#212529]">
							Travel Tips for Your Leh Ladakh Bike Trip
						</h2>
						<div className=" p-2 bg-white/90 lg:p-6 drop-shadow-md rounded-md">
							<p className="text-md pl-6 mb-[1rem] md:mb-[2rem] font-[600] lg:text-lg">Leh Ladakh Bike trip is once in a lifetime experience for every bike rider or a adventure enthusiast. But before starting a bike trip to Leh Ladakh one need to do proper planning and need to follow certain tips to ensure a safe and smooth journey.</p>
							<ol className="text-base lg:text-md font-[400]">
								<li><span className="text-md lg:text-lg font-[600]">Choosing the right bike</span>: It is important to choose a powerful and reliable bike for the Leh Ladakh bike trip to ensure a smooth journey through the rough terrain of Ladakh. Some of the best bikes for Leh ladakh rough terrains are Royal Enfield, Himalayan, bajaj Dominor 400, KTM, and Yamaha.</li>
								<li><span className="text-md lg:text-lg font-[600]">Essential permits</span>: As Ladakh is located near the border area of India and China, certain areas require permits for both Indian and foreign tourists in order to roam freely. Some of the places in Ladakh that need permits are Nubra valley, Pangong lake, Khardung La Pass, Chang La Pass, Moriri lake and many more.</li>
								<li><span className="text-md lg:text-lg font-[600]">Packing essentials</span>: It is important to pack your bag with essentials which include riding gears like helmet knees and elbow cap, Warm clothes, Bike Spares & Repair Kit. These are some of the important things which you should must keep in your bags for a smooth and hassle free journey. </li>
								<li><span className="text-md lg:text-lg font-[600]">Proper acclimatization</span>: Ladakh is situated at a great height and therefore proper Acclimatization is required. Symptoms like headache, nausea, dizziness, breathlessness often arise when you visit high passes, in order to avoid AMS you should keep yourself hydrated throughout the journey, should also avoid drinking alcohol or doing smoking while doing the bike trip.</li>
								<li><span className="text-md lg:text-lg font-[600]">Check weather and road conditions</span>: Ladakh has an uncertain climate, therefore if you are planning to do Leh Ladakh bike trip then it is necessary to keep a check on weather and road conditions for a smooth journey.</li>

							</ol>
						</div>
					</div>


					<div className="blogs px-2 md:px-20 w-full ">
						<h2 className="font-[700] text-[1.5rem] md:text-[2.25rem]  text-center mb-[2.5rem] md:mb-[3rem] lg:mb-[3.75rem]">Leh Ladakh Blogs</h2>
						<div className="w-full flex flex-col items-between xl:flex-row xl:justify-between gap-[1rem] md:gap-[1.25rem] ">
							<div className="basis-1/2 max-h-[70vh] md:h-[100vh]  lg:h-[70vh] rounded-xl p-2 md:p-4 flex flex-col border border-[#D1D5DB]">
								<div className="w-full rounded-xl relative h-[20vh] md:h-[2/3]  xl:h-full overflow-hidden ">
									<Image
										src={getBlogData[0]?.bannerimageurl ?? getBlogData[0]?.bannerimage}
										alt={getBlogData[0]?.bannerimagealt ?? "ladakh trip"}
										layout="fill"
										className='object-cover  object-center'
									/>
								</div>
								<div className="flex text-[#111827] text-[1rem] md:text-[1.25rem] font-[600] flex-col mt-4">
									<div >{getBlogData[0]?.title ?? "Ladakh tour blog"}</div>
								</div>
								<div className="flex text-[0.75rem] md:text-[1rem]  text-[#111827] font-[600] justify-between mt-2">
									<div>{getBlogData[0]?.publishedAt.slice(0, 10)} | 5 Min Read</div>
									<a href={`https://www.captureatrip.com/blog/${getBlogData[0]?.slug}`} target="_blank" className="text-[#007DBC] flex items-center gap-1 lg:gap-2">Read It
										<Image
											src="/Line arrow(1).svg"
											alt={"ladakh trip"}
											width={100}
											height={100}
											className='w-[10px] md:w-[14px] h-auto'
										/>

									</a>

								</div>

							</div>
							<div className="basis-1/2 max-h-[70vh] md:h-[100vh] lg:h-[70vh] gap-[1rem] md:gap-[1.25rem] flex flex-col">
								{getBlogData?.slice(1, 4)?.map((item: any) => (
									<div key={item?.id} className="w-full border border-[#D1D5DB] flex-grow p-1 h-full min-h-[90px] md:min-h-[120px] md:p-2 flex gap-2 rounded-xl">
										<div className="w-1/4 rounded-xl relative max-h-[200px] lg:min-h-[100px] lg:max-h-[300px] xl:h-full overflow-hidden ">
											<Image
												src={item?.bannerimageurl ?? item?.bannerimage}
												alt={item?.bannerimagealt ?? "ladakh trip"}
												layout="fill"
												className='object-cover  object-center'
											/>
										</div>
										<div className="w-3/4 text-[#111827] font-[600] flex gap-2 justify-evenly py-1 lg:py-3 md:gap-4 flex-col h-full">
											<div className="w-[100%] md:w-[80%] text-[1rem] md:text-[1.25rem] flex-grow">{item?.title ?? "Ladakh Trip blog"}</div>
											<div className="flex justify-between text-[0.75rem] md:text-[1rem] ">
												<div>{item?.publishedAt.slice(0, 10)} | 5 Min Read</div>
												<a href={`https://www.captureatrip.com/blog/${item?.slug}`} target="_blank" className="text-[#007DBC] flex items-center justify-center gap-1 lg:gap-2">Read It
													<Image
														src="/Line arrow(1).svg"
														alt={"ladakh trip"}
														width={100}
														height={100}
														className='w-[10px] md:w-[14px] h-auto'
													/>

												</a>

											</div>
										</div>
									</div>
								)
								)}
							</div>

						</div>
					</div>
				</section>
			</div>
			<div className="-mt-[6rem] w-full px-0 md:px-12">
				<Reviews data={datatrip} />
			</div>
		</>
	);
}
