import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Newsreader } from "@/app/layout";

export default function HeroArts() {
    return (
       <section className="w-full px-4 pt-28 md:px-10">
            <div className="overflow-hidden rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_28px_80px_-52px_rgba(15,23,42,0.28)] md:rounded-[2.25rem] md:px-10 md:py-10">
                <div>
                    <p className="inline-flex max-w-full rounded-full border border-black/10 bg-[#f5f4f0] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                        Parcours • Explo Arts
                    </p>
                    <h1 className={`mt-5 text-[2.65rem] leading-none sm:text-5xl md:mt-6 md:text-7xl ${Newsreader.className}`}>
                        Explorer la matière, l&apos;image et la forme.
                    </h1>
                </div>
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.72fr)] lg:items-center xl:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)]">
                    <div className="min-w-0 max-w-2xl">

                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg md:mt-6 md:text-xl md:leading-8">
                            Explo Arts propose une approche concrète de la création: observer, expérimenter, développer des techniques et produire des réalisations qui ont une présence réelle.
                        </p>
                        <div className="mt-6 flex max-w-xl items-center gap-4 rounded-2xl border border-black/10 bg-[#f7f6f2] p-3 sm:gap-5 sm:p-4">
                            <div className="w-20 shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-white sm:w-24">
                                <div className="relative aspect-2/3">
                                    <Image
                                        src="/images/exploarts.webp"
                                        width={1000}
                                        height={1500}
                                        alt="Logo Explo Arts"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm">
                                    Identité du parcours
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                                    Le logo d&apos;Explo Arts apparaît maintenant dès le hero pour donner un repère visuel clair au parcours.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-end lg:-mr-2 xl:-mr-4">
                        <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-[0_32px_80px_-48px_rgba(15,23,42,0.28)] md:rounded-4xl">
                            <div className="relative aspect-16/10 xl:aspect-5/3">
                                <Image
                                    src="/images/explo-art/DSC00976.jpg"
                                    width={1920}
                                    height={1280}
                                    alt="Élèves du parcours Explo Arts"
                                    className="h-full w-full object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02)_0%,rgba(15,23,42,0.12)_100%)]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                    <Link
                        href="/projets"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                    >
                        Voir les projets
                        <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="#boutique"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-[#f8f7f3] px-5 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-black sm:w-auto sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                    >
                        Voir la boutique
                    </Link>
                </div>
            </div>
        </section>
    );
}
