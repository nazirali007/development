import React from "react";
import MaxWidthContent from "./max-width-content";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface DynamicDescriptionProps {
  heading: string;
  description: string | JSX.Element;
}

export default async function DynamicDescription({
  heading,
  description,
}: DynamicDescriptionProps) {
  return (
    <div className=' flex flex-col px-2 md:px-4 lg:px-0 py-8 w-full mx-auto max-w-7xl'>
      <Dialog>
        <div className="flex flex-col gap-2 px-4">
          <div className='flex items-end gap-2'>
            <h2 className="text-xl font-bold text-black/80 md:text-4xl lg:text-5xl ">
              About the Destination
            </h2>
            <div className="text-sm pb-1 cursor-pointer font-semibold text-primaryLight hover:text-primaryDark transition-colors delay-150">
              <DialogTrigger>
                Learn More
              </DialogTrigger>
            </div>
            <h2 className=" text-transparent w-1 h-1">{`Book ${heading} at Best Price`}</h2>
          </div>
          <div className="inline-block"><article className={'font-normal leading-normal max-h-[10vh] overflow-hidden py-2 px-2 article'}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </article>
          </div>
        </div>
        <DialogContent className='h-[70vh] w-full sm:max-w-[65vw] bg-white'>
          <ScrollArea className='pr-6'>
            <DialogHeader className='h-fit border-b-gray-300 pb-1'>
              <DialogTitle className='text-xl sm:text-4xl'>{`Book ${heading} at Best Price`}</DialogTitle>
            </DialogHeader>
            {/* <article className='font-normal leading-normal article'>{ }
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </article> */}
            <article>
              <div className="article font-normal leading-normal" dangerouslySetInnerHTML={{ __html: description }} /></article>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
