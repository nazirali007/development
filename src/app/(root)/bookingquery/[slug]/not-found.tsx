import NavBar from "@/components/nav-bar";
import MaxWidthContent from "@/components/max-width-content";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Booking Query`,
};


export default async function Page() {
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
                        Booking
                    </div>
                </div>

                <MaxWidthContent className='mb-20 flex min-h-screen w-full flex-col gap-y-12 px-2 sm:px-4 md:px-6'>
                    <div className='mt-20 flex flex-col gap-y-8 md:gap-y-24'>
                        <div className='text-xl font-semibold w-full gap-y-4 flex flex-col items-center text-center sm:text-2xl lg:text-5xl'>
                            <h1 className="font-semibold text-primaryMain">Boooking Details</h1>
                            <p
                                className='text-sm font-semibold text-black sm:text-lg'
                            >
                                Please fill the form below to book the trip.
                            </p>
                        </div>
                        <div
                            className='flex flex-col items-center w-full gap-y-4 text-center'
                        >
                            <h6
                                className='text-lg font-semibold text-primaryMain'
                            >
                                OOps, Requested trip not found, please try again or contact support.
                            </h6>
                        </div>
                    </div>
                </MaxWidthContent>
            </div>
        </>
    );
}
