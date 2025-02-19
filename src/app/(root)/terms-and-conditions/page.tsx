import MaxWidthContent from "@/components/max-width-content";
import NavBar from "@/components/nav-bar";
import ScrollButton from "@/components/scroll-button";
import { cn } from "@/lib/utils";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:"Review the terms and conditions for using the Capture a Trip website, including your rights, responsibilities, and site policies for a safe and secure experience",
  alternates: {
    canonical: '/terms-and-conditions',
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
        `Capture a trip and it’s organizers strictly prohibit the
        utilization of any Narcotics and Banned Substances during the
        tours and would not be responsible for any adversities due to the
        same.`,
    },
    {
      id: 2,
      description:
        `Weapon, Fireworks and toxic substances are not allowed at this
   tour Management would not be responsible for any person who has
   been found guilty under the Indian Law.`
    },
    {
      id: 3,
      description:
        `The organizers reserve the rights to evict any camper anytime
        without any refund if his/her actions violates any camp rules or
        incase of any misbehavior with other co-travelers.`
    },
    {
      id: 4,
      description:
        `Capture a trip is not responsible for your whereabouts or safety
        if you are outside the camping premises. Any Loss to the camping
        materials such as tents, pillows, mattress or any property
        belonging to the campsite will is subject to full payment of
        Product MRP.`
    },
    {
      id: 5,
      description:
        `Capture a trip won’t be responsible for any loss or damage of
        Goods belonging to the travelers. All guests must carry a Govt
        issued Valid ID Card.`
    },
    {
      id: 6,
      description:
        `Only campers staying with Capture a trip will be allowed in the
        campsite and if you intend to bring guests from outside, you’ll
        have to Pre notify us.`
    },
    {
      id: 7,
      description:
        `Availability of hot water is not promised.`
    },
    {
      id: 8,
      description:
        `Slots at campsite will be confirmed only after receipt of full
        payment. Management accepts no responsibility for injuries or the
        loss/theft of any personal property during the tour.`
    },
    {
      id: 9,
      description:
        `In case of any breakdown or in delay due to the breakdown of the
        transport in the way, you would have to wait until the transport
        gets repaired. No backup transport would be provided.`
    },
    {
      id: 10,
      description:
        `Capture a trip is not responsible for any delays or alterations in
        the program or indirectly incurred expenses in cases such as
        natural hazards, accidents, weather conditions, landslides,
        political closure or any untoward incident.`
    },
    {
      id: 11,
      description:
        `Capture a trip is not responsible for any delay in reaching the
        destination due to traffic, sightseeing/activities of the day may
        get cancelled if we don’t reach the destination on time.`
    },
    {
      id: 12,
      description:
        `Capture a trip is not responsible for any delay in reaching the
        destination due to traffic, sightseeing/activities of the day may
        get cancelled if we don’t reach the destination on time.`
    },
    {
      id: 13,
      description:
        `Trip organizer/coordinator has complete right to change the
        itinerary as per on the spot condition. Please cooperate with us
        in keeping the environment clean and safe.`
    },
    {
      id: 14,
      description:
        `Registrations/Tickets once booked cannot be exchanged, cancelled
        or refunded Enjoy the trip, respect others and have a memorable
        experience.`
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
            Terms and Conditions
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

            <h3
              className='text-lg font-normal md:text-xl mt-12'
            >
              Enjoy the trip, respect others and have a memorable experience.
            </h3>
          </div>
        </MaxWidthContent>
      </div>
    </>
  );
}

const Para = ({ children }: { children: React.ReactNode }) => {
  return <p className='text-lg font-normal md:text-xl'>{children}</p>;
};
