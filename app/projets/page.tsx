import { Newsreader } from "@/app/layout";
import HeroProjects from "@/components/heroProjects";
import PageEndCta from "@/components/pageendcta";
import ProjectsGrid from "@/components/projectsgrid";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const overviewCards = [
    {
        eyebrow: "Deux parcours",
        title: "Des projets issus d'Explo Arts et de TIC et créativité.",
        text: "La galerie rassemble des réalisations qui viennent autant de la fabrication matérielle que de la production visuelle et numérique.",
    },
    {
        eyebrow: "Formats variés",
        title: "Objets, affiches, maquettes, images et volumes.",
        text: "Les projets montrent la diversité des approches travaillées dans le programme et la manière dont elles prennent forme.",
    },
];

const featuredGallery = [
    { src: "/images/projets/mode.jpg", alt: "Projet de mode exposé dans la galerie", className: "md:col-span-2 md:row-span-2" },
    { src: "/images/projets/maquette2.jpg", alt: "Maquette présentée dans la galerie", className: "" },
    { src: "/images/projets/soulier.jpg", alt: "Projet de soulier présenté dans la galerie", className: "" },
    { src: "/images/projets/montage_affiche.png", alt: "Projet d'affiche présenté dans la galerie", className: "md:col-span-2" },
    { src: "/images/projets/maquette.jpg", alt: "Maquette d'un projet du programme", className: "" },
    { src: "/images/projets/soulier2.jpg", alt: "Autre vue d'un projet de soulier", className: "" },
];

const pathwayCards = [
    {
        href: "/explo-arts",
        image: "/images/explo-art/hero.jpg",
        eyebrow: "Explo Arts",
        title: "Des projets où la matière, le volume et la présentation occupent une place centrale.",
        text: "On y retrouve des objets, des recherches plastiques, des compositions et des réalisations pensées pour être vues dans un espace réel.",
    },
    {
        href: "/tic-creativite",
        image: "/images/tic/hero.jpg",
        eyebrow: "TIC et créativité",
        title: "Des productions visuelles qui mobilisent image, montage, design et culture numérique.",
        text: "Affiches, médias visuels, prototypes et projets numériques montrent une autre façon de concevoir et de communiquer.",
    },
];

const repeatedStrip = [
    "/images/projets/mode.jpg",
    "/images/projets/montage_affiche.png",
    "/images/projets/maquette.jpg",
    "/images/projets/hero.jpg",
    "/images/projets/soulier.jpg",
    "/images/projets/mode.jpg",
    "/images/projets/maquette.jpg",
    "/images/projets/hero.jpg",
];

function ProjectsGridFallback() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)]">
                    <div className={`bg-[#ece9e1] ${index % 5 === 0 ? "aspect-16/10" : "aspect-4/5"}`} />
                    <div className="space-y-3 px-5 py-5">
                        <div className="h-3 w-24 rounded-full bg-[#ece9e1]" />
                        <div className="h-5 w-2/3 rounded-full bg-[#ece9e1]" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Projets() {
    return (
        <div className="max-w-6xl px-4 md:px-10">
            <HeroProjects />

            <section className="mt-16 w-full">
                <div className="grid gap-4 rounded-4xl border border-black/10 bg-white px-4 py-5 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] sm:px-5 sm:py-6 md:px-8 md:py-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
                    <div className="rounded-3xl border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-8 md:py-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">La galerie en bref</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Une page pour voir ce que le programme rend concret.</h2>
                        <p className="mt-4 max-w-md text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8">
                            Cette page ne sert pas seulement à accumuler des images. Elle permet aussi de voir comment les idées, les outils et les matières se transforment en projets aboutis.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {overviewCards.map((card) => (
                            <article key={card.title} className="rounded-3xl border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{card.eyebrow}</p>
                                <h3 className="mt-3 text-lg font-semibold text-slate-900 md:text-xl">{card.title}</h3>
                                <p className="mt-3 text-base leading-7 text-slate-700">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-16 w-full">
                <div className="rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                    <div className="mb-6 md:mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Sélection visuelle</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Quelques images reprises pour élargir le regard sur les projets.</h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                            J&apos;ai volontairement réutilisé plusieurs visuels déjà présents dans le site pour créer une page plus dense, plus rythmée et plus représentative de la diversité des productions.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-4 md:grid-rows-3">
                        {featuredGallery.map((image, index) => (
                            <div
                                key={`${image.src}-${index}`}
                                className={`overflow-hidden rounded-3xl border border-black/10 bg-[#f7f6f2] p-2 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.18)] ${image.className}`}
                            >
                                <div className="relative h-64 overflow-hidden rounded-2xl md:h-full md:min-h-52">
                                    <Image src={image.src} width={1200} height={900} alt={image.alt} className="h-full w-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-16 w-full">
                <div className="grid gap-6 lg:grid-cols-2">
                    {pathwayCards.map((card) => (
                        <article key={card.href} className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)]">
                            <div className="h-[42svh] min-h-72 md:h-[56svh] md:min-h-88">
                                <Image src={card.image} width={1600} height={1200} alt={card.eyebrow} className="h-full w-full object-cover" />
                            </div>
                            <div className="px-5 py-6 md:px-8 md:py-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{card.eyebrow}</p>
                                <h2 className={`mt-4 text-3xl md:text-4xl ${Newsreader.className}`}>{card.title}</h2>
                                <p className="mt-4 text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8">{card.text}</p>
                                <Link
                                    href={card.href}
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition-colors duration-200 hover:text-black"
                                >
                                    Ouvrir le parcours
                                    <ArrowRightIcon />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mt-16 w-full">
                <div className="overflow-hidden rounded-4xl border border-black/10 bg-[#111111] px-5 py-8 text-white shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                    <div className="mb-6 md:mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Rythme visuel</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Les mêmes images, remises en circulation autrement.</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                        {repeatedStrip.map((src, index) => (
                            <div key={`${src}-${index}`} className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 p-2">
                                <div className="relative aspect-4/5 overflow-hidden rounded-[0.95rem]">
                                    <Image
                                        src={src}
                                        width={900}
                                        height={1125}
                                        alt={`Aperçu ${index + 1} de la galerie projets`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="galerie" className="mt-16 w-full">
                <div className="rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                    <div className="mb-6 md:mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Tous les projets</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Une galerie plus riche, plus lisible et mieux intégrée au site.</h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                            La sélection dynamique ci-dessous récupère les projets disponibles et les présente dans une grille plus souple, avec davantage de hiérarchie visuelle qu&apos;avant.
                        </p>
                    </div>
                    <Suspense fallback={<ProjectsGridFallback />}>
                        <ProjectsGrid />
                    </Suspense>
                </div>
            </section>

            <PageEndCta
                eyebrow="Inscription"
                title="Intéressé par les parcours ?"
                text="Le processus d'inscription est simple et rapide. N'hésitez pas à nous contacter pour toute question ou pour obtenir plus d'informations sur les parcours."
                href="https://inscris-toi.cssc.gouv.qc.ca/Login"
                outside={true}
                linkLabel="Inscrire votre enfant"
                image="/images/tic/hero.jpg"
                imageAlt="inscription aux parcours Arts et TIC"
            />
        </div>
    );
}

function ArrowRightIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
            <path d="M4.5 10H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10.5 5L15.5 10L10.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Projets - Arts & TIC",
        openGraph: {
            title: "Projets - Arts & TIC",
            images: ["/images/projets/mode.jpg"],
        },
    };
}
