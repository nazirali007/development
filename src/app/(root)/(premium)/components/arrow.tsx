"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AnimatedSVG = ({ className = "" }: { className: string }) => {
    const scrollToForm = () => {
        const element = document.getElementById("offer-quote-form");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    return (
        <div className={cn(`${className}`)}>
            <svg width="inherit" className='w-1/2' height="107px" viewBox="0 0 315 107" version="1.1" style={{ overflow: 'visible' }}>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path
                        id="Path-1"
                        className="path"
                        fill="none"
                        stroke="white"
                        strokeWidth="5"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
                    />

                    <path
                        className="dashed"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
                    />

                    <motion.polyline
                        id="arrow"
                        points="0,-9 18,0 0,9 5,0"
                        fill="currentColor"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3, delay: 1 }}
                        onClick={scrollToForm}
                        style={{ cursor: 'pointer' }}
                    >
                        <animateMotion rotate="auto" begin="1s" dur="3s" repeatCount="1" fill="freeze">
                            <mpath xlinkHref="#Path-1" />
                        </animateMotion>
                    </motion.polyline>
                </g>
            </svg>
        </div>
    );
};

export default AnimatedSVG;

