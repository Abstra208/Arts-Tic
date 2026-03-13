import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Newsreader } from "@/app/layout";

export default function Hero() {
    return (
        <section className="w-full pt-25">
            <div className="overflow-hidden rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_28px_80px_-52px_rgba(15,23,42,0.28)] md:rounded-[2.25rem] md:px-10 md:py-10">
                <div>
                    <p className="inline-flex max-w-full rounded-full border border-black/10 bg-[#f5f4f0] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                        La Camaradière • Arts et TIC
                    </p>
                    <h1 className={`mt-5 text-[2.65rem] leading-none sm:text-5xl md:mt-6 md:text-7xl ${Newsreader.className}`}>
                        Créer avec les arts, les outils et les idées.
                    </h1>
                </div>
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.72fr)] lg:items-center xl:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)]">
                    <div className="min-w-0 max-w-2xl">

                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg md:mt-6 md:text-xl md:leading-8">
                            Un programme où les élèves explorent les arts visuels, la création numérique et la fabrication dans des projets concrets.
                        </p>
                        <div className="mt-6 flex max-w-xl items-center gap-4 rounded-[1.4rem] border border-black/10 bg-[#f7f6f2] p-3 sm:gap-5 sm:p-4">
                            <div className="w-28 sm:w-32">
                                <Image
                                    src="/images/logo-tic.png"
                                    width={1000}
                                    height={1500}
                                    alt="Logo TIC et créativité"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <a
                                href="https://inscris-toi.cssc.gouv.qc.ca/Login"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                            >
                                S&apos;inscrire au programme
                                <ExternalLink size={18} />
                            </a>
                            <Link
                                href="#parcours"
                                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-[#f8f7f3] px-5 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-black sm:w-auto sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                            >
                                Découvrir les parcours
                                <ArrowRight size={18} />
                            </Link>                            
                        </div>
                    </div>
                    <div className="min-w-0 lg:-mr-2 xl:-mr-4">
                        <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-[0_32px_80px_-48px_rgba(15,23,42,0.28)] md:rounded-4xl">
                            <div className="relative aspect-16/10 xl:aspect-5/3">
                                <Image
                                    src="/images/hero.jpg"
                                    width={1920}
                                    height={1280}
                                    alt="Élèves du programme Arts et TIC de La Camaradière"
                                    className="h-full w-full object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02)_0%,rgba(15,23,42,0.12)_100%)]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                    <a
                        href="https://inscris-toi.cssc.gouv.qc.ca/Login"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                    >
                        S&apos;inscrire au programme
                        <ExternalLink size={18} />
                    </a>
                    <Link
                        href="#parcours"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-[#f8f7f3] px-5 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-black sm:w-auto sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                    >
                        Découvrir les parcours
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
