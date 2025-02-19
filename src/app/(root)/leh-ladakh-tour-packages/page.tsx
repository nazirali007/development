import React, { useState } from "react";
import SocialMediaHero from "@/components/social-media-hero";
import Image from "next/image";
import GetQuoteHeroForm from "@/components/get-quote-hero-form";
import TripsShower from "@/components/trips-shower";
import MaxWidthContent from "@/components/max-width-content";
import DynamicDescription from "@/components/dynamic-description";
import AboutUs from "@/components/about-us";
import { getStrapiCatergoryContent } from "@/lib/strapi";
import dataladakh from "@/dataladakh.json";
import showdown from "showdown";
import { notFound } from "next/navigation";
import PageDescription from "@/components/page-description";
import Description from "@/components/Description";
import { categoryData, blogData } from "@/lib/express"
import { formatIndianRupees } from "@/lib/utils";
import { db } from "@/db/drizzle";
import { eq, sql, inArray, and, isNotNull } from "drizzle-orm";
import { categories, filesRelatedMorphs, tripsCategoriesLinks, files, trips } from "@/db/schema";
import { Loader } from "lucide-react";
import Accordions from "@/components/reusable/accordion";
import Reviews from "@/components/reusable/reviews";
import CountOnUs from "@/components/count-on-us";
import InDoubt from "@/components/in-doubt";
import LadakhYT from "@/components/ladakh-yt";
// import LatestOffer from "@/components/LatestOffer";
export const dynamic = "force-dynamic"

