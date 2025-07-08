"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        if (isInitialLoad) {
            setIsInitialLoad(false);
            return;
        }
        
        setIsTransitioning(true);
        setIsDropdownOpen(false);
        setAnimationKey(prev => prev + 1);
        
        const timer = setTimeout(() => setIsTransitioning(false), 1000);
        return () => clearTimeout(timer);
    }, [pathname, isInitialLoad]);

    useEffect(() => {
        if (isTransitioning) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isTransitioning]);

    return (
        <>
            <header className="bg-[var(--header-bg)] fixed z-1000 grid grid-cols-[45%_10%_45%] h-24 w-screen items-end font-bold text-xl list-none">
                <div className="flex flex-row justify-around items-start h-16">
                    <li>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="relative w-8 h-8 transition-all duration-300 cursor-pointer">
                            <Menu className={`w-full h-full absolute inset-0 transition-all duration-300 ${isDropdownOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                            <X className={`w-full h-full absolute inset-0 transition-all duration-300 ${isDropdownOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                        </button>
                    </li>
                    <li>
                        <Link href="/niveaux" className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                            Niveaux
                        </Link>
                    </li>
                </div>
                <div className="flex justify-center items-center h-24">
                    <Link href="/">
                        <img className="h-14 w-14 hover:-rotate-5 transition-transform duration-300" src="/logo.webp" alt="Logo" />
                    </Link>
                </div>
                <div className="flex flex-row justify-around items-start h-16">
                    <li>
                        <Link href="/explo-arts" className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                            Explo Arts
                        </Link>
                    </li>
                    <li>
                        <Link href="/tic" className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                            TIC et créativité
                        </Link>
                    </li>
                </div>
            </header>
            <div className={`absolute left-0 w-full bg-white shadow-lg z-999 ${isDropdownOpen ? "top-24 opacity-100" : " top-0 opacity-0"} transition-all duration-300`}>
                <ul className="flex flex-col items-center py-4">
                    <li className="mb-2">
                        <Link href="/niveaux" className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                            Niveaux
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/explo-arts" className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                            Explo Arts
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/tic" className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                            TIC et créativité
                        </Link>
                    </li>
                </ul>
            </div>
            {isTransitioning && (
                <div key={animationKey} className="fixed top-0 left-0 w-full h-full bg-black z-[9999] transform-gpu" style={{ animation: 'slideDown 1s ease-in-out' }}></div>
            )}
            <style jsx>{`
                @keyframes slideDown {
                    0% {
                        transform: translateY(0%);
                    }
                    20% {
                        transform: translateY(0%);
                    }
                    100% {
                        transform: translateY(100%);
                    }
                }
            `}</style>
        </>
    );
}