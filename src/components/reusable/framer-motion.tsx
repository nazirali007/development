"use client";

import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react';

// export const SlideInView = ({ children, className = "", delay = 0.3, duration = 0.5 }: {
//     children: React.ReactNode;
//     className?: string;
//     delay?: number;
//     duration?: number;
// }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });

//     return (
//         // <div className={className}>
//         <motion.div
//             ref={ref}
//             style={{
//                 transform: isInView ? "none" : "translateY(100px)",
//                 opacity: isInView ? 1 : 0,
//                 transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
//             }}
//             className={className}
//         >
//             {children}
//         </motion.div>
//         // </div>
//     )
// }

export const SlideInView = ({ children, className = "", delay = 0.3, duration = 0.5, ease = "linear", distance = 100 }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate"
    distance?: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    return (
        // <div className={className}>
        <motion.div
            ref={ref}
            className={className}
            initial={"hidden"}
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 }
                },
                hidden: {
                    opacity: 0,
                    y: distance
                }
            }}
            transition={{ delay: delay, duration: duration, ease: ease }}
            animate={mainControls}
        >
            {children}
        </motion.div>
        // </div>
    )
}
