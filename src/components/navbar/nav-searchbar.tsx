
"use client";

import React, { useState, useEffect } from 'react'
import HomeSearchbox from '../home-searchbox'
import { cn } from '@/lib/utils';

export default function SearchBar() {
    const [activeNav, setActiveNav] = useState(false);
    const scrollThreshold = 0;

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
        <div className='hidden md:flex w-full justify-center items-center'>
            <HomeSearchbox size='nav' className={cn("hidden xl:flex lg:my-0 max-h-8 items-center justify-center",
                // !activeNav ? "hidden" : "hidden xl:flex "
            )} />
        </div>
    )
}
import { Search } from "lucide-react";
import { motion } from 'framer-motion';


import {
    Sheet,
    CustomSheetContent,
    SheetTrigger,
    SheetCloseButton,
} from "@/components/ui/sheet";

export const MobileSearchBar = ({
    className = "",
}: {
    className?: string;
}) => {
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
    return (
        <>
            <Sheet>
                <SheetTrigger asChild className={cn('text-white lg:hidden h-16 mr-4', className)}>
                    <Search onClick={() => setIsSearchFocused(false)} className='h-6 w-6 cursor-pointer text-zinc-100 hover:text-white'
                    />
                </SheetTrigger>
                <CustomSheetContent side={"bottom"} className='mt-20 bg-primaryMain no-scrollbar border-none backdrop-blur-sm z-[999] overflow-scroll border-b-primaryMain/50 rounded-t-[2rem]'><motion.div
                    animate={{ height: isSearchFocused ? '70vh' : "70vh" }}
                    transition={{ duration: 0.3 }}
                    className='bg-primaryMain min-h-[32vh] mt-10 backdrop-blur-sm z-[999] no-scrollbar overflow-scroll border-b-primaryMain/50'
                >
                    <HomeSearchbox size='mobile'
                        className='w-full items-center justify-center max-w-full'
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />

                </motion.div>
                    <SheetCloseButton className='hover:rotate-12 duration-200 ease-in-out flex justify-center rounded-sm text-center items-center h-7 w-7 cursor-pointer text-white' />
                </CustomSheetContent>
            </Sheet>
        </>
    )
}

