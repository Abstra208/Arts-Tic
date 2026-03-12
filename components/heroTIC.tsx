import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Newsreader } from "@/app/layout";

export default function HeroTIC() {
    return (
       <section className="w-full pt-25">
            <div className="overflow-hidden rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_28px_80px_-52px_rgba(15,23,42,0.28)] md:rounded-[2.25rem] md:px-10 md:py-10">
                <div>
                    <p className="inline-flex max-w-full rounded-full border border-black/10 bg-[#f5f4f0] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                        Parcours • TIC et créativité
                    </p>
                    <h1 className={`mt-5 text-[2.65rem] leading-none sm:text-5xl md:mt-6 md:text-7xl ${Newsreader.className}`}>
                        Concevoir, raconter et produire avec le numérique.
                    </h1>
                </div>
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.72fr)] lg:items-center xl:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)]">
                    <div className="min-w-0 max-w-2xl">
                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg md:mt-6 md:text-xl md:leading-8">
                            Le parcours TIC et créativité relie image, médias, outils numériques et production visuelle dans des projets où les idées prennent rapidement une forme concrète.
                        </p>
                    </div>
                    <div className="min-w-0 lg:-mr-2 xl:-mr-4">
                        <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-[0_32px_80px_-48px_rgba(15,23,42,0.28)] md:rounded-4xl">
                            <div className="relative aspect-16/10 xl:aspect-5/3">
                                <Image
                                    src="/images/tic/hero.jpg"
                                    width={1920}
                                    height={1280}
                                    alt="Élèves du parcours TIC et créativité"
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
                        href="#reperes"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                    >
                        Découvrir le parcours
                        <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="/projets"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-[#f8f7f3] px-5 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-black sm:w-auto sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                    >
                        Voir les projets
                    </Link>
                </div>
            </div>
        </section>
    );
}
