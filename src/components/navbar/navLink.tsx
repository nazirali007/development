"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navlink = ({ children, className = "", activeClassName = "", href = "#" }: {
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
    href: string;
}) => {
    const [activeSlug, setActiveSlug] = useState<boolean>(false);
    const path = usePathname();

    useEffect(() => {
        if (path === href) {
            setActiveSlug(true);
        } else {
            setActiveSlug(false);
        }
    }, [path, href]);

    return (
        <a
            href={href}
            // passHref
            className={cn('relative ', `${className}`, activeSlug ? `${activeClassName}` : '')}
        >
            {children}
        </a>
    );
}