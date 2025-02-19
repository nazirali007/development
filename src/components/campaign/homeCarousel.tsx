"use client"
import React from 'react';
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import Link from "next/link";
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay';
import MaxWidthContent from '../max-width-content';
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { StrapiImageType } from '../../types/components'

// type ImageAttributes = {
//     url: string;
// };

// type ImageData = {
//     id: number;
//     attributes: ImageAttributes;
// };

const HomeCarousel = ({ data, delay = 3000, className = "" }: {
    data?: StrapiImageType[], delay?: number, className?: string
}
) => {
    // const plugin = React.useRef(
    //     Autoplay({
    //         delay: 1000,
    //         // stopOnInteraction: true,
    //         stopOnMouseEnter: true,
    //         jump: true,
    //     })
    // )

    const autoplay = React.useRef(
        Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: false })
    );
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(api)

    return (
        <div className='relative dmsans'>
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    autoplay.current as AutoplayType
                ]}
                className={cn("w-full z-10", `${className}`)}
            >
                <CarouselContent>
                    {data?.map((item: any, index: number) => (
                        <CarouselItem key={index} className="w-full">
                            <div className='relative mx-auto h-screen w-screen '>
                                <Image
                                    src={item?.attributes?.url}
                                    alt="Background"
                                    fill
                                    className='object-cover object-center w-full h-full transition-all group-hover:opacity-90 duration-300 ease-in-out'
                                    placeholder='blur'
                                    blurDataURL='/assets/249.jpg'
                                    quality={50}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className='absolute z-20 h-screen w-screen top-0 right-0 left-0 bg-black/30 bg-gradient-to-b from-black/30 from-0% via-white/10 via-50% to-black/30 to-100%'></div>
            <div className='text-white absolute top-0 w-full h-screen flex items-start justify-end z-30 flex-col px-[1.25rem] md:pb-6 pb-[5.5rem]'>
                <div className="flex  flex-col items-start md:items-center w-full">
                    <div className=' text-[3rem] md:text-[4rem] md:ml-[0rem] w-[13.75rem] md:w-[38.063rem] h-[7.75rem] leading-[3.906rem] md:leading-[5.208rem] md:h-[5.188rem] font-[700] dmsans drop-shadow-lg '>Bali Tour Packages</div>
                    <div className='md:gap0 mt-[0.75rem]  md:ml-[0rem] md:mt-[1rem] w-[10.938rem] md:w-[14.25rem] h-[1.938rem] md:h-[2.625rem] flex justify-start items-center md:justify-center text-[#FFFFFF]  font-[700] text-[1.5rem] md:text-[2rem] gap-[0px]'>

                        <Image
                            src={
                                "/campaign/currency_rupeenew.svg"
                            }
                            alt="Google Image"
                            height={10}
                            width={10}
                            className="h-[1.333rem]  w-[0.917rem] mr-[0.5rem] md:mr-[0.646rem] "
                        />
                        {"   "}79,999

                        <span className="text-[1rem] leading-[1rem] w-[4.063rem] h-[1rem] ml-[0.375rem] md:ml-[0.5rem] mt-2 md:mt-2  font-[500] text-[#DCDCDC]">onwards</span>
                    </div>

                </div>

                <div className="flex flex-wrap items-center justify-center  mt-[2.5rem] w-full gap-1">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`w-[0.75rem] h-[0.1rem] rounded-lg inline-flex items-center justify-center cursor-pointer touch-manipulation appearance-none p-0 m-0  after:content-[''] after:w-5 after:h-5 after:rounded-full after:flex after:items-center shadow-lg 
                        ${index === selectedIndex
                                    ? ' bg-primaryMain after:shadow-[inset_0_0_0_2px_var(--text-body)] '
                                    : ' bg-slate-200 after:shadow-[inset_0_0_0_2px_var(--detail-medium-contrast)] '}`}
                        />
                    ))}
                </div>
                <div className=" w-full flex justify-center items-center">
                    <Link href="#form1" className=' flex items-center justify-center text-[1rem] md:text-[1.25rem] font-[600]  bg-[#007DBC] md:ml-[0rem] text-white rounded-[0.75rem] px-2 py-2 md:leading-[1.628rem] md:px-[7rem] md:py-[1rem] w-[100%] h-[3.25rem] md:w-[23.625rem] md:h-[3.625rem] md:mt-[1.5rem] mt-[1.5rem]' > Enquire Now</Link>

                </div>

            </div>

            {/* <CarouselPrevious />
            <CarouselNext /> */}

        </div >

    )
}

export default HomeCarousel