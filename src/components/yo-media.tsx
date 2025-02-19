import { Icons } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { CAT_INSTA_FOLLOWER_COUNT, CAT_GOOGLE_REVIEWS_COUNT, ITINERARIES_COUNT } from "@/server/db/static/variables";
import AnimatedNumber from "./reusable/animated-number";

export default function SocialMediaHero({ position }: { position: string }) {
  return (
    <div
      className={cn(
        "bottom-10 grid w-full grid-cols-6 gap-3 py-5 md:bottom-0 md:grid-cols-12 lg:py-10",
        position
      )}
    >
      <div className='col-span-3 flex flex-col items-center gap-4'>
        <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12'>
          <Icons.insta className='absolute h-full w-full' />
        </div>
        <h2 className='text-center text-sm font-semibold text-white lg:text-lg'>
          Community of <br /><AnimatedNumber duration={2} start={Number(CAT_INSTA_FOLLOWER_COUNT - 5)} counter={CAT_INSTA_FOLLOWER_COUNT} />k+ On Instagram
        </h2>
      </div>
      <div className='col-span-3 flex flex-col items-center gap-4'>
        <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12'>
          <Icons.google className='absolute h-full w-full' />
        </div>
        <h2 className='text-center text-sm font-semibold text-white lg:text-lg'>
          <AnimatedNumber duration={2} start={Number(CAT_GOOGLE_REVIEWS_COUNT - 5)} counter={CAT_GOOGLE_REVIEWS_COUNT} />+ <br /> Google Reviews
        </h2>
      </div>
      <div className='col-span-3 flex flex-col items-center justify-center gap-4'>
        <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12 '>
          <Icons.mapPinSVG className='absolute h-full w-full ' />
        </div>
        <h2 className='text-center text-sm font-semibold text-white lg:text-lg'>
          <AnimatedNumber duration={2} start={ITINERARIES_COUNT - 5} counter={ITINERARIES_COUNT} />+ <br /> Itineraries
        </h2>
      </div>
      <div className='col-span-3 flex flex-col items-center gap-4'>
        <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12'>
          <Icons.rupeeSVG className='absolute h-full w-full' />
        </div>
        <h2 className='text-center text-sm font-semibold text-white lg:text-lg'>
          Book Now & <br />Pay Later
        </h2>
      </div>
    </div>
  );
}

export function SocialMediaCat({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex relative w-full",
        className
      )}
    >
      <div className="flex w-full flex-col md:flex-row gap-5">
        <div className='w-full flex flex-col items-center gap-4'>
          <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12'>
            <Icons.insta className='absolute h-full w-full' />
          </div>
          <h2 className='text-center text-sm font-semibold text-white lg:text-lg'>
            Community of <br /><AnimatedNumber duration={2} start={Number(CAT_INSTA_FOLLOWER_COUNT - 5)} counter={CAT_INSTA_FOLLOWER_COUNT} />k+ On Instagram
          </h2>
        </div>
        <div className='w-full flex flex-col items-center gap-4'>
          <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12'>
            <Icons.google className='absolute h-full w-full' />
          </div>
          <h2 className='text-center text-sm font-semibold text-white lg:text-lg'>
            <AnimatedNumber duration={2} start={Number(CAT_GOOGLE_REVIEWS_COUNT - 5)} counter={CAT_GOOGLE_REVIEWS_COUNT} />+ <br /> Google Reviews
          </h2>
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-5">
        <div className='w-full flex flex-col items-center justify-center gap-4'>
          <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12 '>
            <Icons.mapPinSVG className='absolute h-full w-full ' />
          </div>
          <h2 className='text-center text-sm font-semibold text-white lg:text-lg'>
            <AnimatedNumber duration={2} start={ITINERARIES_COUNT - 5} counter={ITINERARIES_COUNT} />+ <br /> Itineraries
          </h2>
        </div>
        <div className='w-full flex flex-col items-center gap-4'>
          <div className='relative h-6 w-6 md:h-9 md:w-9 xl:h-12 xl:w-12'>
            <Icons.rupeeSVG className='absolute h-full w-full' />
          </div>
          <h2 className='text-center text-sm font-semibold text-white lg:text-lg'>
            No <br /> Cost EMI
          </h2>
        </div>
      </div>
    </div>
  );
}