type Trip = {
    id: number;
    name: string;
    durationdays: number;
    price: number;
    discount: number;
    slug: string;
}
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const startTime = performance.now();
    // const strapiContent = await getStrapiCatergoryContent({ slug: params.slug });
    const drizzleData = await db
        .select({
            metatitle: categories.metatitle,
            metadescription: categories.metadescription,
            metakeywords: categories.metakeywords, // Assuming the column name is 'metakeywords' for keywords
            slug: categories.slug
        })
        .from(categories)
        .where(eq(categories.slug, "leh-ladakh-tour-packages"))
        .limit(1)
        .then(results => results[0] || null);
    if (!drizzleData) return notFound(); // 404
    // console.log(drizzleData , "-----------");
    // const worker = new Worker('./worker.ts')
    // worker.postMessage([40, 2]);
    // worker.addEventListener('message', event => {
    // 	console.log(event.data);
    // });
    let keywords = drizzleData?.metakeywords?.split(', ') || [];
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`\n\n drizzle data for meta data of ${params.slug} took  ${executionTime.toFixed(2)} milliseconds\n\n`);
    return {
        title: drizzleData?.metatitle ?? '',
        description: drizzleData?.metadescription ?? '',
        keywords: keywords || '',
        alternates: {
            canonical: `/${drizzleData?.slug}`
        },
    };
}
export default async function Page() {
    const startTime = performance.now();

    const data = await categoryData({ slug: "leh-ladakh-tour-packages" })
    if (!data) {
        return notFound(); // Redirect to 404 page if data is not found
    }
    const {
        id,
        slug,
        title,
        about,
        titleAbout,
        bannerimage,
        bannerimageurl,
        bannerimagealt,
        schemaMarkup,
    } = data.category
    //console.log(data, "-======================");
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(
        `Express data fetch for ${slug} took ${executionTime.toFixed(2,)} milliseconds`,
    );
    interface SEOData {
        id: number;
        title: string;
        description: string;
    }
    const getBlogData = await blogData({ slug: "21-interesting-facts-of-ladakh,the-scary-story-of-ladakh,solo-trip-to-ladakh-the-experience-of-a-lifetime,shopping-ladakh-market" })
    //console.log(getBlogData, "===")
    const seoData: SEOData[] = [
        {
            id: 1,
            title: "How many days are enough to visit Ladakh?",
            description: "Ideally, it takes about five to ten days to cover the major attractions of Ladakh. If trekking is your primary objective or you want to plan a road trip to Ladakh you might need to extend the trip's duration. However, the duration of the Leh Ladakh tour package will always depend on the kind of trip you are planning and how you are planning to travel.",
        },
        {
            id: 2,
            title: "What is the best time to visit Leh Ladakh?",
            description: "The summer is considered the peak tourist time. It's a good time to visit Ladakh for a comfortable, convenient trip because the daytime highs can reach up to 30 degrees Celsius, while the nighttime lows can drop as low as 5 degrees. These temperatures are significantly better compared to other seasons. You can also check the best time to visit Ladakh for a detailed breakdown of all the seasons.",
        },
        {
            id: 3,
            title: "What permits are required to plan a bike trip to Leh Ladakh?",
            description: "The Inner Line Permit (ILP) is necessary to enter areas of Leh Ladakh that are off-limits. These areas include Nubra Valley, Pangong Tso, and Tso Moriri. The Leh government or the internet are the two places where you can acquire the ILP. A Protected Area Permit (PAP) is additionally required for foreign visitors to enter certain border areas, such as Turtuk and Dah Hanu. During your bike ride, don't forget to bring extra copies of your permits and any necessary identity documents.",
        },
        {
            id: 4,
            title: "How can a person reach Leh Ladakh from Delhi?",
            description: "Air travel is the best way to go to Ladakh from Delhi because Leh airport has regular flights to For a quicker and more comfortable trip, take a direct flight from Delhi's Indira Gandhi International Airport to Leh's Kushok Bakula Rimpochee Airport, the main town in Ladakh.A road trip to Ladakh is an even more exciting adventure because it gives us the chance to take in the breathtaking scenery of the areas we pass through. It is crucial to remember that access to Ladakh by vehicle is limited to the summer, usually from May to October, when the high mountain passes are available. You can also check our Leh Ladakh tour packages from Delhi for hassle-free planning of your trip.",
        },
        {
            id: 5,
            title: "How much does a Leh Ladakh tour package cost?",
            description: "The cost of your Leh Ladakh trip will depend on the kind of trip you are planning and the duration of your trip. However, your total fuel cost, if you are planning a bike trip will range anywhere between 7000 to 9000. Check out CaptureATrip’s Leh Ladakh trip packages to get better clarity about the cost of your trip",
        },
        {
            id: 6,
            title: "What kind of clothes should I carry for my Leh Ladakh trip?",
            description: "While shorts and t-shirts are appropriate for daytime wear, the weather turns chilly after dusk, necessitating the wear of a pullover and jacket. Warm woollen clothing is necessary if you're climbing to summits of 4,001 meters above sea level. June and July can see rain and snowfall, so if you plan to travel during these months, bring windbreakers and raincoats. It is imperative to have waterproof shoes if you enjoy trekking.",
        },
        {
            id: 7,
            title: "What are the accommodation options available in Leh Ladakh?",
            description: "In Ladakh, a range of lodging options are available. There are several hotels, guest houses, homestays, and hostels spread out over the area. In Ladakh, lodging is simple to locate and hassle-free",
        },
    ];

    return (
        <>
            {/* <LatestOffer /> */}
            <main className="-mt-20 lg:mt-0">
                {/* Json Schema LD */}
                {schemaMarkup! && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
                    />
                )}
                <section className='relative min-h-screen max-h-screen w-full'>
                    <Image
                        // src={mergeData.bannerimage?.data?.attributes?.url || mergeData.bannerimageurl}
                        src={bannerimage! ?? bannerimageurl!}
                        rel="preload"
                        alt={"Capture A Trip Upcoming Trips"}
                        fill
                        priority
                        fetchPriority="high"
                        loading="eager"
                        // placeholder='blur'
                        // blurDataURL='/assets/249.jpg'
                        // quality={50}
                        className='object-cover object-center'
                    />
                    <div className='absolute left-0 top-0 z-0 h-full w-full bg-black/40' />
                    <div className='absolute left-0 right-0 top-0 bottom-0 z-10 flex w-full flex-col items-center justify-around'>
                        {/* <div className='md:w-3/4 flex justify-evenly md:grid grid-cols-12 h-full mt-60 sm:mt-20'> */}
                        <div className='mt-40 flex w-full justify-around lg:mt-20'>
                            <div className='col-span-12 flex items-center  lg:col-span-8 lg:w-2/5'>
                                <h1 className='text-center text-3xl font-bold text-white md:text-5xl lg:text-start lg:text-5xl xl:text-7xl'>
                                    {title}
                                </h1>
                            </div >
                            <div className='col-span-4 hidden w-1/4 items-center lg:flex'>
                                <GetQuoteHeroForm />
                            </div>
                        </div >
                        <div className='w-full'>
                            <SocialMediaHero position='absolute' />
                        </div>
                    </div >
                </section >
                <Description
                    heading={title!}
                    titleabout={titleAbout ?? ""}
                    description={about!}
                />

                {/* Trips */}
                <MaxWidthContent className='mb-[3rem] md:mb-[6.25rem] pt-8 w-full'>
                    <TripsShower Trips={data.trips} />
                </MaxWidthContent>
                <section className="w-full flex justify-center px-4 md:px-8 py-4 mb-[3rem] md:mb-[6.25rem]">
                    <div className="w-full max-w-5xl flex flex-col items-center gap-6 md:gap-8">
                        <h2 className="text-center text-[#212529] font-[700] text-[1.5rem] md:text-[2.25rem]">
                            Best Leh Ladakh Tour Packages
                        </h2>
                        <div className="w-[95%] md:w-[90%] overflow-x-auto border border-[#D1D5DB] bg-white">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-[#D1D5DB]">
                                        <th className="p-1 md:p-1.5 font-[600] lg:font-[700] text-[0.875rem] md:text-[1.25rem] text-[#030712] border-r border-[#D1D5DB]">
                                            Ladakh Packages
                                        </th>
                                        <th className="p-1 md:p-1.5 text-center font-[600] lg:font-[700] text-[0.875rem] md:text-[1.25rem] text-[#030712] border-r border-[#D1D5DB]">
                                            Duration
                                        </th>
                                        <th className="p-1 md:p-1.5 text-center font-[600] lg:font-[700] text-[0.875rem] md:text-[1.25rem] text-[#030712]  border-r border-[#D1D5DB]">
                                            Price
                                        </th>
                                        <th className="p-1 md:p-1.5 text-center font-[600] lg:font-[700] text-[0.875rem] md:text-[1.25rem] text-[#030712] ">
                                            Itinerary
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.trips?.map((trip: Trip, index: number) => (
                                        <tr
                                            key={trip.id}
                                            className={`border-b border-[#D1D5DB] hover:bg-gray-50 transition-colors
                    ${index === data.trips.length - 1 ? 'border-b-0' : ''}`}
                                        >
                                            <td className="p-1 md:p-1.5 font-[600] text-[0.75rem] lg:text-[1rem] text-[#212529] border-r border-[#D1D5DB]">
                                                {trip.name}
                                            </td>
                                            <td className="p-1 md:p-1.5 font-[600] text-center text-[0.75rem] lg:text-[1rem] text-[#212529] border-r border-[#D1D5DB]">
                                                {trip.durationdays}D/{trip.durationdays - 1}N
                                            </td>
                                            <td className="p-1 md:p-1.5 font-[600] text-center text-[0.75rem] lg:text-[1rem] text-[#212529] border-r border-[#D1D5DB]">
                                                <span className="font-semibold">
                                                    ₹{formatIndianRupees(Number(trip.price))}
                                                </span>
                                            </td>
                                            <td className="p-1 md:p-1.5 font-[600] text-center text-[0.75rem] lg:text-[1rem]">
                                                <a
                                                    href={`/trip/${trip.slug}`}
                                                    className="text-[#007DBC] hover:text-[#005d8c] transition-colors"
                                                >
                                                    View Itinerary
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
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

                    {/* Travel tips */}

                    <div className="px-2 md:px-20 mb-[3rem] md:mb-[6.25rem]">
                        <h2 className="w-full mb-[2.5rem] md:mb-[3rem] lg:mb-[3.75rem]  text-center font-[700] text-[1.5rem] md:text-[2.25rem] leading-[2.5rem] text-[#212529]">
                            Travel Tips for Your Next Leh Ladakh Trip
                        </h2>
                        <div className=" bg-[#FFFFFF] p-2  lg:p-6 drop-shadow-md rounded-md">
                            <ol className="text-base lg:text-md font-[400]">
                                <li><span className="text-md lg:text-lg font-[600]">Acclimatize Gradually</span>: Leh is situated at a high altitude, so take your time to acclimatize to prevent altitude sickness. Spend a couple of days resting before heading out for activities.</li>
                                <li><span className="text-md lg:text-lg font-[600]">Pack Wisely</span>: Bring warm clothing, even in the summer months, as temperatures can drop significantly. Include sturdy shoes, sunglasses, sunscreen, and a good-quality backpack.</li>
                                <li><span className="text-md lg:text-lg font-[600]">Stay Hydrated</span>: Altitude can cause dehydration, so drink plenty of water throughout your trip to stay healthy and energized.</li>
                                <li><span className="text-md lg:text-lg font-[600]">Plan for Permits</span>: Some areas, like Nubra Valley and Pangong Lake, require permits. Make sure to get the necessary documentation in advance.</li>
                                <li><span className="text-md lg:text-lg font-[600]">Choose the Right Time</span>: The best time to visit Ladakh is between June and September when the weather is pleasant and most attractions are accessible.</li>
                                <li><span className="text-md lg:text-lg font-[600]">Pack Snacks & Essentials</span>: Remote locations may not have easily accessible food or supplies. Carry enough snacks, water, and any medication you might need</li>
                            </ol>
                        </div>
                    </div>

                    {/* BOLGS */}
                    <div className="blogs px-2 md:px-20 w-full ">
                        <h2 className="font-[700] text-[1.5rem] md:text-[2.25rem]  text-center mb-[2.5rem] md:mb-[3rem] lg:mb-[3.75rem]">Leh Ladakh Blogs</h2>
                        <div className="w-full flex flex-col items-between xl:flex-row xl:justify-between gap-[1rem] md:gap-[1.25rem] ">
                            <div className="basis-1/2 max-h-[70vh] md:h-[100vh]  lg:h-[70vh] rounded-xl p-2 md:p-4 flex flex-col border border-[#D1D5DB]">
                                <div className="w-full rounded-xl relative h-[20vh] md:h-[2/3]  xl:h-full overflow-hidden ">
                                    <Image
                                        src={getBlogData[0]?.bannerimageurl ?? getBlogData[0]?.bannerimage}
                                        alt={getBlogData[0]?.bannerimagealt ?? "ladakh trip"}
                                        fill
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
                                    <div key={item?.id} className="w-full border border-[#D1D5DB] flex-grow p-1 md:p-2 flex gap-2 rounded-xl">
                                        <div className="w-1/4 rounded-xl relative max-h-[200px] lg:min-h-[100px] lg:max-h-[300px] xl:h-full overflow-hidden ">
                                            <Image
                                                src={item?.bannerimageurl ?? item?.bannerimage}
                                                alt={item?.bannerimagealt ?? "ladakh trip"}
                                                fill
                                                className='object-cover  object-center'
                                            />
                                        </div>
                                        <div className="w-3/4 text-[#111827] font-[600] flex gap-2 justify-evenly md:gap-4 flex-col">
                                            <div className="w-[100%] md:w-[80%] text-[1rem] md:text-[1.25rem]">{item?.title ?? "Ladakh Trip blog"}</div>
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

                    {/* Reviews */}

                    <div className="mb-[3rem] -px-4  md:mb-[6.25rem]  ">
                        <Reviews data={dataladakh} />
                    </div>

                </section>
                <CountOnUs />
                <LadakhYT />
                <InDoubt imgName='img-83.jpg' />
            </main >
        </>
    );
}