"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AdminSidebar() {
  const path = usePathname();
  const navDetail = [
    {
      label: "Bookings",
      href: "/admin/bookings",
      active: path === "/admin/bookings",
    },
    {
      label: "Booking Queries",
      href: "/admin/bookingqueries",
      active: path === "/admin/bookingqueries",
    },
    {
      label: "In Queries",
      href: "/admin/inqueries",
      active: path === "/admin/inqueries",
    },
  ];

  return (
    <div className='fixed left-0 top-0 h-screen w-1/5 bg-black'>
      <ScrollArea className='h-screen w-full'>
        <div className='relative flex flex-col gap-6'>
          <div className='relative mt-6 h-28 w-full shrink-0'>
            <Image
              src={"/assets/images/circle-logo.png"}
              alt=''
              fill
              className='object-contain'
              blurDataURL='/assets/249.jpg'
              quality={50}
            />
          </div>
          <div>
            <ul className='flex h-full w-full flex-col gap-5'>
              {navDetail.map((nav, index) => (
                <Link
                  key={nav.href}
                  href={nav.href}
                  className={cn(
                    nav.active
                      ? "bg-white/20 font-medium text-white"
                      : "text-white/70",
                    "px-4 py-2"
                  )}
                >
                  {nav.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
