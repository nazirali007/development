"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface SEOData {
    id: number;
    title: string;
    description: string;
}

const Accordions = ({ data }: { data: SEOData[] }) => {
    return (
        <Accordion type="single" collapsible className="md:px-32 px-2">
            {data.map((item) => (
                <AccordionItem key={item.id} value={`item-${item.id}`} className="border rounded-md my-4">
                    <AccordionTrigger className="p-4 text-[1rem] md:text-[1.25rem] hover:no-underline focus:no-underline text-left font-[600] text-gray-900">
                        {item?.title ?? "No title"}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 py-2 text-[0.9rem] md:text-[1.125rem] text-[#212529]">
                        {item?.description ?? "No description"}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default Accordions;
