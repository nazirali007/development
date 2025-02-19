import MaxWidthContent from "@/components/max-width-content";
import NavBar from "@/components/nav-bar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ExternalLink } from 'lucide-react';
import ScrollButton from "@/components/scroll-button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travel Write for Us at Captureatrip",
    description: `We're inviting writers to post travel content on our website with 60k monthly traffic. We accept all types. Read our 'Write for Us' guidelines.`,
    alternates: {
        canonical: '/travel-write-for-us',
    },
};

const guid: {
    id: number;
    title: string;
    description: string;
    benefits?: string;
}[] = [
        {
            id: 1,
            title: "Words Count",
            description:
                "Between 1000-1500 words would do okay , but short ones, especially ’quality over quantity' will be appreciated from our side.",
        },
        {
            id: 2,
            title: "Type of Content",
            description:
                "Travelling is something that thrills our audience and it is advised to have your post based around it only.",
        },
        {
            id: 3,
            title: "Pictures that Visualize",
            description:
                "The mesmerizing senerics, should include high quality, authentics with clear copyrights details.",
        },
        {
            id: 4,
            title: "Way of Writing",
            description:
                "Engaging tone with clear and correct facts that resonates preferably with our audience in a blog style format.",
        },
        {
            id: 5,
            title: "Links",
            description:
                "Feel free to link your precious and filled with authentic and original blog links or social media profiles that will inspire the audience.",
            benefits:
                "Strong presence on social media or good traffic on your own blogs will be preferred.",
        },
        {
            id: 6,
            title: "DANGER",
            description:
                "With all requests, it is advised to only take the steps further if your content is authentic original, respecting all the copyright laws.",
        },
    ];

