"use client";
import Image from "next/image";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export default function HeroArts() {
    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.fromTo(".hero-arts-title",
            { x: -500 },
            { x: 0, duration: 1, ease: "expo.inOut" }
        );
        tl.fromTo(".hero-arts-logo",
            { x: 150 },
            { x: 0, duration: 1, ease: "expo.inOut" },
            "<"
        );

        return () => {
            tl.kill();
        };
    }, []);
    return (
        <section className="w-full h-screen">
            <div className="h-full flex flex-row justify-center items-center text-center">
                <div className="h-60 flex items-center justify-end mr-6 relative hero-arts-logo">
                    <div className="absolute bg-white w-[50vw] h-50 z-1"></div>
                    <Image alt="" src="/images/exploarts.webp" width={50} height={50} className="h-full w-auto relative z-2" />
                </div>
                <div className="flex flex-col items-start hero-arts-title -z-1">
                    <h1 className="text-xl md:text-2xl">Parcours</h1>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Explo Arts</h1>
                </div>
            </div>
        </section>
    );
}