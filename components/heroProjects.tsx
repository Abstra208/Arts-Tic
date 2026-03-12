import { Newsreader } from "@/app/layout";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
    {
        src: "/images/projets/mode.jpg",
        alt: "Projet de mode présenté dans la galerie",
        className: "col-span-2 row-span-2",
    },
    {
        src: "/images/projets/montage_affiche.png",
        alt: "Affiche issue d'un projet du parcours",
        className: "",
    },
    {
        src: "/images/projets/maquette.jpg",
        alt: "Maquette réalisée dans un projet",
        className: "",
    },
    {
        src: "/images/projets/hero.jpg",
        alt: "Projet visuel présenté dans la galerie",
        className: "md:col-span-2",
    },
];

export default function HeroProjects() {
    return (
        <section className="w-full px-4 pt-28 md:px-10">
            <div className="overflow-hidden rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_28px_80px_-52px_rgba(15,23,42,0.28)] md:rounded-[2.25rem] md:px-10 md:py-10">
                <div>
                    <p className="inline-flex max-w-full rounded-full border border-black/10 bg-[#f5f4f0] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                        Galerie • Projets
                    </p>
                    <h1 className={`mt-5 text-[2.65rem] leading-none sm:text-5xl md:mt-6 md:text-7xl ${Newsreader.className}`}>
                        Voir ce que les parcours produisent, exposent et font circuler.
                    </h1>
                </div>
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.72fr)] lg:items-center xl:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)]">
                    <div className="min-w-0 max-w-2xl">
                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg md:mt-6 md:text-xl md:leading-8">
                            Cette page rassemble des réalisations issues d&apos;Explo Arts et de TIC et créativité. On y retrouve des objets, des images, des affiches, des maquettes et d&apos;autres formes de production liées aux deux parcours.
                        </p>
                    </div>
                    <div className="min-w-0 lg:-mr-2 xl:-mr-4">
                        <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-[0_32px_80px_-48px_rgba(15,23,42,0.28)] md:rounded-4xl">
                            <div className="relative aspect-3/2">
                                <div className="grid h-full grid-cols-3 grid-rows-3 gap-3 p-3">
                                    {heroImages.map((image) => (
                                        <div
                                            key={`${image.src}-${image.className}`}
                                            className={`overflow-hidden rounded-[1.2rem] border border-black/10 bg-[#f7f6f2] p-2 ${image.className}`}
                                        >
                                            <div className="relative h-full overflow-hidden rounded-[0.9rem]">
                                                <Image src={image.src} width={1200} height={900} alt={image.alt} className="h-full w-full object-cover" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02)_0%,rgba(15,23,42,0.08)_100%)]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                    <Link
                        href="#galerie"
                        scroll={false}
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                    >
                        Voir tous les projets
                        <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="/tic-creativite"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-[#f8f7f3] px-5 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-black sm:w-auto sm:flex-nowrap sm:px-6 sm:py-4 sm:text-base sm:whitespace-nowrap"
                    >
                        Explorer les parcours
                    </Link>
                </div>
            </div>
        </section>
    );
}
