import { cn } from "@/lib/utils";
import AdvanceOfferQuoteForm from "@/components/reusable/advance-quote-form";
import { SlideInView } from "@/components/reusable/framer-motion";
import { getStrapiCustomTripPageContent } from "@/lib/strapi";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic"


export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {

    // console.log("slug", params.slug);
    const strapiContent = await getStrapiCustomTripPageContent({ slug: params.slug });

    if (!strapiContent) return notFound();


    let keywords: any = [];

    if (strapiContent?.metadata?.metakeywords) {

        keywords.push(strapiContent?.metadata?.metakeywords);

        return {
            title: strapiContent?.metadata.metatitle,
            description: strapiContent?.metadata?.metadescription,
            keywords: keywords,
            alternates: {
                canonical: `/premium/${strapiContent.slug}`
            },
        };
    }


    return {
        title: strapiContent.metadata.metatitle,
        description: strapiContent.metadata.metadescription,
        keywords: keywords,
        alternates: {
            canonical: `/premium/${strapiContent.slug}`
        },
    };
}

export default async function Page({
    params,
}: {
    params: { slug: string };
}) {

    const strapiContent: any = await getStrapiCustomTripPageContent({ slug: params.slug });
    // console.log("page", strapiContent);
    if (!strapiContent) return notFound();

    const { title, description, landingvideo, videourl, formtitle, formdecription } = strapiContent;

    const VIDEO = landingvideo?.data || videourl || `https://captureatrip-new-website.s3.ap-south-1.amazonaws.com/videos/kashmir-backpacking-trip.mp4`;
    return (
        <>
            <main className="h-full w-full min-h-screen max-h-full">
                <section className="relative group shadow-sm inline-flex duration-300 ease-in-out transition">
                    <video className="peer h-full lg:mt-[0.5rem] group-hover:opacity-100 opacity-95 duration-300 ease-in-out min-h-[70vh] sm:min-h-[60vh] md:min-h-[70vh] lg:h-screen lg:max-h-[75vh] lg:w-screen transition lg:relative w-full z-0 flex object-cover object-center" autoPlay loop muted playsInline >
                        <source src={`${VIDEO}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-10">
                        <div className="flex flex-col items-center justify-center gap-5 text-white w-full h-full">
                            <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl">
                                {title}
                            </h1>
                            <p className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl">
                                {description}
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className="flex -mt-2 bg-primaryMain/70 flex-col inset-0 pb-32 px-4 items-center justify-center gap-5 md:gap-10 text-black w-full h-full bg-gradient-to-t from-transparent via-transparent to-sky-50">
                    <div className="relative text-white" id="offer-quote-form">
                        <div
                            className={cn(
                                "flex flex-col md:flex-row md:justify-between items-center gap-5 w-full h-full",
                            )}
                        >
                            <SlideInView className="w-full -mt-16 sm:pb-16 sm:-mt-20 md:-mt-24 lg:-mt-32 z-50">
                                <div
                                    className={cn(
                                        "flex flex-col gap-5 w-full h-full mx-auto max-w-5xl",
                                    )}
                                >
                                    <AdvanceOfferQuoteForm data={
                                        {
                                            formtitle: formtitle,
                                            formdescription: formdecription,
                                            destination: title,
                                        }
                                    } />
                                </div>
                            </SlideInView>
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}