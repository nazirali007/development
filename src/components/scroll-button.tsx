"use client";

import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from "./ui/dialog";
import Image from "next/image";
import { CAT_INSTA_LINK, CAT_WHATSAPP_LINK } from "@/server/db/static/variables";
import Link from "next/link";
import QueryForm from "./reusable/query-form";
import { cn } from "@/lib/utils";
import { Route } from "lucide-react";
import { PiPhoneFill } from "react-icons/pi";
import { Icons } from "@/assets/icons";

const ScrollButton = ({
    className = ""
}: {
    className?: string;
}) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [showPopup, setshowPopup] = React.useState<boolean>(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    useEffect(() => {
        // Check if window is defined before adding the event listener
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", toggleVisible);
        }

        return () => {
            // Remove the event listener on component unmount
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", toggleVisible);
            }
        };
    });

    return (
        <>
            <Dialog>
                <DialogTrigger title="Contact" className={cn(`fixed group bottom-16 md:bottom-10 right-4 z-[100] rounded-full hover:bg-[#47a985] bg-[#25D366] p-2 text-4xl text-white shadow-md backdrop-blur-sm backdrop-filter sm:bottom-10 sm:right-3 md:right-5 md:p-3 transition-colors duration-200 ${visible ? "visible" : "invisible"}`, `${className}`)}>
                    {/* <Route /> */}
                    {/* <PiPhoneFill /> */}
                    <Icons.whatsapp className='h-10 w-10 scale-110' />
                </DialogTrigger>
                <DialogContent className="bg-white border border-zinc-200 z-[100] shadow-md flex-col h-60 w-60 md:w-60 !rounded-xl flex justify-between items-center py-4 px-2">
                    <Link target="_blank" href={CAT_WHATSAPP_LINK} className="flex items-center w-full rounded-lg hover:bg-zinc-100 justify-start gap-x-4  px-4 p-2">
                        <Image
                            src={`/assets/images/whatsapp.svg`}
                            alt="whatsapp"
                            width={30}
                            height={30}
                            className="h-6 w-6"
                        />
                        <p>Whatsapp</p>
                    </Link>
                    <Link target="_blank" href={CAT_INSTA_LINK} className="flex items-center w-full rounded-lg hover:bg-zinc-100 justify-start gap-x-4  px-4 py-2">
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
                        className="flex items-center w-full rounded-lg hover:bg-zinc-100 justify-start gap-x-4  px-4 py-2">
                        <Image
                            src={`/assets/images/phone.svg`}
                            alt="whatsapp"
                            width={30}
                            height={30}
                            className="h-6 w-6"
                        />
                        <p>Call Now</p>
                    </Link>

                    <DialogClose className="flex items-center w-full rounded-lg hover:bg-zinc-100 justify-start gap-x-4 px-4 py-2" onClick={() => {
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
    );
};

export default ScrollButton;

import { IoMdArrowRoundUp } from 'react-icons/io'
import { motion, useAnimation } from 'framer-motion'

export function ScrollToTopButton(
    {
        className = ''
    }: {
        className?: string
    }
) {
    const controls = useAnimation()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <div onClick={scrollToTop} className={cn('relative group text-sm font-medium  p-1 gap-2 flex items-center justify-center', ` ${className}`)}>
                <span className="group-hover:text-primaryMain text-zinc-500 ">Scroll To Top </span> <IoMdArrowRoundUp className={'h-6 w-6 rounded-md p-1 text-white bg-zinc-500 border-zinc-500 group-hover:bg-primaryMain '} />
            </div>
        </>
    )
}