export default function Page() {
    return (
        <>
            <div className='flex flex-col items-center bg-zinc-100/60'>
                <div
                    className={cn(
                        "relative z-20 -mt-20 flex h-[75vh] w-full flex-col items-center justify-center bg-cover bg-fixed bg-bottom ",
                        `bg-[url('https://captureatrip.s3.amazonaws.com/uploads/category/images/banner/vietnam-2.webp')] bg-cover bg-fixed bg-center`
                    )}
                >
                    <div className='absolute left-0 top-0 z-10 h-full w-full bg-black/40'></div>

                    <div className='z-10 flex flex-col items-center gap-y-1 px-2 text-center text-lg font-bold uppercase text-white sm:px-4 md:gap-y-4 md:text-xl lg:text-3xl '>
                        <h4>I Came, I Saw, I Captured</h4>
                        <p className='text-sm font-semibold md:text-xl'>
                            Share your travel story with us and get featured on our website
                        </p>
                    </div>
                    <div className='absolute bottom-0 z-10 mt-6 w-full bg-black/40 px-2 py-6 text-center text-2xl font-bold uppercase text-white sm:px-4 md:text-6xl '>
                        Want to Share your Travel Story?
                    </div>
                </div>

                <MaxWidthContent className='mb-20 flex min-h-screen w-full flex-col gap-y-12 px-2 sm:px-4 md:px-6'>
                    <div className='mt-20 flex flex-col gap-y-8'>
                        <Para>
                            <L padding letter='W' />
                            elcome my questfull travelers and aspiring storytellers ! So, are
                            you ready to share your adventure stories ? If you are someone for
                            whom the world is not just a mere place to coexist but also a way
                            to your self discovery and to inspire others about the most
                            beautiful and fascinating places that the universe offers you
                            through traveling, then you have landed in the right place.
                        </Para>

                        <Para>
                            <L padding letter='O' />
                            ur platform invites your esteemed contribution to explore your
                            experiences in the most unique ways possible and provide
                            insightful tips to our community about your mesmerizing visuals of
                            the world.
                        </Para>

                        <Para>
                            <L padding letter='A' />
                            t <Brand />, we are seeking for those for whom sharing their views
                            is either a reason to do social good or their passion that brings
                            us to conclude ‘authentic storytellers’. That will bring some
                            table talks to your fellow adventurous peeps exploring epic road
                            trips ,flavors of bustling market streets and the local culture
                            soaked through trekking over the remote mountain villages . We
                            embrace a diverse range of traveling tales ranging from
                            international escapes to our country’s hidden gems as long as they
                            resonate with our audience’s interest .
                        </Para>
                    </div>

                    <Section heading='A Win-Win that makes our readers winner'>
                        <Para>
                            <L padding letter='A' />
                            s a writer for <Brand />, you will be able to reach a global level
                            audience from our community that will also lead you to establish
                            your true travel influencer authority . In addition to that you
                            will be sharing your little diary-secrets with like minded
                            travelers from around the world and an opportunity to show your
                            true essences of being a true writer.
                        </Para>

                        <Note>
                            <span className='text-lg font-semibold md:text-xl'>Note!</span> So
                            before you move on to read the guidelines and submit your guest
                            post , we would really appreciate it if you would take a minute
                            out and explore our existing articles and blogs so that you would
                            get a better understanding about the kind of content we publish or
                            desire for our audience’s interests and preferences.

                            <Link href={`/travel-blogs`} target="_blank" title={`Travel Blogs`} className="hover:underline flex flex-row items-center gap-1 font-semibold underline-offset-8 duration-200 transition-all">

                                <span className="text-lg font-semibold md:text-xl">
                                    Our Blogs
                                </span>
                                <ExternalLink size={22} />

                            </Link>
                        </Note>
                    </Section>

                    {/* Image HERE */}

                    <Section heading='Guidelines'>
                        <Para>
                            <L padding letter='F' />
                            or a seamless and glide process to have your article or blog on
                            our page, you are requested to write within these guidelines.
                        </Para>

                        <div className='grid gap-y-8'>
                            {guid.map((g) => (
                                <div key={g.id} className='flex flex-col gap-y-4'>
                                    <h3 className='text-lg font-bold md:text-2xl'>
                                        {g.title}
                                    </h3>
                                    <Para>{g.description}</Para>
                                    {g.benefits && (
                                        <Note>
                                            <span className='text-lg font-semibold md:text-xl'>
                                                ${" "}
                                            </span>
                                            {g.benefits}
                                        </Note>
                                    )}
                                </div>
                            ))}
                        </div>

                    </Section>

                    <Section heading='Submission'>
                        <Para>

                            Submit your article to{" "}
                            <Link
                                className='font-sans text-lg italic text-primaryLight underline-offset-2 hover:underline'
                                href={`
                                mailto:captureatrip001@gmail.com
                                `}
                            >
                                captureatrip001@gmail.com
                            </Link>{" "}
                            with the following details:
                        </Para>



                        <div className='grid gap-y-8'>
                            <div className='flex flex-col gap-y-4'>
                                <h3 className='text-lg font-bold md:text-2xl'>
                                    Personal Details
                                </h3>
                                <div>
                                    <ul className='list-disc list-inside'>
                                        <li>Your Full Name</li>
                                        <li>Your Address / Residency</li>
                                        <li>Your Social Media Profiles</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4'>
                                <h3 className='text-lg font-bold md:text-2xl'>
                                    Content Details
                                </h3>
                                <div>
                                    <ul className='list-disc list-inside'>
                                        <li>Article Title / Headline and Category</li>
                                        <li>Article Content</li>
                                        <li>Article Images and Videos</li>
                                        <li>Link to Blog/Article (if applicable)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-lg md:text-xl font-sans font-semibold px-2 md:px-1 lg:px-0 py-4 underline underline-offset-4">
                            Now is the time to take your flight to the audience’s traveling guide. Grab the tickets and reach their thriving hearts.
                        </h2>


                    </Section>

                    <Section heading='For assistance'>
                        <Para>
                            <L letter='Y' />
                            ou can, Contact this mail{" "}
                            <Link
                                className='font-sans text-lg italic text-primaryLight underline-offset-2 hover:underline'
                                href={`
                            mailto:captureatrip001@gmail.com
                            `}
                            >
                                captureatrip001@gmail.com
                            </Link>{" "}
                            for regarding the article submission
                        </Para>

                        <Para>
                            <L letter='F' />
                            or a better understanding of the kind of work we aspire to, check
                            out our blogs from our website.
                        </Para>

                        <Para>
                            <L padding letter='C' />
                            an’t wait to know about the real guides and experience holders who
                            have tails that belong to their diaries but soon will be on our
                            table talks and of our audience&apos;s notepads for guidance and
                            insightful tips . Trust us ,your view will bring much more than
                            just a little info to a traveler. We ordinarily welcome you to our
                            community.
                        </Para>

                        <Para>
                            <L letter='T' />
                            hank you for your time and we are looking forward to your
                            contribution.
                        </Para>
                        <span className='text-lg font-semibold md:text-xl'>
                            Capture A Trip Team
                        </span>
                    </Section>
                </MaxWidthContent>
            </div>
        </>
    );
}

const L = ({
    letter,
    padding = false,
}: {
    letter: string;
    padding?: boolean;
}) => {
    return (
        <span
            className={cn(
                "text-2xl font-bold",
                padding ? "pl-5 pr-0.5" : "pl-0.5 pr-0.5"
            )}
            style={{ fontFamily: "cursive" }}
        >
            {letter}
        </span>
    );
};

const Brand = () => {
    return (
        <span
            className={cn(
                `font-sans text-lg italic text-primaryLight underline underline-offset-2`
            )}
        >
            ‘Capture A Trip’
        </span>
    );
};

const Para = ({ children }: { children: React.ReactNode }) => {
    return <p className='text-lg font-normal md:text-xl'>{children}</p>;
};

const Section = ({
    heading,
    children,
    className = "",
}: {
    heading: string;
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <section className={cn("flex flex-col gap-y-8 py-4", `${className}`)}>
            <h2 className='text-lg font-bold md:text-5xl'>{heading}</h2>
            {children}
        </section>
    );
};

const Note = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "mb-4 flex flex-col gap-3 rounded-md border border-primaryLight bg-primaryLight/20 p-4 text-lg font-normal text-primaryMain md:text-xl",
                `${className}`
            )}
            role='alert'
        >
            {children}
        </div>
    );
};
