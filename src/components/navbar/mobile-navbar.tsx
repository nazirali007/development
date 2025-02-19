"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    Sheet,
    SheetClose,
    CustomSheetContent,
    SheetTrigger,
    SheetCloseButton,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const MobileNavbar = ({ navRoutes }: any) => {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild className='text-white lg:hidden h-16'>
                    <Menu className='m-2 h-7 w-7 cursor-pointer text-zinc-100 hover:text-white' />
                </SheetTrigger>
                <CustomSheetContent side={"top"} className='bg-primaryMain backdrop-blur-sm z-[999] overflow-scroll border-b-primaryMain/50 rounded-bl-xl rounded-br-[5rem]'>
                    <div
                        className='flex items-center justify-between text-white'
                    >
                        <Link href='/'>
                            <Image
                                src='/assets/images/logomd.png'
                                alt='logo'
                                // fill
                                height={50}
                                width={50}
                                className='flex items-center justify-center mx-auto'
                                blurDataURL='/assets/249.jpg'
                                quality={50}
                            />
                        </Link>
                        <SheetCloseButton className='hover:rotate-12 duration-200 ease-in-out flex justify-center rounded-sm text-center items-center h-7 w-7 cursor-pointer text-white' />
                    </div>
                    <ul className='relative flex flex-col justify-center mt-2 text-lg font-semibold text-white'>
                        {navRoutes.map((route: any) => (
                            <li key={route.href} className='pb-4 group'>
                                {route.sublinks ? (
                                    <Accordion type='single' collapsible>
                                        <AccordionItem value='item-1' className='border-none'>
                                            <div className='flex w-full items-center justify-between text-white'>
                                                <SheetClose asChild>
                                                    <Link href={route.href} className="hover:text-primaryDark duration-300 ease-in-out">{route.label}</Link>
                                                </SheetClose>
                                                <AccordionTrigger className='p-0'></AccordionTrigger>
                                            </div>
                                            <AccordionContent className='ml-6 pb-0 gap-2 pt-2 text-base font-medium grid grid-cols-2'>
                                                {route.sublinks.map((sublink: any) => (
                                                    <SheetClose key={sublink.href} asChild>
                                                        <Link
                                                            key={sublink.href}
                                                            href={sublink.href}
                                                            className={cn(
                                                                "hover:text-primaryDark font-light duration-300 ease-in-out",
                                                                sublink.active
                                                                    ? "font-medium underline underline-offset-2 hover:text-black"
                                                                    : ""
                                                            )}
                                                        >
                                                            {sublink.label}
                                                        </Link>
                                                    </SheetClose>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ) : (
                                    <SheetClose asChild>
                                        <Link href={route.href} className="hover:text-primaryDark duration-300 ease-in-out">{route.label}</Link>
                                    </SheetClose>
                                )}
                            </li>
                        ))}
                    </ul>
                </CustomSheetContent>
            </Sheet>
        </>
    )
}