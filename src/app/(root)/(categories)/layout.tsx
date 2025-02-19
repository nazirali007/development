import ScrollButton from "@/components/scroll-button";
import CountOnUs from "@/components/count-on-us";
import InDoubt from "@/components/in-doubt";
import YTCarouselHome from "@/components/yt-carousel-home";
// import LatestOffer from "@/components/LatestOffer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className='flex flex-col gap-6 '>
                {/* <LatestOffer /> */}
                {children}

                {/* Count on us */}
                <CountOnUs />

                {/* YouTube carousel */}
                <YTCarouselHome />

                {/* In doubt */}
                <InDoubt imgName='img-83.jpg' />
            </div>
        </>
    );
}
