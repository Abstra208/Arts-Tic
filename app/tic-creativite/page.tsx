import { Newsreader } from "@/app/layout";
import Carousel from "@/components/carousel";
import HeroTIC from "@/components/heroTIC";
import PageEndCta from "@/components/pageendcta";
import ProductImageGallery from "@/components/productimagegallery";
import { Metadata } from "next";
import Image from "next/image";

const overviewCards = [
    {
        eyebrow: "Image et médias",
        title: "Créer avec les outils de production actuels.",
        text: "Le parcours donne aux élèves un cadre pour explorer les logiciels, les méthodes et les formats liés à la création numérique.",
    },
    {
        eyebrow: "Narration visuelle",
        title: "Concevoir des projets qui communiquent.",
        text: "Les réalisations ne sont pas seulement techniques: elles demandent aussi de penser l'idée, la forme et le message.",
    },
];

const productionSteps = [
    {
        title: "Observer et planifier",
        text: "Les projets commencent par la recherche, les références visuelles et la définition d'une intention claire.",
        image: "/images/tic/DSC01607.jpg",
    },
    {
        title: "Produire avec les outils numériques",
        text: "Les élèves passent ensuite à la composition, au montage, à la modélisation ou à la mise en forme selon le projet choisi.",
        image: "/images/tic/hero.jpg",
    },
    {
        title: "Présenter, tester, ajuster",
        text: "Les réalisations sont revues, raffinées et diffusées dans un contexte qui valorise autant l'idée que l'exécution.",
        image: "/images/tic/DSC01615.jpg",
    },
];

const outcomeCards = [
    {
        title: "Affiches et identités visuelles",
        text: "Composer une image, structurer l'information et donner une direction visuelle forte à un projet.",
    },
    {
        title: "Montages et capsules vidéo",
        text: "Rythmer un propos, construire une narration et produire des contenus qui circulent dans les formats actuels.",
    },
    {
        title: "3D, prototype et expérimentation",
        text: "Explorer les logiciels et les outils numériques pour passer d'une idée à une forme plus concrète.",
    },
];

const pathwayMarkers = [
    {
        eyebrow: "Logiciels et méthodes",
        text: "Le parcours familiarise les élèves avec des outils actuels de production et avec des façons de travailler plus structurées.",
    },
    {
        eyebrow: "Projet et autonomie",
        text: "Chaque réalisation demande de faire des choix, de tester et d'ajuster son travail au fil du processus.",
    },
    {
        eyebrow: "Diffusion et regard critique",
        text: "Les projets servent aussi à apprendre comment les images se lisent, se présentent et se partagent.",
    },
];

const galleryImages = [
    { src: "/images/projets/montage_affiche.png", alt: "Montage d'affiche réalisé dans le parcours TIC et créativité" },
    { src: "/images/projets/hero.jpg", alt: "Projet visuel du parcours TIC et créativité" },
    { src: "/images/tic/DSC01615.jpg", alt: "Élèves en activité dans le parcours TIC et créativité" },
];

const studioCards = [
    {
        image: "/images/tic/DSC01608.png",
        eyebrow: "Ambiance du parcours",
        title: "Une culture de création numérique active.",
        text: "Le parcours met les élèves dans un rythme de conception, de production et d'échange qui rend les projets plus concrets.",
        alt: "Atelier du parcours TIC et créativité",
    },
    {
        image: "/images/tic/DSC01607.png",
        eyebrow: "Le milieu",
        title: "Un espace pour concevoir, tester et montrer.",
        text: "Les postes de travail, les logiciels et les temps d'atelier soutiennent une pratique où l'on passe rapidement de l'idée à l'image.",
        alt: "Espace de création du parcours TIC et créativité",
    },
];

type PromoProduct = {
    mainImage: string;
    items: Record<string, { tumb: string }>;
    cols: number;
    rows: number;
    title: string;
    description: string;
    badge: string;
    note: string;
    featured?: boolean;
    inverted?: boolean;
};

