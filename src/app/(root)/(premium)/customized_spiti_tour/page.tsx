import { Icons } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { CAT_INSTA_FOLLOWER_COUNT, CAT_GOOGLE_REVIEWS_COUNT, ITINERARIES_COUNT, CAT_FB_FOLLOWER_COUNT } from "@/server/db/static/variables";
import AnimatedNumber from "@/components/reusable/animated-number";
import Image from 'next/image';
import OfferQuoteForm from "@/components/offer-quote-form";
import { ScrollToFormButton, TripEnqCard } from "../components/scroll-to-form";
import AnimatedSVG from "../components/arrow";
import { Spotlight } from "../components/spotlight";
import { TestimonialSection } from "../components/testimonials";
import { SlideInView } from "@/components/reusable/framer-motion";
import { SpitiActivities, SpitiTrips } from "../components/Constant";

export const dynamic = "force-dynamic"

export async function generateMetadata() {

    return {
        title: "Featured Packages for you | Capture A Trip",
        description: "Capture A Trip offers the best travel packages for you to explore the world. Book your trip now and get the best deals.",
        alternates: {
            canonical: `/featured`
        },
    };
}

export default function Page() {
    return (
        <>
            <main className="h-full w-full min-h-screen max-h-full bg-primaryMain">
                <section className="group shadow-sm inline-flex duration-300 ease-in-out transition">
                    <video className="h-full lg:mt-[0.5rem] group-hover:opacity-100 opacity-95 duration-300 ease-in-out min-h-[70vh] sm:min-h-[60vh] md:min-h-[70vh] lg:h-screen lg:w-screen transition lg:relative w-full z-0 flex object-cover object-center" autoPlay controls loop muted playsInline >
                        <source src="https://captureatrip-new-website.s3.ap-south-1.amazonaws.com/videos/landing.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                    {/* <div className="top-0 absolute h-full w-full flex justify-center text-center items-center text-5xl text-white z-10">
                        Capture a Trip
                    </div>
                    <div className="absolute top-0 left-0 h-full w-full bg-black/50 z-10"></div> */}
                </section>
                <section
                    className={cn(
                        "inline-flex flex-col p-4 items-center shadow-sm bg-slate-100 text-black mt-10 justify-center gap-5 md:gap-10 w-full h-full",
                    )}
                >
                    <div
                        className={cn(
                            "bottom-10 max-w-[1220px] flex flex-row gap-3 py-5 md:bottom-0 lg:py-1 w-full h-full",
                        )}
                    >
                        <SlideInView distance={10} className='w-full flex flex-col items-center gap-4 hover:drop-shadow-sm'>
                            <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12'>
                                <Icons.insta className='absolute h-full w-full' />
                            </div>
                            <h2 className='text-center text-sm font-semibold lg:text-lg'>
                                Community of <br /><AnimatedNumber duration={2} start={Number(CAT_INSTA_FOLLOWER_COUNT - 5)} counter={CAT_INSTA_FOLLOWER_COUNT} />k+ On Instagram
                            </h2>
                        </SlideInView>
                        <SlideInView distance={10} className='w-full flex flex-col items-center gap-4 hover:drop-shadow-sm'>
                            <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12'>
                                <Icons.google className='absolute h-full w-full' />
                            </div>
                            <h2 className='text-center text-sm font-semibold lg:text-lg'>
                                <AnimatedNumber duration={2} start={Number(CAT_GOOGLE_REVIEWS_COUNT - 5)} counter={CAT_GOOGLE_REVIEWS_COUNT} />+ <br /> Google Reviews
                            </h2>
                        </SlideInView>
                        <SlideInView distance={10} className='w-full flex flex-col items-center gap-4 hover:drop-shadow-sm'>
                            <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12 '>
                                <Image src="/assets/images/tripadvisor.svg" alt="TripAdvisor" height={100} width={100} className='absolute h-full w-full scale-110' />
                            </div>
                            <h2 className='text-center text-sm font-semibold lg:text-lg'>
                                <AnimatedNumber duration={2} start={0} counter={5} /> Star <br /> on TripAdvisor
                            </h2>
                        </SlideInView>
                        <SlideInView distance={10} className='w-full flex flex-col items-center gap-4 hover:drop-shadow-sm'>
                            <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12 '>
                                <Image src="/assets/images/fb.svg" alt="TripAdvisor" height={100} width={100} className='absolute h-full w-full scale-110' />
                            </div>
                            <h2 className='text-center text-sm font-semibold lg:text-lg'>
                                <AnimatedNumber duration={2} start={0} counter={CAT_FB_FOLLOWER_COUNT} />k+ Followers <br /> on Facebook
                            </h2>
                        </SlideInView>
                    </div>
                </section>

                <section
                    className="flex bg-primaryMain/80 flex-col inset-1 px-4 py-8 lg:py-16 mt-30 items-center justify-center gap-5 md:gap-10 text-black w-full h-full bg-gradient-to-b from-transparent via-transparent to-sky-100">
                    <div className="text-white mt-8" id="offer-quote-form">
                        <SlideInView>
                            <h1 className="text-4xl font-bold text-center md:text-4xl lg:text-5xl text-zinc-50 animate-slidein opacity-0 [--slidein-delay:300ms]">
                                <span className="text-primary-500">Explore</span> the best of <span className="text-primary-500">World{` `}</span>
                                with <span className="relative text-primaryLight/90 font-bold text-6xl drop-shadow">
                                    Capture a Trip
                                </span>
                            </h1>


                            <p className="text-center text-white font-medium text-base md:text-lg lg:text-lg mt-4 md:mt-3 animate-slidein opacity-0 [--slidein-delay:500ms]">
                                We have <AnimatedNumber duration={2} start={0} counter={ITINERARIES_COUNT} />+ itineraries for you to explore
                            </p>
                        </SlideInView>


                        <div
                            className={cn(
                                "flex flex-col md:flex-row md:justify-between items-center gap-5 mt-10 md:mt-16 lg:mt-24 w-full h-full",
                            )}
                        >
                            <SlideInView>
                                <div
                                    className={cn(
                                        "flex flex-col gap-5 py-10 w-full h-full",
                                    )}
                                >
                                    <OfferQuoteForm>
                                        <div
                                            className={cn(
                                                "md:inline-block flex-col hidden gap-5 w-full h-auto",
                                            )}
                                        >
                                            <Image
                                                src="/assets/images/capture-a-memory.jpeg"
                                                alt="Hero Image"
                                                height={700}
                                                width={500}
                                                className="rounded-md h-full w-full object-cover object-center"
                                                blurDataURL='/assets/249.jpg'
                                                // quality={50}
                                                loading='lazy'
                                            />
                                        </div>
                                    </OfferQuoteForm>
                                </div>
                            </SlideInView>
                        </div>
                    </div>
                </section>

                <section
                    className="flex flex-col w-full h-full bg-primaryMain/80"
                >

                    <div className='flex flex-col py-6 px-6 md:px-8 w-full text-center items-center justify-center'>
                        <h2 className='text-3xl sm:text-4xl p-4 md:text-5xl text-center flex flex-col items-center justify-center w-full lg:text-6xl bg-gradient-to-r from-sky-100 to-sky-200 bg-clip-text text-transparent font-black md:text-start'>
                            Featured Packages for you...
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className='pb-16 pt-8 w-full'>
                        <div className='grid max-w-7xl mx-auto grid-cols-1 lg:grid-col gap-5 px-2'>
                            <Spotlight
                                fill="white"
                            />
                            {SpitiTrips.map((trip, i: number) => (
                                <TripEnqCard key={i} data={trip} />
                            ))}
                        </div>


                        <div
                            className={cn(
                                "flex px-2 max-w-7xl mx-auto sm:px-4 mb-16 md:px-6 lg:px-1 justify-center items-center text-start flex-col gap-0 py-10 w-full h-full",
                            )}
                        >
                            <AnimatedSVG className={'hidden mb-5 md:block text-primaryDark/50 ml-12 w-1/2 mt-0'} />
                            <h2
                                className='text-4xl sm:text-4xl p-4 md:text-5xl text-center flex flex-col items-center justify-center w-full lg:text-6xl bg-gradient-to-r from-sky-100 to-sky-200 bg-clip-text text-transparent font-black md:text-start'
                            >
                                Activities you can do
                            </h2>


                            <div
                                className={cn(
                                    "grid grid-cols-2 md:grid-cols-3 mt-8 w-full h-full bg-transparent",
                                )}
                            >
                                {SpitiActivities.map((data: {
                                    id: number;
                                    title: string;
                                    image: string;
                                }, i: number) => (
                                    <SlideInView key={i}
                                        className={cn(
                                            "flex group flex-col gap-4 w-full h-full justify-center items-center text-center p-4",
                                            i == 0 && "md:border-r md:border-b border-primaryDark/50",
                                            i == 1 && "md:border-b border-primaryDark/50",
                                            i == 2 && "md:border-l md:border-b border-primaryDark/50",
                                            i == 3 && "md:border-r border-primaryDark/50",
                                            i == 4 && "md:border-r border-primaryDark/50",
                                        )}>
                                        <div
                                            className={cn(
                                                "relative h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40",
                                            )}
                                        >
                                            <Image
                                                src={data.image}
                                                alt={data.title}
                                                height={500}
                                                width={500}
                                                className="rounded-md group-hover:scale-[1.05] duration-300 ease-in-out transition h-full w-full object-cover object-center hover:shadow-lg shadow-zinc-50"
                                                blurDataURL='/assets/249.jpg'
                                                // quality={50}
                                                loading='lazy'
                                            />
                                        </div>
                                        <h3
                                            className={cn(
                                                "text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-br from-slate-50 to-primaryLight bg-clip-text text-transparent",
                                            )}
                                        >
                                            {data.title}
                                        </h3>
                                    </SlideInView>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="w-full -inset-2 border-y border border-primaryDark/50 bg-primaryMain">
                        <TestimonialSection />
                    </div>
                </section>

                <section
                    className={cn(
                        "inline-flex flex-col p-4 items-center shadow-sm bg-slate-200 mt-10 justify-center gap-5 md:gap-10 text-primaryMain w-full h-full",
                    )}
                >
                    <div
                        className={cn(
                            "max-w-[1220px] flex-col gap-2 justify-center items-center mx-auto flex py-5 lg:py-1 w-full h-full",
                        )}
                    >
                        <h1
                            className="text-3xl font-bold  animate-slidein opacity-0 [--slidein-delay:500ms] text-center sm:text-4xl mg:text-5xl lg:text-6xl"
                        >
                            Still Confused, where to go? <br />

                        </h1>

                        <p className="text-centerfont-medium text-base md:text-lg lg:text-lg mt-4 md:mt-3 animate-slidein opacity-0 [--slidein-delay:700ms]">
                            We have a team of experts who will help you to plan your trip.
                        </p>

                        <ScrollToFormButton className="relative w-full max-w-60 bg-primaryMain mt-10">
                            Get a Quote
                        </ScrollToFormButton>
                    </div>
                </section>

            </main>
        </>
    )
}