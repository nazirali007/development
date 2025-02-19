"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

function InfiniteScroll({
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
    children
}: {
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
    children?: React.ReactNode;
}) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <>
            <div
                ref={containerRef}
                className={cn(
                    "scroller relative z-20 overflow-hidden",
                    className
                )}
            >
                <ul
                    ref={scrollerRef}
                    className={cn(
                        " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                        start && "animate-scroll ",
                        pauseOnHover && "hover:[animation-play-state:paused]"
                    )}
                >
                    {children}
                </ul>
            </div>

        </>
    )
}

export default InfiniteScroll