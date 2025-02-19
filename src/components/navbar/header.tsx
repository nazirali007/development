"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Ribbon from "../Ribbon";


export default function Header({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeNav, setActiveNav] = useState(false);
    const scrollThreshold = 50;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            setActiveNav(true);
        } else {
            setActiveNav(false);
        }
    };


    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            // Remove scroll event listener when component unmounts
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeNav]);


    return (
        <div className="fixed top-0 inset-x-0 mx-auto no-scrollbar md:left-0 md:top-0 z-[999]">
            <Ribbon />
            <motion.nav
                className={cn(
                    " h-[3.5rem] md:w-full py-2 px-4 md:py-2 rounded-lg md:rounded-none transition-all ease-in-out duration-300 mx-2 mt-2 md:mx-0 md:mt-0",
                    activeNav ? " bg-primaryMain backdrop-blur-sm md:bg-primaryMain shadow-lg transition-colors duration-200" : "bg-transparent"
                )}
                animate={{ backgroundColor: activeNav ? "rgb(0 125 188 / 1)" : "transparent" }}
            >
                {children}
            </motion.nav>
        </div>
    );
}
