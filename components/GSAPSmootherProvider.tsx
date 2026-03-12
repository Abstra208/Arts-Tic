// components/GSAPSmootherProvider.tsx
"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
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
    const smootherRef = useRef<ScrollSmoother | null>(null);
    const ctxRef = useRef<gsap.Context | null>(null);

    const pathname = usePathname();

    // Effect to initialize/re-initialize ScrollSmoother
    useGSAP(() => {
        // Always create ScrollSmoother to maintain its environment
        ctxRef.current = gsap.context(() => {
            if (smootherWrapperRef.current && smootherContentRef.current) {
                smootherRef.current = ScrollSmoother.create({
                    wrapper: smootherWrapperRef.current,
                    content: smootherContentRef.current,
                    smooth: 2, // Apply dynamic smooth value
                    effects: true,
                    normalizeScroll: true, // Recommended for consistent behavior
                    // ignoreMobileResize: true, // You might try this for mobile behavior with keyboard
                });
                ScrollTrigger.refresh();
            }
        }, smootherWrapperRef);
        // Cleanup function: This runs when `windowWidth` changes or component unmounts
        return () => {
            console.log("Cleaning up GSAP context...");
            if (ctxRef.current) {
                ctxRef.current.revert(); // This will kill `smoother` and all ScrollTriggers created in this context
            }
            smootherRef.current = null; // Ensure the smoother reference is cleared
        };
    }, []);

    useEffect(() => {
        const scrollToHash = (value: string) => {
            if (!value) {
                smootherRef.current?.scrollTo(0, false);
                return;
            }

            requestAnimationFrame(() => {
                smootherRef.current?.scrollTo(value, true, "top top");
                console.log(`Scrolling to ${value}`);
            });
        };

        window.history.scrollRestoration = "manual";

        // Scroll on initial load / route updates
        scrollToHash(window.location.hash);

        // Intercept same-page hash links (including next/link)
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            const anchor = target?.closest("a[href*='#']") as HTMLAnchorElement | null;
            if (!anchor) return;

            const url = new URL(anchor.href, window.location.href);
            if (url.pathname !== window.location.pathname || !url.hash) return;

            e.preventDefault();
            window.history.pushState({}, "", url.hash);
            scrollToHash(url.hash);
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
        };
    }, [pathname]);

    return (
        <div
            ref={smootherWrapperRef}
            id="smooth-wrapper"
            // Modified styles to allow trackpad gestures while maintaining smooth scrolling
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflowY: "hidden", // Changed to auto to allow native gestures
                overflowX: "auto", // Allow horizontal gestures to pass through
                WebkitOverflowScrolling: "touch", // Improve touch scrolling
                touchAction: "pan-y", // Allow vertical scrolling but enable horizontal swipes
            }}
        >
            <div
                ref={smootherContentRef}
                id="smooth-content"
                className={className}
                // No special style needed here, it's always transformed by Smoother
            >
                {children}
            </div>
        </div>
    );
}