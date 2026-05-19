'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Ellipsis, Minus } from 'lucide-react';

const navItems = [
    {
        href: '/explo-arts',
        label: 'Explo Arts',
        dropdown: [
            { label: 'À propos', href: '/explo-arts#propos' },
            { label: 'Étapes', href: '/explo-arts#etapes' },
            { label: 'Productions', href: '/explo-arts#productions' },
            { label: 'Locaux', href: '/explo-arts#locaux' },
            { label: 'Réalisation', href: '/explo-arts#realisations' },
            { label: 'Articles promotionnels', href: '/explo-arts#boutique' },
        ],
    },
    {
        href: '/tic-creativite',
        label: 'TIC et créativité',
        dropdown: [
            { label: 'À propos', href: '/tic-creativite#propos' },
            { label: 'Étapes', href: '/tic-creativite#etapes' },
            { label: 'Productions', href: '/tic-creativite#productions' },
            { label: 'Locaux', href: '/tic-creativite#locaux' },
            { label: 'Réalisation', href: '/tic-creativite#realisations' },
            { label: 'Articles promotionnels', href: '/tic-creativite#boutique' },
        ],
    },
    {
        href: '/galerie',
        label: 'Galerie',
        dropdown: [
            { label: 'Projets Arts', href: '/galerie#arts' },
            { label: 'Projets TIC', href: '/galerie#tic' },
        ],
    },
];

export default function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);
    const previousScrollYRef = useRef(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [mobileOpenItem, setMobileOpenItem] = useState<string | null>(null);
    const shouldHideHeader = scrollDirection === 'down' && !isMobileOpen;

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setScrollDirection('up');
                previousScrollYRef.current = currentScrollY;
                return;
            }

            if (currentScrollY > previousScrollYRef.current) {
                setScrollDirection('down');
            } else if (currentScrollY < previousScrollYRef.current) {
                setScrollDirection('up');
            }

            previousScrollYRef.current = currentScrollY;
        };

        previousScrollYRef.current = window.scrollY;
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    useEffect(() => {
        const offset = shouldHideHeader ? '0px' : '5rem';
        document.documentElement.style.setProperty('--header-offset', offset);

        return () => {
            document.documentElement.style.removeProperty('--header-offset');
        };
    }, [shouldHideHeader]);

    useEffect(() => {
        setIsMobileOpen(false);
        setScrollDirection(null);
        setMobileOpenItem(null);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-1000 overflow-x-hidden bg-secondary transition-all duration-300 ease-out" style={{ transform: shouldHideHeader ? 'translateY(-100%)' : 'none' }}>
            <div className="w-full px-5 md:px-15">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center text-foreground">
                        <Link
                            href="/"
                            className="group flex items-center gap-3"
                            onClick={() => setIsMobileOpen(false)}
                            aria-current={isHomePage ? 'page' : undefined}
                        >
                            <Image className="h-9 w-auto" height={500} width={500} src="/logo.svg" alt="Logo Arts et TIC" />
                            <span className="text-2xl font-semibold transition-transform duration-500 ease-in-out">
                                Arts & TIC
                            </span>
                        </Link>
                    </div>

                    <div className="text-secondary-text transition-transform duration-500 ease-in-out">
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
                            className="rounded-full border border-black/10 bg-white p-2 shadow-sm text-foreground lg:hidden"
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
                    className={`fixed whitespace-nowrap h-screen w-screen top-0 right-0 mt-19 transition-all duration-300 bg-white lg:hidden ${isMobileOpen ? 'pointer-events-auto translate-x-0' : 'pointer-events-none translate-x-full'}`}
                >
                    <div className="flex flex-col border-y border-black/8">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            const isDropdownOpen = mobileOpenItem === item.href;
                            const dropdownId = `mobile-dropdown-${index}`;

                            return (
                                <div
                                    key={item.href}
                                    className={`${index !== navItems.length - 1 ? 'border-b border-black/8' : ''} flex flex-col`}
                                >
                                    <div className="flex items-center justify-between px-5">
                                        <Link
                                            href={item.href}
                                            className={`mobile-nav-link flex items-center justify-between py-4 text-2xl font-medium transition-colors duration-200 ${isActive ? 'text-black' : ''}`}
                                            onClick={() => {
                                                setIsMobileOpen(false);
                                                setMobileOpenItem(null);
                                            }}
                                        >
                                            <span className={`${isActive ? 'font-bold text-gray-700' : 'text-gray-500'}`}>
                                                {item.label}
                                            </span>
                                        </Link>
                                        <button
                                            type="button"
                                            className="rounded-full text-gray-500 transition-colors duration-200 hover:text-gray-700"
                                            aria-expanded={isDropdownOpen}
                                            aria-controls={dropdownId}
                                            onClick={() => {
                                                setMobileOpenItem((current) => (current === item.href ? null : item.href));
                                            }}
                                        >
                                            <ChevronDown
                                                className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                    <div
                                        id={dropdownId}
                                        className={`overflow-hidden transition-all duration-300 ${isDropdownOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <ul className="flex flex-col gap-2 pb-4 px-5">
                                            {item.dropdown.map((linkItem) => (
                                                <li key={linkItem.href}>
                                                    <Link
                                                        href={linkItem.href}
                                                        className="block text-base text-gray-500 transition-colors duration-200 hover:text-gray-700"
                                                        onClick={() => {
                                                            setIsMobileOpen(false);
                                                            setMobileOpenItem(null);
                                                        }}
                                                    >
                                                        {linkItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="px-5 py-4 text-sm -500">
                        <a href="https://crealab.ca" target='_blank' rel="noopener noreferrer" className="transition-colors duration-200 hover:text-black">
                            © 2025 CréaLab
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
