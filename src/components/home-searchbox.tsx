"use client";

import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "@/hooks/use-on-click.outside";
import axios from "axios";
import { searchBarSuggestions as words } from "@/server/db/static/variables";
import { SheetClose } from "./ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

export type TripType = "All" | "Domestic" | "International";
export type TripDays =
    | "All"
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15";

export default function HomeSearchbox({
    className,
    size = "main",
    onFocus = () => { },
    onBlur = () => { },
    ...props
}: {
    className?: string;
    size?: "main" | "nav" | "mobile";
    onFocus?: () => void;
    onBlur?: () => void;
    props?: any;
}) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [tripType, setTripType] = React.useState<TripType>("All");
    const [tripDates, setTripDates] = React.useState<TripDays>("All");

    const [filteredData, setFilteredData] = React.useState<
        | {
            name: string;
            slug: string;
        }[]
        | undefined
    >([]);
    const navRef = React.useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        async function fetchData() {
            const res = axios.post(`/api/search/query`, { query: value, tripType: tripType, tripDuration: tripDates }, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*", // Example CORS header (should be set by the server)
                    "Access-Allow-Origin": "*",
                },
            });

            if (!res) return;

            const data = await res;

            setFilteredData(data.data.data);

            // console.log("Data:", data.data.data);

            return data;
        }

        if (value) {
            fetchData();
        }
    }, [value, tripType, tripDates]);

    useEffect(() => {
        if (value) {
            setOpen(true);
        } else {
            setOpen(false)
        }
    }, [value]);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleInputFocus = () => {
        setOpen(true);
    };

    const handleInputBlur = () => {
        // Delay closing the dropdown to handle clicks on the dropdown options
        setTimeout(() => {
            // setOpen(false);
        }, 200);
    };

    useOnClickOutside(navRef, () =>
        setTimeout(() => {
            setOpen(false);
        }, 200)
    );

    // Search Typing animation
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [word, setWord] = React.useState("");
    const [isVisible, setIsVisible] = React.useState(true);
    const displayDuration = 2000;
    const idleDuration = 100;

    useEffect(() => {
        if (subIndex < words[index].length) {
            const timeout = setTimeout(() => {
                setWord((prevWord) => prevWord + words[index][subIndex]);
                setSubIndex((prevSubIndex) => prevSubIndex + 1);
            }, 150);
            return () => clearTimeout(timeout);
        } else if (word.length > 0 && isVisible) {
            const timeout = setTimeout(() => {
                setIsVisible(false);
            }, displayDuration);
            return () => clearTimeout(timeout);
        } else if (!isVisible && word.length > 0) {
            const timeout = setTimeout(() => {
                setWord((prevWord) => prevWord.slice(0, -1));
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setSubIndex(0);
                setWord("");
                setIsVisible(true);
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
            }, idleDuration);
            return () => clearTimeout(timeout);
        }
    }, [subIndex, index, word, isVisible]);

    return (
        <>
            {size === "mobile" && (
                <>
                    {/* <div className='flex h-6 w-full flex-row items-center justify-between md:flex-row md:items-center'>
                        <div className='flex h-full w-full flex-row items-center justify-start'>
                            <label className='relative inline-flex h-full cursor-pointer select-none items-center justify-center rounded-md bg-white shadow-card'>
                                <button
                                    type='button'
                                    onClick={() => setTripType("All")}
                                    className={`without-ring flex h-full basis-1/5 items-center justify-center space-x-[6px] rounded-l border-none border-primaryMain px-3 py-2 text-center text-sm font-medium text-gray-950 transition duration-150 sm:min-w-[80px] ${tripType === "All"
                                        ? "inset-1 bg-primaryMain/40 text-black"
                                        : "-inset-1 bg-primaryMain/20"
                                        }`}
                                >
                                    All
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setTripType("Domestic")}
                                    className={cn(
                                        `without-ring flex h-full basis-2/5 items-center justify-center space-x-[6px] border border-y border-none border-slate-900 px-3 py-2 text-center text-sm font-medium text-gray-950 transition duration-150 sm:min-w-[60px] ${tripType === "Domestic"
                                            ? "inset-1 bg-primaryMain/40 text-black"
                                            : "-inset-1 bg-primaryMain/20"
                                        }`
                                    )}
                                >
                                    Domestic
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setTripType("International")}
                                    className={`without-ring flex h-full basis-2/5 items-center justify-center space-x-[6px] rounded-r border-none border-primaryMain px-3 py-2 text-center text-sm font-medium text-gray-950 transition duration-150 sm:min-w-[120px] ${tripType === "International"
                                        ? "inset-1 bg-primaryMain/40 text-black"
                                        : "-inset-1 bg-primaryMain/20"
                                        }`}
                                >
                                    International
                                </button>
                            </label>
                        </div>

                        <div className='flex flex-1 w-full flex-row relative items-center justify-between gap-2 md:flex-row md:gap-4'>
                            <Select
                                onValueChange={(value) => setTripDates(value as TripDays)}
                            >
                                <SelectTrigger className='without-ring items-center text-white justify-between border-none bg-white/10 border-primaryMain px-3 py-0 h-6 text-center text-sm font-medium'>
                                    <SelectValue
                                        placeholder='Duration'
                                        className='hidden sm:block min-w-12'
                                    />
                                </SelectTrigger>
                                <SelectContent className='z-[999] w-fit max-w-fit !px-1 max-h-[60vh]'>
                                    <SelectItem className="h-6" value={"All"}>All</SelectItem>
                                    <SelectItem className="h-6" value={"0"}>Custom</SelectItem>
                                    {
                                        Array.from({ length: 15 }, (_, i) => i + 1).map((item) => (
                                            <SelectItem key={item} className="h-6" value={item.toString()}>{item}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                    </div> */}
                </>
            )}
            <section
                onFocus={onFocus} onBlur={onBlur}
                {...props}
                className={cn(
                    "w-[90%] max-w-lg rounded-t-md bg-white/20 shadow-md backdrop-blur-sm md:w-full",
                    open ? "rounded-t-md " : "rounded-md",
                    size === "main" && "rounded-lg shadow-sm lg:mt-4 xl:mt-10",
                    size === "nav" && "rounded-lg shadow-sm",
                    size === "mobile" && "rounded-lg shadow-sm mt-2",
                    `${className}`
                )}
            >
                <div className='relative z-50 w-full'>
                    {size === "main" ? (
                        <>
                            <div className='flex px-2 py-2 items-center'>
                                <MapPin className={cn(`h-4 w-4 text-white md:h-6 md:w-6`)} />
                                <input
                                    type='text'
                                    placeholder={`Search for ${word}`}
                                    value={value}
                                    onChange={onInputChange}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                    className={cn(
                                        "w-full font-medium text-gray-100 outline-none placeholder:bg-gradient-to-r from-white to-cyan-600 placeholder:bg-clip-text placeholder:text-transparent",
                                        "bg-transparent px-1 md:px-2 py-1 border-none focus:border-none focus:ring-0"
                                    )}
                                />
                                <Search className={cn(`h-4 w-4 text-white md:h-6 md:w-6 `)} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex px-2 py-1 items-center'>
                                <MapPin className={cn(`h-4 w-4 text-white md:h-5 md:w-5`)} />
                                <input
                                    type='text'
                                    placeholder={`${word}`}
                                    value={value}
                                    onChange={onInputChange}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                    className={cn(
                                        "w-full font-medium text-sm text-gray-100 outline-none placeholder:bg-gradient-to-r from-white to-cyan-600 placeholder:bg-clip-text placeholder:text-transparent",
                                        "bg-transparent px-1 md:px-2 py-1 border-none focus:border-none focus:ring-0"
                                    )}
                                />
                                <Search className={cn(`h-4 w-4 text-white md:h-5 md:w-5 `)} />
                            </div>
                        </>
                    )}
                    {open && value && value.length > 0 ? (
                        <div
                            ref={navRef}
                            className={cn('absolute no-scrollbar top-12 z-50 flex w-full flex-col gap-2 overflow-y-scroll rounded-b-md bg-white/10 px-4 py-4 backdrop-blur-sm md:top-12',
                                size === "main" && "max-h-[120px] backdrop-blur-xl bg-white text-black rounded-t-md z-50",
                                size === "nav" && "top-10 md:top-10 rounded-lg border-1 shadow-md bg-white text-black xl:max-h-60 gap-0.5 py-2 px-1",
                                size === "mobile" && "top-10 max-h-[70vh] rounded-t-xl shadow-sm",
                            )}
                        >
                            {filteredData && filteredData.length > 0 ? (
                                filteredData.map((list: any) => (
                                    <>
                                        {/* Close the sheet when clicked on the link */}
                                        {size === "mobile" ? (
                                            <SheetClose asChild>
                                                <Link
                                                    key={list.attributes.slug}
                                                    href={`/trip/${list.attributes.slug}`}
                                                    className={cn(
                                                        "flex w-full group flex-row items-center justify-start gap-1 transition-all duration-200 ease-in-out",
                                                        `px-0.5 pb-1 text-sm text-gray-200 hover:text-gray-100`,
                                                    )}
                                                >
                                                    <Search className={cn(`h-3 w-3 md:h-4 md:w-4 group-hover:scale-[1.01]`)} />
                                                    {list.attributes.name}
                                                </Link>
                                            </SheetClose>
                                        ) : (
                                            <Link
                                                onClick={() => {
                                                    setOpen(false)
                                                }}
                                                key={list.attributes.slug}
                                                href={`/trip/${list.attributes.slug}`}
                                                className={cn(
                                                    "flex w-full group flex-row items-center justify-start gap-1 transition-all duration-200 ease-in-out",
                                                    `px-0.5 pb-1 text-sm text-gray-200 hover:text-gray-100`,
                                                    size === "main" ? "text-gray-800 hover:text-black" : "",
                                                    size === "nav" ? "text-gray-600 px-2 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-50" : ""
                                                )}
                                            >
                                                <span>{list.attributes.name}</span>
                                            </Link>
                                        )
                                        }
                                    </>
                                ))
                            ) : (
                                <>
                                    <p className={cn('text-gray-200',
                                        size === "main" ? "text-gray-800" : "",
                                        size === "nav" ? "text-gray-900" : ""
                                    )}>
                                        <span className={cn('block text-gray-200/80 sm:hidden',
                                            size === "main" ? "text-gray-800" : "",
                                        )}>
                                            Oops, No results found
                                        </span>
                                        <span className='hidden sm:block'>
                                            Oops, No Search result found
                                        </span>
                                    </p>
                                </>
                            )}
                        </div>
                    ) : null}
                </div>
            </section >
        </>
    );
}
