"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let scrollerWrapper: HTMLElement | null;

interface SideScrollProps {
    className?: string;
    children: React.ReactNode;
}

interface GroupProps {
    children: React.ReactNode;
    className?: string;
}

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

interface BodyProps {
    children?: React.ReactNode;
    className?: string;
}

const SideScrollGroup = ({ children, className }: GroupProps) => {
    return (
        <div className={`side-scroll-group h-[80vh] flex-shrink-0 ${className}`}>
            {children}
        </div>
    );
}

const SideScrollHeader = ({ className, children }: HeaderProps) => {
    return (
        <div className={`side-scroll-header w-full flex-shrink-0 mb-6 ${className}`}>
            {children}
        </div>
    );
}

const SideScrollBody = ({ className, children }: BodyProps) => {
    return (
        <div className={`side-scroll-body w-full flex flex-row flex-shrink-0 mb-6 ${className}`}>
            {children}
        </div>
    );
}

const SideScroll = ({ className, children }: SideScrollProps) => {
    useEffect(() => {
        const sections = gsap.utils.toArray<HTMLElement>(".side-scroll-group");
        console.log("sections", sections);

        const ctx = gsap.context(() => {
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "easeInOut",
                scrollTrigger: {
                    trigger: ".container",
                    start: "top top",
                    pin: true,
                    scrub: 1,
                    end: `+=${scrollerWrapper?.offsetWidth ? scrollerWrapper.offsetWidth * 2 : 0}`,
                    markers: true,
                    pinSpacing: true,
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={el => { scrollerWrapper = el; }} className={`container flex flex-col items-center ${className}`}>
            {children}
        </section>
    );
}

export { SideScroll, SideScrollGroup, SideScrollHeader, SideScrollBody };