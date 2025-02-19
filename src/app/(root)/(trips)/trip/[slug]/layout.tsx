import { Icons } from "@/assets/icons";
// import LatestOffer from "@/components/LatestOffer";
import YTCarouselHome from "@/components/yt-carousel-home";
import { CAT_INSTA_FOLLOWER_COUNT } from "@/server/db/static/variables";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className='flex flex-col items-center gap-24 bg-zinc-200/60 !pt-0 '>
                {children}
                {/* <LatestOffer /> */}
                {/* Instagram */}
                <div className='flex items-center justify-center py-8 shadow-sm gap-4 bg-gray-100 w-full px-4'>
                    <div className='relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12'>
                        <Icons.insta className='h-full w-full' />
                    </div>
                    <h2 className='text-base font-semibold capitalize lg:text-xl'>
                        Community of {CAT_INSTA_FOLLOWER_COUNT}k <br /> travelers On Instagram
                    </h2>
                </div>
                <YTCarouselHome />
            </div>
        </>
    );
}