const promoProducts: PromoProduct[] = [
    {
        mainImage: "/images/boutique/molleton_capuchon_art/blanc-art.jpg",
        items: {
            "/images/boutique/molleton_capuchon_art/blanc-art.jpg": { tumb: "/images/boutique/molleton_capuchon_art/tumb/blanc-art.jpg" },
            "/images/boutique/molleton_capuchon_art/dark-heather-art.jpg": { tumb: "/images/boutique/molleton_capuchon_art/tumb/dark-heather-art.jpg" },
            "/images/boutique/molleton_capuchon_art/gris-sport-art.jpg": { tumb: "/images/boutique/molleton_capuchon_art/tumb/gris-sport-art.jpg" },
            "/images/boutique/molleton_capuchon_art/navy-art.jpg": { tumb: "/images/boutique/molleton_capuchon_art/tumb/navy-art.jpg" },
            "/images/boutique/molleton_capuchon_art/noir-art.jpg": { tumb: "/images/boutique/molleton_capuchon_art/tumb/noir-art.jpg" },
            "/images/boutique/molleton_capuchon_art/red-art.jpg": { tumb: "/images/boutique/molleton_capuchon_art/tumb/red-art.jpg" },
        },
        cols: 3,
        rows: 2,
        title: "Molleton à capuchon",
        description: "Une pièce plus enveloppante qui prolonge l'identité visuelle du programme dans un format simple et facile à porter.",
        badge: "Signature",
        note: "Une option adaptée aux journées d'atelier, de montage et de production.",
        featured: true,
    },
    {
        mainImage: "/images/boutique/molleton_col_art/dark-heather-art.jpg",
        items: {
            "/images/boutique/molleton_col_art/blanc-art.jpg": { tumb: "/images/boutique/molleton_col_art/tumb/blanc-art.jpg" },
            "/images/boutique/molleton_col_art/dark-heather-art.jpg": { tumb: "/images/boutique/molleton_col_art/tumb/dark-heather-art.jpg" },
            "/images/boutique/molleton_col_art/gris-sport-art.jpg": { tumb: "/images/boutique/molleton_col_art/tumb/gris-sport-art.jpg" },
            "/images/boutique/molleton_col_art/navy-art.jpg": { tumb: "/images/boutique/molleton_col_art/tumb/navy-art.jpg" },
            "/images/boutique/molleton_col_art/noir-art.jpg": { tumb: "/images/boutique/molleton_col_art/tumb/noir-art.jpg" },
            "/images/boutique/molleton_col_art/red-art.jpg": { tumb: "/images/boutique/molleton_col_art/tumb/red-art.jpg" },
        },
        cols: 3,
        rows: 2,
        title: "Molleton à col arrondi",
        description: "Une version plus discrète, intéressante pour celles et ceux qui veulent garder le lien au programme dans un vêtement plus sobre.",
        badge: "Studio",
        note: "Fonctionne bien comme couche simple pour les journées régulières.",
        featured: true,
        inverted: true,
    },
    {
        mainImage: "/images/boutique/manches_courtes_art/noir-art.jpg",
        items: {
            "/images/boutique/manches_courtes_art/dark-heather-art.jpg": { tumb: "/images/boutique/manches_courtes_art/tumb/dark-heather-art.jpg" },
            "/images/boutique/manches_courtes_art/navy-art.jpg": { tumb: "/images/boutique/manches_courtes_art/tumb/navy-art.jpg" },
            "/images/boutique/manches_courtes_art/noir-art.jpg": { tumb: "/images/boutique/manches_courtes_art/tumb/noir-art.jpg" },
            "/images/boutique/manches_courtes_art/red-art.jpg": { tumb: "/images/boutique/manches_courtes_art/tumb/red-art.jpg" },
        },
        cols: 3,
        rows: 2,
        title: "Manches courtes",
        description: "Le format le plus direct pour porter les couleurs du programme dans les activités, les événements et la vie scolaire.",
        badge: "Quotidien",
        note: "Une option légère, simple et plus mobile.",
        featured: true,
    },
];

