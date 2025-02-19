
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import MaxWidthContent from "./max-width-content"
import Image from "next/image"
import { Sparkles } from 'lucide-react';

type TypeData = {
    id: number
    day: string
    heading: string
    dayPoints: JSX.Element
    note?: string
    bannerImage?: string
}

const tripItinerary: TypeData[] = [
    {
        id: 1,
        day: "Day 1",
        heading: "Bangkok Pattaya Itinerary",
        dayPoints: (
            <>
                <ul>
                    <li>Arrival at Bangkok airport. Meet &amp; greet by our local representative at the airport.</li>
                    <li>Pick-up from the airport and transfer to the hotel.</li>
                    <li>Check into the hotel and enjoy the leisure time.</li>
                    <li>In the evening, you can enjoy the Alcazar Show (By own). Enjoy dazzling and fantastic performances including impersonation, comedy coupled with classic set designs, beautiful dresses, and eye-catching light and sound work (By own).</li>
                    <li>Overnight at Pattaya.</li>
                </ul>
            </>
        ),
        note: "Note: The itinerary is subject to change.",
        bannerImage: "https://captureatrip.s3.amazonaws.com/uploads/blog/images/cover/10_Most_beautiful_places_to_visit_in_Spiti_Valley.jpg",
    },
    {
        id: 2,
        day: "Day 2",
        heading: "Bangkok Pattaya Itinerary",
        dayPoints: (
            <>
                <ul>
                    <li>Arrival at Bangkok airport. Meet &amp; greet by our local representative at the airport.</li>
                    <li>Pick-up from the airport and transfer to the hotel.</li>
                    <li>Check into the hotel and enjoy the leisure time.</li>
                    <li>In the evening, you can enjoy the Alcazar Show (By own). Enjoy dazzling and fantastic performances including impersonation, comedy coupled with classic set designs, beautiful dresses, and eye-catching light and sound work (By own).</li>
                    <li>Overnight at Pattaya.</li>
                </ul>
            </>
        ),
        bannerImage: "https://captureatrip.s3.amazonaws.com/uploads/blog/images/cover/10_Most_beautiful_places_to_visit_in_Spiti_Valley.jpg",
    }
    , {
        id: 3,
        day: "Day 3",
        heading: "Bangkok Pattaya Itinerary",
        dayPoints: (
            <>
                <ul>
                    <li>Arrival at Bangkok airport. Meet &amp; greet by our local representative at the airport.</li>
                    <li>Pick-up from the airport and transfer to the hotel.</li>
                    <li>Check into the hotel and enjoy the leisure time.</li>
                    <li>In the evening, you can enjoy the Alcazar Show (By own). Enjoy dazzling and fantastic performances including impersonation, comedy coupled with classic set designs, beautiful dresses, and eye-catching light and sound work (By own).</li>
                    <li>Overnight at Pattaya.</li>
                </ul>
            </>
        ),
    }
]

function AccordionItinerary() {
    return (
        <MaxWidthContent className="px-4 grid grid-cols-1 md:grid-cols-2">
            <div
                className="flex flex-col gap-4 md:gap-6"
            >
                <h2 className={`text-xl lg:text-3xl w-fit font-bold lg:w-full text-start relative after:content-[''] after:h-1 after:rounded-3xl after:bg-primaryLight after:absolute after:-bottom-1 after:left-0 after:w-[30%] md:after:w-[10%]`}>
                    Trip Itinerary <Sparkles size={20} className="inline-block text-primaryLight" />
                </h2>
                <Accordion type="single" collapsible className="w-full" defaultValue={`item-0`}>
                    {tripItinerary.map((item: TypeData, index: number) => (
                        <>
                            <AccordionItem key={item.id} value={`item-${index}`}>
                                <AccordionTrigger className="hover:no-underline group">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm md:text-base">
                                            <div className="mr-2 font-semibold text-white bg-primaryLight rounded-xl px-2 py-1 md:py-0.5">
                                                {item.day}
                                            </div>
                                            <div className=" font-semibold text-primary-500 group-hover:underline underline-offset-2">
                                                {item.heading}
                                            </div>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="p-2">
                                    {item.bannerImage && (
                                        <>
                                            <div
                                                className='relative min-h-[10rem] sm:h-[14rem] lg:min-h-60 w-full basis-2/3 group-hover:opacity-90 md:min-h-60 md:h-auto'
                                            >
                                                <Image
                                                    src={item.bannerImage}
                                                    alt={item.heading}
                                                    fill
                                                    className='rounded-t-xl rounded-b-md object-cover'
                                                    blurDataURL='/assets/249.jpg'
                                                    quality={80}
                                                    loading='lazy'
                                                />
                                            </div>
                                            <hr
                                                className="my-2 border-t-1 rounded-full border-gray-100"
                                            >
                                            </hr>                                       </>
                                    )}

                                    <div className="text-sm md:text-base text-gray-800 mt-1 sm:mt-2">{item.dayPoints}</div>
                                    {item.note && (
                                        <>
                                            <hr
                                                className="my-2 border-t-1 rounded-full border-gray-100"
                                            >
                                            </hr>
                                            <div className="sm:mt-4 text-sm bg-sky-100 text-black font-medium py-2 px-1 rounded-lg mt-2">{item.note}</div>
                                        </>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        </>
                    ))}
                </Accordion>
            </div>
        </MaxWidthContent>
    )
}

export default AccordionItinerary
