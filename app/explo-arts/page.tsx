import { Newsreader } from "@/app/layout";
import Carousel from "@/components/carousel";
import HeroArts from "@/components/heroArts";
import PageEndCta from "@/components/pageendcta";
import ProductImageGallery from "@/components/productimagegallery";
import { Metadata } from "next";
import Image from "next/image";

const overviewCards = [
    {
        eyebrow: "Pratique",
        title: "Créer à partir d'idées et de contraintes réelles.",
        text: "Les projets demandent d'explorer, de recommencer, de préciser ses intentions et de traduire une idée dans une forme tangible.",
    },
    {
        eyebrow: "Compétences",
        title: "Développer des techniques et une autonomie créative.",
        text: "Observation, composition, fabrication, finition et présentation font partie du parcours du début à la fin.",
    },
];

const productionSteps = [
    {
        title: "Observer et apprendre",
        text: "Chaque projet commence par l'acquisition de nouvelles techniques, de références visuelles et de méthodes de travail.",
        image: "/images/explo-art/DSC00975.jpg",
    },
    {
        title: "Créer et expérimenter",
        text: "Les élèves passent ensuite à la production et explorent les matériaux, les compositions et les idées propres à leur projet.",
        image: "/images/explo-art/hero.jpg",
    },
    {
        title: "Présenter le résultat",
        text: "Les réalisations prennent place dans l'école, dans les locaux d'arts ou dans des contextes de diffusion qui donnent une vraie visibilité au travail.",
        image: "/images/explo-art/DSC00977.jpg",
    },
];

const outcomeCards = [
    {
        title: "Objets, volumes et matières",
        text: "Les élèves développent des projets qui passent par la fabrication, la composition et la transformation de matériaux concrets.",
    },
    {
        title: "Images, recherches et intentions",
        text: "Le parcours donne de la place à l'observation, au dessin, aux essais et au développement d'une direction personnelle.",
    },
    {
        title: "Présentations et diffusion",
        text: "Les réalisations sont pensées pour être vues, installées ou mises en valeur dans l'école et dans des contextes de présentation.",
    },
];

const pathwayMarkers = [
    {
        eyebrow: "Atelier et méthode",
        text: "Le parcours apprend à travailler par étapes, à documenter sa démarche et à prendre le temps de mieux construire une idée.",
    },
    {
        eyebrow: "Autonomie et fabrication",
        text: "Les élèves développent des réflexes de production, de finition et d'ajustement qui servent dans des projets variés.",
    },
    {
        eyebrow: "Regard et exposition",
        text: "Les réalisations sont aussi l'occasion de réfléchir à la façon dont une oeuvre se montre, se lit et occupe un espace.",
    },
];

const projectImages = [
    { src: "/images/projets/mode.jpg", alt: "Projet de mode du parcours Explo Arts" },
    { src: "/images/projets/maquette.jpg", alt: "Maquette réalisée dans le parcours Explo Arts" },
    { src: "/images/projets/soulier.jpg", alt: "Projet de soulier conçu dans le parcours Explo Arts" },
    { src: "/images/projets/ronde-bosse-2.jpg", alt: "Réalisation en ronde-bosse du parcours Explo Arts" },
    { src: "/images/projets/ronde-bosse.jpg", alt: "Projet artistique du parcours Explo Arts" },
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
        mainImage: "/images/boutique/molleton_capuchon_explo/green-explo.jpg",
        items: {
            "/images/boutique/molleton_capuchon_explo/green-explo.jpg": { tumb: "/images/boutique/molleton_capuchon_explo/tumb/green-explo.jpg" },
            "/images/boutique/molleton_capuchon_explo/noir-explo.jpg": { tumb: "/images/boutique/molleton_capuchon_explo/tumb/noir-explo.jpg" },
            "/images/boutique/molleton_capuchon_explo/sand-explo.jpg": { tumb: "/images/boutique/molleton_capuchon_explo/tumb/sand-explo.jpg" },
        },
        cols: 3,
        rows: 2,
        title: "Molleton à capuchon",
        description: "Le modèle le plus enveloppant de la boutique, pensé comme une pièce simple à porter au quotidien avec l'identité du parcours.",
        badge: "Essentiel",
        note: "Disponible dans plusieurs couleurs sobres et plus vives.",
        featured: true,
    },
    {
        mainImage: "/images/boutique/molleton_col_explo/noir-explo.jpg",
        items: {
            "/images/boutique/molleton_col_explo/green-explo.jpg": { tumb: "/images/boutique/molleton_col_explo/tumb/green-explo.jpg" },
            "/images/boutique/molleton_col_explo/noir-explo.jpg": { tumb: "/images/boutique/molleton_col_explo/tumb/noir-explo.jpg" },
            "/images/boutique/molleton_col_explo/sand-explo.jpg": { tumb: "/images/boutique/molleton_col_explo/tumb/sand-explo.jpg" },
        },
        cols: 3,
        rows: 2,
        title: "Molleton à col arrondi",
        description: "Une version plus discrète, avec le même esprit visuel mais une silhouette plus classique.",
        badge: "Atelier",
        note: "Bon format pour un vêtement simple aux couleurs d'Explo Arts.",
        featured: true,
        inverted: true,
    },
    {
        mainImage: "/images/boutique/manches_courtes_explo/sand-explo.jpg",
        items: {
            "/images/boutique/manches_courtes_explo/green-explo.jpg": { tumb: "/images/boutique/manches_courtes_explo/tumb/green-explo.jpg" },
            "/images/boutique/manches_courtes_explo/noir-explo.jpg": { tumb: "/images/boutique/manches_courtes_explo/tumb/noir-explo.jpg" },
            "/images/boutique/manches_courtes_explo/sand-explo.jpg": { tumb: "/images/boutique/manches_courtes_explo/tumb/sand-explo.jpg" },
        },
        cols: 3,
        rows: 2,
        title: "Manches courtes",
        description: "Une option plus légère qui garde l'identité du parcours dans un format plus direct et facile à porter.",
        badge: "Quotidien",
        note: "Idéal pour les activités, les présentations et la vie de programme.",
        featured: true,
    },
];

