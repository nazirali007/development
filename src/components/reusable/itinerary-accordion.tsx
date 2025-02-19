"use client";
import { useState } from "react";
import Showdown from "showdown";

const converter = new Showdown.Converter(); // Convert markdown to html

const ItineraryAccordion = (data: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [bottomBorder, setBottomBorder] = useState(true);
    const toggleAccordion = () => {
        setIsOpen(!isOpen)
        setBottomBorder(!bottomBorder)
    };

    return (
        <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 text-blue-600 m-2px" className="w-full my-[10px] border border-gray-200 rounded-xl">
            <h2 id="accordion-color-heading-1">
                <div onClick={toggleAccordion} className={`${bottomBorder ? "border rounded-xl" : 'border rounded-t-xl '} w-full flex items-center justify-between p-2 font-medium text-gray-900 gap-3 bg-primaryMain/10 hover:bg-primaryMain/20 transition-all duration-200 cursor-pointer`} data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <div className="!text-sm !font-bold !leading-snug !text-left" dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(`${data.data.title ? data.data.title : 'No title'}`),
                    }}></div>
                    <svg data-accordion-icon className={`${isOpen || 'rotate-180'} w-3 h-3 shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </div>
            </h2>
            <div id="accordion-color-body-1" className={`${isOpen ? 'h-full overflow-y-visible' : 'h-0 overflow-y-hidden'} `} aria-labelledby="accordion-color-heading-1">
                <div className="p-5 article text-sm leading-snug">
                    <div dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(`${data.data.description ? data.data.description : 'No description'}`),
                    }} className="mb-2 text-black"></div></div>
            </div>
        </div>
    )
}

export default ItineraryAccordion;