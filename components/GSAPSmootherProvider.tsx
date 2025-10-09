// components/GSAPSmootherProvider.tsx
"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface GSAPSmootherProviderProps {
    className?: string;
    children: React.ReactNode;
}

export default function GSAPSmootherProvider({
    className,
    children,
}: GSAPSmootherProviderProps) {
    const smootherWrapperRef = useRef<HTMLDivElement>(null);
    const smootherContentRef = useRef<HTMLDivElement>(null);
    let smoother: ScrollSmoother | null = null;
    let ctx: gsap.Context | null = null;

    const pathname = usePathname();

    // Effect to initialize/re-initialize ScrollSmoother
    useEffect(() => {
        // Always create ScrollSmoother to maintain its environment
        ctx = gsap.context(() => {
            if (smootherWrapperRef.current && smootherContentRef.current) {
                smoother = ScrollSmoother.create({
                    wrapper: smootherWrapperRef.current,
                    content: smootherContentRef.current,
                    smooth: 2, // Apply dynamic smooth value
                    effects: true,
                    normalizeScroll: true, // Recommended for consistent behavior
                    // ignoreMobileResize: true, // You might try this for mobile behavior with keyboard
                });
            }
        }, smootherWrapperRef);
        // Cleanup function: This runs when `windowWidth` changes or component unmounts
        return () => {
            console.log("Cleaning up GSAP context...");
            if (ctx) {
                ctx.revert(); // This will kill `smoother` and all ScrollTriggers created in this context
            }
            smoother = null; // Ensure the smoother reference is cleared
        };
    }, []);

    useEffect(() => {
        // Get the hash from window.location instead
        const hash = window.location.hash;
        
        if (hash) {
            smoother?.scrollTo(hash);
            console.log(`Scrolling to ${hash}`);
        } else {
            window.scroll(0, 0);
        }
    }, [pathname]);

    return (
        <div
            ref={smootherWrapperRef}
            id="smooth-wrapper"
            className={className}
            // These styles are necessary for ScrollSmoother to intercept scrolling
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden", // Always hidden, let ScrollSmoother handle scrolling
            }}
        >
            <div
                ref={smootherContentRef}
                id="smooth-content"
                // No special style needed here, it's always transformed by Smoother
            >
                {children}
            </div>
        </div>
    );
}