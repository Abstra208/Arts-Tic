"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SectionSelector({
    sections,
}: Readonly<{
    sections: { id: string; title: string }[];
}>) {
    const router = useRouter();
    const [currentSection, setCurrentSection] = useState<string | undefined>(undefined);
    const tabsRef = useRef<HTMLDivElement | null>(null);
    const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.id;
                }
            });
            setCurrentSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!currentSection) {
            return;
        }

        if (!window.matchMedia("(max-width: 768px)").matches) {
            return;
        }

        const container = tabsRef.current;
        const button = buttonRefs.current.get(currentSection);

        if (!container || !button) {
            return;
        }

        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const isVisible =
            buttonRect.left >= containerRect.left && buttonRect.right <= containerRect.right;

        if (!isVisible) {
            button.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
    }, [currentSection]);

    return (
        <header
            className="w-screen p-5 flex justify-center sticky z-100 text-white top-(--header-offset) transition-all duration-300 ease-out"
        >
            <div
                ref={tabsRef}
                className="w-full md:w-auto overflow-scroll flex p-2 bg-foreground rounded-2xl"
            >
                {sections.map((section) => (
                    <button
                        key={section.id}
                        ref={(element) => {
                            if (element) {
                                buttonRefs.current.set(section.id, element);
                            } else {
                                buttonRefs.current.delete(section.id);
                            }
                        }}
                        className={`px-4 py-2 cursor-pointer whitespace-nowrap ${
                            section.id === currentSection
                                && "underline underline-offset-4"
                        }`}
                        onClick={() => {
                            router.push(`#${section.id}`);
                        }}
                    >
                        {section.title}
                    </button>
                ))}
            </div>
        </header>
    );
}