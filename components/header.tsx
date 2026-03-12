'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Ellipsis, Minus } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const navItems = [
    { href: '/explo-arts', label: 'Explo Arts' },
    { href: '/tic-creativite', label: 'TIC et créativité' },
    { href: '/projets', label: 'Projets' },
];

export default function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileOpen]);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    useGSAP(
        () => {
            if (!mobileMenuRef.current) {
                return;
            }

            const links = mobileMenuRef.current.querySelectorAll('.mobile-nav-link');

            if (isMobileOpen) {
                gsap.fromTo(
                    links,
                    { opacity: 0, y: 26 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.45,
                        stagger: 0.06,
                        ease: 'power3.out',
                        clearProps: 'transform',
                    }
                );
            } else {
                gsap.set(links, { clearProps: 'all' });
            }
        },
        { dependencies: [isMobileOpen], scope: mobileMenuRef }
    );

    return (
        <header className="fixed inset-x-0 top-4 z-1000">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                <div className="relative flex items-center justify-between rounded-full border border-black/12 bg-[#fbfaf7]/98 px-4 py-3 shadow-[0_24px_80px_-34px_rgba(15,23,42,0.32)] backdrop-blur-lg md:rounded-[1.9rem] md:px-6">
                    <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5" />
                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            className="group flex items-center gap-3"
                            onClick={() => setIsMobileOpen(false)}
                            aria-current={isHomePage ? 'page' : undefined}
                        >
                            <Image className="h-8 w-auto" height={500} width={500} src="/logo.webp" alt="Logo Arts et TIC" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-semibold text-black transition-transform duration-500 ease-in-out sm:text-3xl">
                                    Arts & TIC
                                </span>
                                <span
                                    className={`rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${
                                        isHomePage
                                            ? 'border-black/12 bg-[#f3f0e7] text-slate-700'
                                            : 'border-transparent bg-transparent text-slate-400 group-hover:border-black/8 group-hover:bg-[#f5f4f0] group-hover:text-slate-600'
                                    }`}
                                >
                                    Accueil
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className={`text-black transition-transform duration-500 ease-in-out`}>
                        <ul className="hidden items-center gap-8 text-lg md:flex">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <li key={item.href}>
                                        <Link
                                            className="group relative font-medium transition-colors duration-200"
                                            href={item.href}
                                        >
                                            {item.label}
                                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <button
                            type="button"
                            className="rounded-full border border-black/10 bg-white p-2 shadow-sm md:hidden"
                            onClick={() => setIsMobileOpen((open) => !open)}
                            aria-expanded={isMobileOpen}
                            aria-controls="mobile-navigation"
                            aria-label={isMobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        >
                            <div className="relative h-6 w-6">
                                <Minus className={`absolute inset-0 transition-all duration-300 ${isMobileOpen ? 'opacity-100' : 'opacity-0'}`} />
                                <Ellipsis className={`absolute inset-0 transition-all duration-300 ${isMobileOpen ? 'opacity-0' : 'opacity-100'}`} />
                            </div>
                        </button>
                    </div>
                </div>

                <div
                    ref={mobileMenuRef}
                    id="mobile-navigation"
                    className={`mt-3 overflow-hidden rounded-4xl border border-black/12 bg-[#fbfaf7] shadow-[0_24px_80px_-38px_rgba(15,23,42,0.3)] transition-all duration-300 md:hidden ${isMobileOpen ? 'pointer-events-auto max-h-[75dvh] opacity-100' : 'pointer-events-none max-h-0 opacity-0'}`}
                >
                    <div className="flex flex-col px-5 py-5">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;

                            return (
                                <div key={item.href} className={`${index !== navItems.length - 1 ? 'border-b border-black/8' : ''}`}>
                                    <Link
                                        href={item.href}
                                        className={`mobile-nav-link flex items-center justify-between py-4 text-2xl font-medium text-slate-900 transition-colors duration-200 ${isActive ? 'text-black' : ''}`}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        <span className={`${isActive ? 'font-bold text-black' : 'text-gray-500'}`}>
                                            {item.label}
                                        </span>
                                        <span className="text-sm uppercase tracking-[0.2em] text-slate-400">
                                            0{index + 1}
                                        </span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <div className="border-t border-black/8 px-5 py-4 text-sm text-slate-500">
                        <a href="https://crealab.ca" target='_blank' rel="noopener noreferrer" className="transition-colors duration-200 hover:text-black">
                            © 2025 CréaLab
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
