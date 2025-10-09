'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [scrolledDown, setScrolledDown] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolledDown(currentScrollY > lastScrollY && currentScrollY > 20);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className="fixed top-4 flex flex-row justify-between items-center z-1000 w-screen px-15">
            <Link href="/" className="flex flex-row justify-center items-center space-x-3 text-4xl text-bold" scroll={false}>
                <img className="h-11 w-auto" src="/logo.webp" alt="" />
                <h1 className={`text-black transition-transform duration-500 ease-in-out ${scrolledDown ? 'transform -translate-y-20' : 'transform translate-y-0'}`}>
                    Arts & TIC
                </h1>
            </Link>
            <div className={`text-black transition-transform duration-600 ease-in-out ${scrolledDown ? 'transform -translate-y-20' : 'transform translate-y-0'}`}>
                <ul className="flex flex-row justify-center items-center space-x-8 text-lg text-bold">
                    <li>
                        <Link
                            className={`font-medium transition-colors duration-200 relative group ${pathname === '/about' ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black' : ''}`}
                            href="/"
                        >
                            Accueil
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`font-medium transition-colors duration-200 relative group ${pathname === '/niveaux' ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black' : ''}`} 
                            href="/niveaux"
                        >
                            Niveaux
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${pathname === '/niveaux' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`font-medium transition-colors duration-200 relative group ${pathname === '/explo-arts' ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black' : ''}`}
                            href="/explo-arts"
                        >
                            Explo Arts
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${pathname === '/explo-arts' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`font-medium transition-colors duration-200 relative group ${pathname === '/tic-creativite' ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black' : ''}`}
                            href="/tic-creativite"
                        >
                            TIC et créativité
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${pathname === '/tic-creativite' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
