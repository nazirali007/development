"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog";
import QueryForm from "./reusable/query-form";
import { CAT_INSTA_LINK, CAT_WHATSAPP_LINK } from "@/server/db/static/variables";
import { cn } from "@/lib/utils";


function ActionButton({
    className = "",
    children
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    const [showPopup, setshowPopup] = useState<boolean>(false);
    return (
        <>
            <Dialog>
                <DialogTrigger className={cn(`basis-1/5 flex justify-center rounded-md bg-secondaryMain py-2 transition-colors delay-100 w-min`, `${className}`)}>
                    {children ? children : (
                        <>
                            <Image
                                src={`/assets/images/fly.svg`}
                                alt="whatsapp"
                                width={20}
                                height={20}
                                className="h-6 w-6 group-hover:scale-105 group-hover:rotate-1 transition-all duration-200 ease-in-out"
                            />
                        </>
                    )}
                </DialogTrigger>
                <DialogContent className="bg-white border border-zinc-200 z-[100] shadow-md flex-col h-60 w-60 md:w-80 rounded-xl flex justify-between items-center p-4">

                    <Link target="_blank" href={CAT_WHATSAPP_LINK} className="flex items-center w-full rounded-lg hover:bg-zinc-100 justify-start gap-x-4 md:gap-x-12 px-4 p-2">
                        <Image
                            src={`/assets/images/whatsapp.svg`}
                            alt="whatsapp"
                            width={30}
                            height={30}
                            className="h-6 w-6"
                        />
                        <p>Whatsapp</p>
                    </Link>
                    <Link target="_blank" href={CAT_INSTA_LINK} className="flex items-center w-full rounded-lg hover:bg-zinc-100 justify-start gap-x-4 md:gap-x-12 px-4 py-2">
                        <Image
                            src={`/assets/images/instagram.svg`}
                            alt="whatsapp"
                            width={30}
                            height={30}
                            className="h-6 w-6"
                        />
                        <p>Instagram</p>
                    </Link>

                    <Link
                        href="tel:+918287636079"
                        className="flex items-center w-full rounded-lg hover:bg-zinc-100 justify-start gap-x-4 md:gap-x-12 px-4 py-2">
                        <Image
                            src={`/assets/images/phone.svg`}
                            alt="whatsapp"
                            width={30}
                            height={30}
                            className="h-6 w-6"
                        />
                        <p>Call Now</p>
                    </Link>

                    <DialogClose className="flex items-center w-full rounded-lg hover:bg-zinc-100 justify-start gap-x-4 md:gap-x-12 px-4 py-2" onClick={() => {
                        setshowPopup(true);
                    }}>
                        <Image
                            src={`/assets/images/mail.svg`}
                            alt="whatsapp"
                            width={30}
                            height={30}
                            className="h-6 w-6"
                        />
                        <p>Request a Callback</p>
                    </DialogClose>
                </DialogContent>
            </Dialog>
            <QueryForm showPopup={showPopup} setshowPopup={setshowPopup} className="z-[101]" />
        </>
    )
}

import GetQuoteInDoubtForm from "./get-quote-in-doubt-form";
import { X } from "lucide-react";

export const SendEnquiryButton = ({
    children,
    className = ""
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            // Click outside the div, close the popup
            setShowPopup(false);
        }
    };

    useEffect(() => {
        // Attach the event listener when the component mounts
        document.addEventListener('mousedown', handleOutsideClick);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []); // Empty

    const handleClick = () => {
        if (showPopup) {
            setShowPopup(false);
        }
        setShowPopup(true);
    };

    return (
        <>
            <div
                ref={popupRef}
                className={cn(`absolute max-h-[410px] left-0 overflow-hidden right-0 bottom-[100%] max-w-screen border-x border-t border-zinc rounded-t-xl h-[70vh] z-[999] w-full mr-4 mb-0 bg-white transition-all duration-300 ease-in-out`, showPopup ? 'block' : 'hidden')}
            >
                <div className="relative flex h-full p-2 w-full bg-zinc-50 justify-center text-center items-center">
                    <GetQuoteInDoubtForm className={'z-[103] px-2 sm:px-0'} setShowPopup={setShowPopup} />

                    {/* absolute background */}
                    <div className='absolute -right-1/2 -top-8 h-60 w-80 sm:w-80 sm:h-96 rounded-full z-[100] bg-primaryMain opacity-10' />

                    <div className='absolute -bottom-1/2 -left-8 h-80 w-80 rounded-full z-[100] bg-primaryMain opacity-10' />

                    <Image
                        src={`/assets/images/airplane-ticket.svg`}
                        alt='background image'
                        height={100}
                        width={100}
                        quality={20}
                        className='absolute left-0 top-4 -rotate-12 object-cover opacity-20'
                    />

                    <Image
                        src={`/assets/images/flight-date.svg`}
                        alt='background image'
                        height={200}
                        width={200}
                        quality={50}
                        className='absolute -right-2 top-48 rotate-45 rounded-b-xl object-cover opacity-10'
                    />


                    {/* close button */}
                    <div
                        onClick={() => setShowPopup(false)}
                        className='absolute right-2 z-[999] top-2 cursor-pointer rounded-sm opacity-70 transition-all duration-500 ease-in-out hover:rotate-180 hover:text-primaryMain hover:opacity-100'
                    >
                        <X className='h-6 w-6 rounded-full border border-zinc-200 bg-white px-1 font-bold shadow-sm' />
                    </div>
                </div>
            </div>
            <button
                onClick={handleClick}
                className={cn('basis-2/5 border-primaryLight bg-primaryMain text-white flex gap-2 w-full items-center justify-center rounded-md border p-3 text-sm font-semibold transition-all duration-200 hover:shadow-sm', `${className}`)}
            >
                {children}
            </button>
        </>
    )
}

export default ActionButton