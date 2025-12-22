'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Ellipsis, Minus } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Header() {
    const pathname = usePathname();
    const [scrolledDown, setScrolledDown] = useState(false);
    const [MobileOpened, setMobileOpened] = useState(false);

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

    useGSAP(() => {
        const links = document.querySelectorAll('.mobile-nav-link');
        if (MobileOpened) {
            gsap.fromTo(
                links, { opacity: 0, y: 50, rotateX: -45, scale: 0.95 },
                {
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0, 
                    scale: 1,
                    duration: 0.7, 
                    stagger: 0.08, 
                    ease: 'power3.out',
                    clearProps: 'transform'
                }
            );
        } else {
            gsap.to(links, {
                opacity: 0, 
                y: 20, 
                scale: 0.98,
                duration: 0.25, 
                stagger: 0.03,
                ease: 'power2.in'
            });
        }
    }, [MobileOpened]);

    function toggleMenuMobile() {
        setMobileOpened(!MobileOpened);
        if (MobileOpened) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }
    
    return (
        <header className="fixed top-4 flex flex-row justify-between items-center z-1000 w-screen px-4 md:px-15">
            <div className="z-1 flex flex-row justify-center items-center" onClick={() => { if (MobileOpened) toggleMenuMobile() }}>
                <Link href="/">
                    <Image className="h-11 w-auto" height={1736} width={2036} src="/logo.webp" alt="" />
                </Link>
                <Link href="/" className={`${scrolledDown ? 'transform -translate-y-20' : 'transform translate-y-0'} transition-transform duration-500 ease-in-out`}>
                    <h1 className="text-4xl text-bold text-black transition-transform duration-500 ease-in-out pl-3">
                        Arts & TIC
                    </h1>
                </Link>
            </div>
            <div className={`z-1 text-black transition-transform duration-600 ease-in-out ${scrolledDown ? 'transform -translate-y-20' : 'transform translate-y-0'}`}>
                <ul className="flex-row justify-center items-center space-x-8 text-lg text-bold hidden md:flex">
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
                            className={`font-medium transition-colors duration-200 relative group ${pathname === '/projets' ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black' : ''}`}
                            href="/projets"
                        >
                            Projets
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${pathname === '/projets' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
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
                <button className="md:hidden bg-gray-100 rounded-full p-2" onClick={toggleMenuMobile}>
                    <div className="relative w-6 h-6">
                        <Minus className={`absolute inset-0 transition-all duration-300 ${MobileOpened ? 'opacity-100' : 'opacity-0'}`} />
                        <Ellipsis className={`absolute inset-0 transition-all duration-300 ${MobileOpened ? 'opacity-0' : 'opacity-100'}`} />
                    </div>
                </button>
            </div>
            <div className={`${MobileOpened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} flex flex-col justify-between transition-all duration-500 md:hidden fixed top-0 left-0 w-screen h-dvh z-0 bg-white text-center`}>
                <ul className='mt-[17vh] space-y-6 text-3xl'>
                    <li className='flex flex-col items-center space-y-6'>
                        <Link
                            href="/"
                            onClick={() => { if (MobileOpened) toggleMenuMobile() }}
                            className='mobile-nav-link'
                        >
                            Accueil
                        </Link>
                        <div className='w-[90vw] h-px bg-black'></div>
                    </li>
                    <li className='flex flex-col items-center space-y-6'>
                        <Link
                            href="/projets"
                            onClick={() => { if (MobileOpened) toggleMenuMobile() }}
                            className='mobile-nav-link'
                        >
                            Projets
                        </Link>
                        <div className='w-[90vw] h-px bg-black'></div>
                    </li>
                    <li className='flex flex-col items-center space-y-6'>
                        <Link
                            href="/explo-arts"
                            onClick={() => { if (MobileOpened) toggleMenuMobile() }}
                            className='mobile-nav-link'
                        >
                            Explo Arts
                        </Link>
                        <div className='w-[90vw] h-px bg-black'></div>
                    </li>
                    <li className='flex flex-col items-center space-y-6'>
                        <Link
                            href="/tic-creativite"
                            onClick={() => { if (MobileOpened) toggleMenuMobile() }}
                            className='mobile-nav-link'
                        >
                            TIC et créativité
                        </Link>
                        <div className='w-[90vw] h-px bg-black'></div>
                    </li>
                </ul>
                <div className="mb-[3vh]">
                    <a href='https://crealab.ca' className='text-xl text-gray-500'>© 2025 CréaLab</a>
                </div>
            </div>
        </header>
    );
}
