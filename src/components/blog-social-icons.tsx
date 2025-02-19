"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram, Linkedin, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
    CAT_TWITTER_LINK,
    CAT_FB_LINK,
    CAT_INSTA_LINK,
    CAT_LINKEDIN_LINK,
    CAT_WHATSAPP_LINK,
} from "@/server/db/static/variables";
import Link from "next/link";
import { RWebShare } from "react-web-share";
import { motion, AnimatePresence } from "framer-motion";

function BlogsSocialIcons({ url }: { url: string }) {
    const [visible, setVisible] = useState<boolean>(false);

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
            <AnimatePresence>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={visible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className={cn(
                        "fixed left-0 z-50 h-max w-10 items-center justify-center gap-0 overflow-visible rounded-r-lg bg-white px-1 text-black shadow-md md:top-1/4 lg:sticky  ",
                        "md:flex-col lg:flex lg:rounded-none lg:shadow-none",
                        visible ? "visible md:visible" : "invisible md:visible"
                    )}
                >
                    <Link
                        href={CAT_TWITTER_LINK}
                        arial-label={"CAT Twitter / X"}
                        title='CAT Twitter / X'
                        target='_blank'
                        className='relative inline-block h-9 w-full p-2 transition-all duration-200 hover:text-primaryMain md:h-12'
                    >
                        <Twitter className='h-5 w-5' />
                    </Link>
                    <Link
                        href={CAT_FB_LINK}
                        arial-label={"CAT Facebook"}
                        title='CAT Facebook'
                        target='_blank'
                        className='relative inline-block h-9 w-full p-2 transition-all duration-200 hover:text-primaryMain md:h-12'
                    >
                        <Facebook className='h-full w-full' />
                    </Link>
                    <Link
                        href={CAT_INSTA_LINK}
                        arial-label={"CAT Instagram"}
                        title='CAT Instagram'
                        target='_blank'
                        className='relative inline-block h-9 w-full p-2 transition-all duration-200 hover:text-primaryMain md:h-12'
                    >
                        <Instagram className='h-full w-full' />
                    </Link>
                    <Link
                        href={CAT_LINKEDIN_LINK}
                        arial-label={"CAT Linkedin"}
                        title='CAT Linkedin'
                        target='_blank'
                        className='relative inline-block h-9 w-full p-2 transition-all duration-200 hover:text-primaryMain md:h-12'
                    >
                        <Linkedin className='h-full w-full' />
                    </Link>
                    <Link
                        href={CAT_WHATSAPP_LINK}
                        arial-label={"CAT Whatsapp"}
                        title='CAT Whatsapp'
                        target='_blank'
                        className='relative inline-flex h-9 flex-row p-2 transition-all duration-200 hover:text-primaryMain md:h-12'
                    >
                        <FaWhatsapp className='h-full w-full' />
                    </Link>
                    <RWebShare
                        data={{
                            text: "Check out this blog post",
                            url,
                            title: "Capture a Trip Blog Post",
                        }}
                    >
                        <span
                            arial-label='Share Blog Post'
                            title='Share Blog Post'
                            className='relative inline-block h-9 w-full p-2 transition-all duration-200 hover:text-primaryMain md:h-12'
                        >
                            <Share2 className='h-full w-full' />
                        </span>
                    </RWebShare>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default BlogsSocialIcons;
