"use client";

import React from 'react'
import { Share2 } from 'lucide-react';
import { RWebShare } from "react-web-share";
import { cn } from '@/lib/utils';

export const ShareButton = ({
    data,
    className = "",
    type = "base"
}: {
    data: {
        text: string,
        url: string,
        title: string
    };
    className?: string;
    type?: "base" | "rounded";
}) => {
    return (
        <>
            <RWebShare
                data={data}
            // onClick={() => console.log("shared successfully!")}
            >
                <span className={cn('flex flex-row text-sm w-fit items-center transition duration-150 ease-in-out border-white border inset-1 p-2 h-8 rounded-full hover:bg-slate-100 text-white hover:text-black',
                    type === 'rounded' ? 'rounded-full' : 'rounded-lg',
                    `${className}`
                )}>
                    {type === "base" ? (
                        <>
                            Share <Share2 size={16} className='ml-1' />
                        </>
                    ) : (
                        <>
                            <Share2 size={16}
                            />
                        </>
                    )}
                </span>
            </RWebShare>
        </>
    )
}