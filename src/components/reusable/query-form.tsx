"use client";

import Image from "next/image";
import { X } from "lucide-react";
import GetQuoteInDoubtForm from "../get-quote-in-doubt-form";
import { cn } from "@/lib/utils";

function QueryForm(
    { showPopup, setshowPopup, className }: { showPopup: boolean; setshowPopup: React.Dispatch<React.SetStateAction<boolean>>, className?: string }
) {
    return (
        <>
            {showPopup && (
                <div className={cn('fixed left-0 top-0 z-[101] flex h-full w-full items-center justify-center overflow-hidden bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out')}>
                    <div className={cn('absolute left-1/2 top-1/2 z-[102] flex h-[60vh] p-2 w-11/12 min-w-[240px] max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col gap-8 overflow-hidden rounded-md bg-white md:p-4 sm:h-[70vh] lg:max-w-3xl', `${className}`)}>
                        <div className='relative h-full w-full border border-dashed border-gray-800 items-center justify-center'>
                            <div className='flex items-center justify-center h-full flex-col gap-y-8 md:gap-y-12'>
                                <GetQuoteInDoubtForm className={'z-[103] px-2 sm:px-0'} setShowPopup={setshowPopup} />
                                <div className="z-[103] flex">
                                    <ul className="text-xs hidden sm:flex flex-col gap-y-1 md:gap-y-2 text-center md:text-start md:flex-row gap-x-4 capitalize">
                                        <li className="hover:underline underline-offset-2">One-on-one Query Resolving</li>
                                        <li className="hover:underline underline-offset-2">ASAP Call responses</li>
                                        <li className="hover:underline underline-offset-2">No spam calls/ No data sharing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='absolute hidden md:block left-0 top-0 bottom-0 w-[33%]'>
                                <Image
                                    src={`/assets/images/in-doubt.svg`}
                                    alt='In Doubt Image'
                                    fill
                                    style={{
                                        objectFit: 'contain'
                                    }}
                                    className="lg:m-4 sm:scale-100 md:scale-150 lg:scale-150 rotate-15 z-[100] opacity-50"
                                />
                            </div>

                            <div className='absolute hidden md:block right-0 top-0 bottom-0 w-[33%]'>
                                <Image
                                    src={`/assets/images/in-doubt.svg`}
                                    alt='In Doubt Image'
                                    fill
                                    style={{
                                        objectFit: 'contain'
                                    }}
                                    className="lg:m-4 sm:scale-100 md:scale-150 lg:scale-150 rotate-[-15] z-[100] opacity-50"
                                />
                            </div>

                            {/* absolute background */}
                            <div className='absolute -right-1/2 -top-8 h-60 w-80 rounded-full z-[100] bg-primaryMain opacity-10 sm:-right-9 sm:-top-9' />

                            <div className='absolute -bottom-1/2 -left-8 h-60 w-80 rounded-full z-[100] bg-primaryMain opacity-10 sm:-bottom-7 sm:-left-7' />
                        </div>

                        {/* close button */}
                        <div
                            onClick={() => setshowPopup(false)}
                            className='absolute right-[1px] z-[105] top-[1px] cursor-pointer rounded-sm opacity-70 transition-all duration-500 ease-in-out hover:rotate-180 hover:text-primaryMain hover:opacity-100'
                        >
                            <X className='h-8 w-8 rounded-full border border-zinc-200 bg-white px-1 font-bold shadow-sm' />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default QueryForm;