export default function TicPage() {
    return (
        <div className="max-w-6xl px-4 md:px-10">
            <HeroTIC />

            <section id="reperes" className="mt-16 w-full">
                <div className="grid gap-4 rounded-4xl border border-black/10 bg-white px-4 py-5 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] sm:px-5 sm:py-6 md:px-8 md:py-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                    <div className="rounded-3xl border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-8 md:py-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Le parcours en bref</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Créer avec les outils, mais penser comme un auteur.</h2>
                        <p className="mt-4 max-w-md text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8">
                            TIC et créativité met l&apos;accent sur les processus de conception, les images, les médias et la capacité de construire un projet numérique cohérent.
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
                <div className="rounded-4xl border border-black/10 bg-[#111111] px-5 py-8 text-white shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-10 md:py-10">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Les étapes d&apos;un projet</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Imaginer, produire, diffuser.</h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:mt-5 md:text-lg md:leading-8">
                            Le parcours suit une logique de création complète: définir une idée, la produire avec les bons outils, puis la faire évoluer jusqu&apos;à une forme présentable.
                        </p>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {productionSteps.map((step) => (
                            <article key={step.title} className="rounded-3xl border border-white/10 bg-white/4 p-4 md:p-5">
                                <Image
                                    src={step.image}
                                    width={900}
                                    height={700}
                                    alt={step.title}
                                    className="h-48 w-full rounded-[1.25rem] object-cover md:h-56"
                                />
                                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                                <p className="mt-3 text-base leading-7 text-white/68">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-16 w-full">
                <div className="rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                    <div className="mb-6 md:mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Ce que les élèves y construisent</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Des productions visuelles qui relient idée, forme et outils.</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {outcomeCards.map((item) => (
                            <article key={item.title} className="rounded-3xl border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-6">
                                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                                <p className="mt-3 text-base leading-7 text-slate-700">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-16 w-full">
                <div className="grid gap-6 lg:grid-cols-2">
                    {studioCards.map((card) => (
                        <article key={card.title} className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)]">
                            <div className="h-[42svh] min-h-72 md:h-[56svh] md:min-h-88">
                                <Image src={card.image} width={1600} height={1200} alt={card.alt} className="h-full w-full object-cover" />
                            </div>
                            <div className="px-5 py-6 md:px-8 md:py-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{card.eyebrow}</p>
                                <h2 className={`mt-4 text-3xl md:text-4xl ${Newsreader.className}`}>{card.title}</h2>
                                <p className="mt-4 text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8">{card.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mt-16 w-full">
                <div className="rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                    <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-end md:mb-8">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Repères du parcours</p>
                            <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Une pratique numérique qui reste concrète.</h2>
                        </div>
                        <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8 lg:justify-self-end">
                            Le parcours développe à la fois la maîtrise des outils, l&apos;autonomie de projet et la capacité de mieux lire les images qui nous entourent.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {pathwayMarkers.map((item) => (
                            <article key={item.eyebrow} className="rounded-3xl border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{item.eyebrow}</p>
                                <p className="mt-3 text-base leading-7 text-slate-700">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-16 w-full">
                <div className="rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                    <div className="mb-6 md:mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Réalisations</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Quelques projets du parcours.</h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                            Une sélection d&apos;images pour montrer comment le parcours relie expression visuelle, culture numérique et production concrète.
                        </p>
                    </div>
                    <Carousel style="1" slidesToShow={1} autoSlide className="overflow-hidden rounded-[1.6rem]">
                        {galleryImages.map((item) => (
                            <div key={item.src} className="relative h-[52svh] min-h-76 w-full">
                                <Image src={item.src} width={1920} height={1280} alt={item.alt} className="h-full w-full object-cover" />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>

            <section id="boutique" className="mt-16 w-full">
                <div className="rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                    <div className="grid gap-5 rounded-[1.7rem] border border-black/8 bg-[#f7f6f2] p-4 md:p-5 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-end">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Boutique du programme</p>
                            <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Des articles liés à l&apos;identité visuelle portée par Arts et TIC.</h2>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <p className="text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                                La boutique prend ici la forme d&apos;une petite collection associée au programme, avec des pièces simples à parcourir par couleur et par format.
                            </p>
                            <div className="rounded-[1.35rem] border border-black/10 bg-white px-4 py-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Repère</p>
                                <p className="mt-2 text-sm leading-6 text-slate-700">
                                    Les miniatures permettent de naviguer entre les variations sans quitter la page TIC.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
                        {promoProducts.map((product) => (
                            <ProductImageGallery
                                key={product.title}
                                mainImage={product.mainImage}
                                items={product.items}
                                cols={product.cols}
                                rows={product.rows}
                                title={product.title}
                                description={product.description}
                                badge={product.badge}
                                note={product.note}
                                featured={product.featured}
                                inverted={product.inverted}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <PageEndCta
                eyebrow="Dernière étape"
                title="Passer maintenant à la galerie complète des projets."
                text="Après les repères du parcours et la boutique, la page projets permet de voir plus largement les réalisations issues des deux concentrations."
                href="/projets"
                linkLabel="Voir les projets"
                image="/images/projets/montage_affiche.png"
                imageAlt="Galerie des projets Arts et TIC"
            />
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "TIC et Créativité",
        openGraph: {
            title: "TIC et Créativité",
            images: ["/images/tic/hero.jpg"],
        },
    };
}
