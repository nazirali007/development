import MaxWidthContent from "@/components/max-width-content";
import NavBar from "@/components/nav-bar";
import ScrollButton from "@/components/scroll-button";
import { cn } from "@/lib/utils";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Capture a Trip's disclaimer outlines our liability and responsibility regarding site content, third-party links, and external information. Use our site with care.",
  alternates: {
    canonical: '/disclaimer',
  },
};


const guid: {
  id: number;
  description: string;
  benefits?: string;
}[] = [
    {
      id: 1,
      description:
        "Capture a Trip provides the www.captureatrip.in Web site as a service to the public and Web site owners.",
    },
    {
      id: 2,
      description:
        "Capture a Trip is not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use, reference to, or reliance on any information contained within the site. While the information contained within the site is periodically updated, no guarantee is given that the information provided in this Website is correct, complete, and up-to-date.",
    },
    {
      id: 3,
      description:
        "Although the Capture a Trip Website may include links providing direct access to other Internet resources, including Web sites, Capture a Trip is not responsible for the accuracy or content of information contained in these sites.",
    },
    {
      id: 4,
      description:
        "Links from captureatrip.in to third-party sites do not constitute an endorsement by Capture a Trip of the parties or their products and services. The appearance on the Web site of advertisements and product or service information does not constitute an endorsement by Capture a Trip.",
    },
  ];

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
            Disclaimer
          </div>
        </div>

        <MaxWidthContent className='mb-20 flex min-h-screen w-full flex-col gap-y-12 px-2 sm:px-4 md:px-6'>
          <div className='mt-20 flex flex-col gap-y-8'>
            <ul className='grid gap-y-8'>
              {guid.map((g) => (
                <li key={g.id} className='flex flex-col gap-y-4 list-disc'>
                  <Para>{g.description}</Para>
                </li>
              ))}
            </ul>

          </div>
        </MaxWidthContent>
      </div>
    </>
  );
}

const Para = ({ children }: { children: React.ReactNode }) => {
  return <p className='text-lg font-normal md:text-xl'>{children}</p>;
};
