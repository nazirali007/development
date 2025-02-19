import React from 'react';
import ImageSlideShow from '@/components/images-slideshow';


export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}

            {/* Gallery */}
            {/* <section className="flex bg-slate-100 flex-col gap-4 py-12 px-2 sm:px-4 md:px-6 lg:px-1 mx-auto w-full">
                <div
                    className="flex flex-col gap-4 max-w-[1220px] mx-auto w-full"
                >
                    <h1
                        className="text-2xl font-bold  animate-slidein opacity-0 [--slidein-delay:500ms] text-start sm:text-3xl mg:text-3xl lg:text-5xl text-primaryMain"
                    >
                        Lovely Memories
                    </h1>
                    <p className=" text-zinc-600 text-base sm:text-lg">
                        here, are some lovely moments we captured together...
                    </p>
                    <ImageSlideShow images={[
                        'https://captureatrip.s3.amazonaws.com/uploads/trip/images/cover/8235ee04-baa5-4f5a-b3c5-21b3291d177c.jpg',
                        'https://captureatrip.s3.amazonaws.com/uploads/trip/images/cover/8235ee04-baa5-4f5a-b3c5-21b3291d177c.jpg',
                        'https://captureatrip.s3.amazonaws.com/uploads/trip/images/cover/8235ee04-baa5-4f5a-b3c5-21b3291d177c.jpg',
                        'https://captureatrip.s3.amazonaws.com/uploads/trip/images/cover/8235ee04-baa5-4f5a-b3c5-21b3291d177c.jpg',
                    ]} />
                </div>
            </section> */}
        </>
    );
}
