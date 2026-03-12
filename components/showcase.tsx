import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Newsreader } from '@/app/layout';

interface ShowcaseProps {
    children?: React.ReactNode
    moreButtonText?: string
}

const desktopCardPositions = [
    'md:left-[2%] md:top-14 md:-rotate-10 md:z-10',
    'md:left-1/2 md:top-2 md:-translate-x-1/2 md:z-30',
    'md:right-[2%] md:top-14 md:rotate-10 md:z-20',
];

const mobileCardPositions = [
    'left-[2%] top-8 -rotate-10 z-10',
    'left-1/2 top-0 -translate-x-1/2 z-30',
    'right-[2%] top-8 rotate-10 z-20',
];

const desktopCardSizes = [
    'md:w-[13rem] lg:w-[14.75rem]',
    'md:w-[15rem] lg:w-[17.5rem]',
    'md:w-[13rem] lg:w-[14.75rem]',
];

const mobileCardSizes = [
    'w-[8.5rem] sm:w-[9.5rem]',
    'w-[10rem] sm:w-[11rem]',
    'w-[8.5rem] sm:w-[9.5rem]',
];

export default function Showcase({ children, moreButtonText }: ShowcaseProps) {
    const childArray = React.Children.toArray(children).slice(0, 3);
    const renderShowcaseChild = (child: React.ReactNode) => {
        if (!React.isValidElement<{ className?: string }>(child)) {
            return child;
        }

        const existingClassName = child.props.className || '';

        return React.cloneElement(child, {
            className: `h-full w-full object-cover ${existingClassName}`.trim(),
        });
    };

    return (
        <section className="pt-16">
            <div className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.28)]">
                <div className="grid gap-8 px-5 py-6 md:px-10 md:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                                Projets d&apos;élèves
                            </p>
                            <h3 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>
                                Voir ce que le programme produit vraiment.
                            </h3>
                            <p className="mt-4 max-w-lg text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8">
                                Des objets, des maquettes, des images et des propositions visuelles qui montrent comment les idées prennent forme dans la concentration.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                            <span className="whitespace-nowrap rounded-full border border-black/10 bg-[#f6f5f1] px-4 py-2">Maquettes</span>
                            <span className="whitespace-nowrap rounded-full border border-black/10 bg-[#f6f5f1] px-4 py-2">Volume</span>
                            <span className="whitespace-nowrap rounded-full border border-black/10 bg-[#f6f5f1] px-4 py-2">Création numérique</span>
                        </div>
                        <Link
                            href="/projets"
                            className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:mt-8 sm:w-fit sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                        >
                            {moreButtonText || 'Voir plus'}
                            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="relative min-h-80 sm:min-h-88 md:min-h-136">
                            {childArray.map((child, index) => (
                                <div
                                    key={index}
                                    className={`absolute overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.22)] transition-transform duration-300 md:rounded-[1.75rem] md:p-3 md:shadow-[0_28px_70px_-40px_rgba(15,23,42,0.22)] md:hover:z-40 md:hover:scale-[1.06] ${mobileCardSizes[index] || 'w-34 sm:w-38'} ${desktopCardSizes[index] || 'md:w-52 lg:w-59'} ${mobileCardPositions[index] || 'left-1/2 -translate-x-1/2 z-10'} ${desktopCardPositions[index] || 'md:left-1/2 md:-translate-x-1/2 md:z-10'}`}
                                >
                                    <div className="aspect-[2.5/4] overflow-hidden rounded-2xl bg-[#f3f2ee] md:rounded-[1.2rem]">
                                        {renderShowcaseChild(child)}
                                    </div>
                                </div>
                            ))}
                            <div className="absolute bottom-0 left-1/2 w-[min(100%,18rem)] -translate-x-1/2 rounded-[1.35rem] border border-black/10 bg-[#f7f6f2] px-4 py-3 text-center shadow-[0_18px_45px_-34px_rgba(15,23,42,0.18)] md:w-auto md:rounded-3xl md:px-5 md:py-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Galerie</p>
                                <p className="mt-1 text-base font-semibold text-slate-900 text-nowrap md:text-lg">Une sélection de réalisations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
