import MaxWidthContent from "@/components/max-width-content";
import NavBar from "@/components/nav-bar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ExternalLink } from 'lucide-react';
import ScrollButton from "@/components/scroll-button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:"Capture a Trip’s policies on privacy, data security, and customer service ensure a transparent, trustworthy experience when booking tours and activities with us.",
    alternates: {
        canonical: '/privacy-policy',
    },

};

export default function Page() {
    return (
        <>
            <div className='flex flex-col items-center bg-zinc-100/60'>
                <div
                    className={cn(
                        "relative z-20 flex h-[75vh] w-full flex-col items-center justify-center bg-cover bg-fixed bg-bottom ",
                        `bg-[url('https://captureatrip.s3.amazonaws.com/uploads/category/images/banner/vietnam-2.webp')] bg-cover bg-fixed bg-center`
                    )}
                >
                    <div className='absolute left-0 top-0 z-10 h-full w-full bg-black/40'></div>

                    <div className='z-10 flex flex-col items-center gap-y-1 px-2 text-center text-lg font-bold uppercase text-white sm:px-4 md:gap-y-4 md:text-xl lg:text-3xl '>
                        <h4>I Came, I Saw, I Captured</h4>
                        <p className='text-sm font-semibold md:text-xl'>
                            Capture A Trip
                        </p>
                    </div>
                    <div className='absolute bottom-0 z-10 mt-6 w-full bg-black/40 px-2 py-6 text-center text-2xl font-bold uppercase text-white sm:px-4 md:text-6xl '>
                        PRIVACY POLICY
                    </div>
                </div>

                <MaxWidthContent className='mb-20 flex min-h-screen w-full flex-col gap-y-12 px-2 sm:px-4 md:px-6'>
                    <div className='mt-20 flex flex-col gap-y-8'>
                        <Para>
                            <L padding letter='T' />
                            he privacy policy is an online document that makes sure a user’s online information is protected and it is not used for anything that intends them any harm. All the pointers given under our privacy policy are valid under the Information Technology Act, 2000. This document is updated from time to time by Capture a Trip  for the betterment of the same. The current version of the privacy policy is updated on 5th November 2020
                        </Para>
                    </div>

                    <Section heading='DECLARATION'>
                        <Para>
                            <Brand /> {" "}
                            declares that we are not going to use any user information whatsoever in bad faith and/or sell the information to any third party under any condition. But if necessary and in case a legal notice is served to us in case of any legal matter, whatsoever it may be, we’re going to share the user information under the Right to Informations Act. Additionally, any legal issues will be sorted out in Delhi Court only as we’re a firm registered in New Delhi.
                        </Para>
                    </Section>


                    <Section heading='WEBSITE PRIVACY'>
                        <Para>
                            <L padding letter='O' />
                            ur website is standing there for providing services to the users and in order to that, we may ask you for your information at times. We assure you that all the information that is gathered from you is being used for facilitation purposes only and not for any malicious activity. We do not encourage data leaks or any similar schemes, which is why your information will be kept protected and only be shared with the members of the company who are associated with the facilitation of service for the user only.
                        </Para>
                    </Section>


                    <Section heading='WEBSITE DATA COLLECTION'>
                        <Para>
                            <L padding letter='T' />
                            he website asks a user for personal information including email, name, phone number, along with a set of other sets of personal information. This information is necessary for the proper execution of the services that we’re facilitating.
                        </Para>
                    </Section>


                    <Section heading='COOKIES USAGE POLICY'>
                        <Para>
                            <L padding letter='W' />
                            e use cookies on our website to improve user experience and enhance the load time for the users interacting with our website. You may opt-out of the same if you want to by disabling the cookies for our website using the web browsers that you use to visit our website.
                        </Para>
                    </Section>


                    <Section heading='OUTBOUND LINKS TO THIRD-PARTY WEBSITES'>
                        <Para>
                            <L padding letter='W' />
                            e have outbound links added to our website which will take you to a third-party website which will be completely unrelated to us. We add these links after verifying that they are operating on the standard norms and that they host good content/service. But whatever you may incur onto a website other than ours is not our liability and in case of discrepancy, we cannot be held liable.
                        </Para>
                    </Section>


                    <Section heading='USER INFORMATION PROTECTION'>
                        <Para>
                            <L padding letter='A' />
                            ny user, whoever they may be, when they enter information onto our site, it’s just so that they can avail of our services and we have no hidden agenda from collecting the information. We do not share, export, or sell this information to anyone and the data is only shared with company employees who are involved in the facilitation of services only. Other than that, we have proper security features installed on our website so that the digital data would not be accessible to anyone as well.
                        </Para>
                    </Section>


                    <Section heading='GRIEVANCE OFFICER'>
                        <Para>
                            <L padding letter='I' />
                            n the case of any discrepancy or query that you have regarding our privacy policy, please do follow up with our grievance officer on the given below information.
                        </Para>

                        <Note>
                            <span className='text-lg font-semibold md:text-xl'>Important!</span> So
                            Contact Us, If you have any questions about this Privacy Policy, please contact us by email: info@captureatrip.com
                            <Link href={`mailto:info@captureatrip.com`} target="_blank" title={`Mail info@captureatrip.com`} className="hover:underline flex flex-row items-center gap-1 font-semibold underline-offset-8 duration-200 transition-all">

                                <span className="text-lg font-semibold md:text-xl">
                                    info@captureatrip.com
                                </span>
                                <ExternalLink size={22} />

                            </Link>
                        </Note>
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
