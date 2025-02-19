import MaxWidthContent from "@/components/max-width-content";
import NavBar from "@/components/nav-bar";
import ScrollButton from "@/components/scroll-button";
import { cn } from "@/lib/utils";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  alternates: {
    canonical: '/cancellation',
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
        "If cancellations are made 30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.",
    },
    {
      id: 2,
      description:
        "If cancellations are made 15-30 days before the start date of the trip, 75% of the trip cost will be charged as cancellation fees.",
    },
    {
      id: 3,
      description:
        "If cancellations are made within 0-15 days before the start date of the trip, 100% of the trip cost will be charged as cancellation fees.",
    },
    {
      id: 4,
      description:
        "In the case of unforeseen weather conditions or government restrictions, certain activities may be canceled and in such cases, the operator will try his best to provide an alternate feasible activity. However, no refund will be provided for the same.",
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
            cancellation
          </div>
        </div>

        <MaxWidthContent className='mb-20 flex min-h-screen w-full flex-col gap-y-12 px-2 sm:px-4 md:px-6'>
          <div className='mt-20 flex flex-col gap-y-8'>
            <h2 className="text-lg md:text-xl font-sans font-semibold px-2 md:px-1 lg:px-0 py-4 lg:text-2xl underline underline-offset-4">
              NO REFUND SHALL BE MADE WITH RESPECT TO THE INITIAL BOOKING AMOUNT FOR ANY OF THE CANCELLATIONS. HOWEVER,
            </h2>

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