export default function ArtsPage() {
    return (
        <div className="max-w-6xl px-4 md:px-10">
            <HeroArts />

            <section className="mt-16 w-full">
                <div className="grid gap-4 rounded-4xl border border-black/10 bg-white px-4 py-5 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] sm:px-5 sm:py-6 md:px-8 md:py-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                    <div className="rounded-3xl border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-8 md:py-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Le parcours en bref</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Une culture d&apos;atelier et de production.</h2>
                        <p className="mt-4 max-w-md text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8">
                            Explo Arts met l&apos;accent sur la démarche, la matière et le développement d&apos;un regard personnel à travers des réalisations concrètes.
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
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Apprendre, produire, montrer.</h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:mt-5 md:text-lg md:leading-8">
                            Le parcours suit une logique claire: les élèves apprennent, expérimentent et présentent des réalisations qui prennent une vraie place dans le milieu scolaire.
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
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Des réalisations où la démarche devient visible.</h2>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
                        <article className="overflow-hidden rounded-3xl border border-black/8 bg-[#f7f6f2] p-3">
                            <div className="relative aspect-2/3 overflow-hidden rounded-[1.15rem]">
                                <Image
                                    src="/images/explo-art/DSC00977.jpg"
                                    width={1000}
                                    height={1500}
                                    alt="Production du parcours Explo Arts"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </article>
                        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                            {outcomeCards.map((item) => (
                                <article key={item.title} className="rounded-3xl border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-6">
                                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                                    <p className="mt-3 text-base leading-7 text-slate-700">{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-16 w-full">
                <div className="grid gap-6 lg:grid-cols-2">
                    <article className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)]">
                        <div className="h-[42svh] min-h-72 md:h-[56svh] md:min-h-88">
                            <video
                                className="h-full w-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="none"
                                controlsList="nodownload nofullscreen noremoteplayback"
                            >
                                <source src="/videos/arts-broll.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-5 py-6 md:px-8 md:py-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Ambiance du parcours</p>
                            <h2 className={`mt-4 text-3xl md:text-4xl ${Newsreader.className}`}>Voir la création en mouvement.</h2>
                            <p className="mt-4 text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8">
                                Cette vidéo donne un aperçu du rythme, des gestes et de l&apos;énergie de production qui accompagnent les projets du parcours Explo Arts.
                            </p>
                        </div>
                    </article>

                    <article className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)]">
                        <div className="h-[42svh] min-h-72 md:h-[56svh] md:min-h-88">
                            <Image
                                src="/images/classe/back.png"
                                width={1920}
                                height={1080}
                                alt="Local du parcours Explo Arts"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="px-5 py-6 md:px-8 md:py-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Les locaux</p>
                            <h2 className={`mt-4 text-3xl md:text-4xl ${Newsreader.className}`}>Un espace pensé pour produire et montrer.</h2>
                            <p className="mt-4 text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8">
                                Les locaux d&apos;arts soutiennent autant la fabrication que l&apos;affichage et donnent un contexte réel aux réalisations des élèves.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="mt-16 w-full">
                <div className="rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                    <div className="mb-6 flex gap-4 flex-col md:mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Repères du parcours</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl max-w-[50%] ${Newsreader.className}`}>Une pratique artistique qui s&apos;ancre dans le faire.</h2>
                        <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8 lg:justify-self-end">
                            Explo Arts relie recherche, fabrication et présentation dans un rythme d&apos;atelier qui donne aux idées une forme plus concrète.
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
                            Une sélection de projets qui montrent l&apos;étendue des matières, des formes et des approches explorées dans Explo Arts.
                        </p>
                    </div>
                    <Carousel style="1" slidesToShow={1} autoSlide className="overflow-hidden rounded-[1.6rem]">
                        {projectImages.map((item) => (
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
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Boutique du parcours</p>
                            <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Des articles pensés comme prolongement de l&apos;identité Explo Arts.</h2>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <p className="text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                                Au lieu d&apos;une simple grille de produits, la boutique présente ici quelques pièces clés avec leurs variations et leur rôle dans la vie du parcours.
                            </p>
                            <div className="rounded-[1.35rem] border border-black/10 bg-white px-4 py-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Repère</p>
                                <p className="mt-2 text-sm leading-6 text-slate-700">
                                    Chaque article peut être parcouru par couleur à partir des miniatures, sans quitter la page.
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
                eyebrow="Continuer vers l'autre parcours"
                title="Voir comment TIC et créativité prolonge le programme."
                text="Après Explo Arts, la page TIC et créativité permet de voir l&apos;autre versant du programme, davantage tourné vers l&apos;image, les médias et la production numérique."
                href="/tic-creativite"
                linkLabel="Découvrir TIC et créativité"
                image="/images/tic/hero.jpg"
                imageAlt="Parcours TIC et créativité"
            />
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Explo Arts - Arts & TIC",
        openGraph: {
            title: "Explo Arts - Arts & TIC",
            images: ["/images/explo-art/hero.jpg"],
        },
    };
}
