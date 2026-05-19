import Carousel from "@/components/carousel";
import HeroPage from "@/components/heroPages";
import PageEndCta from "@/components/pageendcta";
import ProductImageGallery from "@/components/productimagegallery";
import SectionSelector from "@/components/sectionselector";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";

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
        <>
            <div>
                <HeroPage title="Explo Arts" description="Explo Arts propose une approche concrète de la création: observer, expérimenter, développer des techniques et produire des réalisations qui ont une présence réelle." imageSrc="/logoA.svg" />
            
                <SectionSelector sections={[
                    { id: "propos", title: "À propos" },
                    { id: "etapes", title: "Étapes" },
                    { id: "productions", title: "Productions" },
                    { id: "locaux", title: "Locaux" },
                    { id: "realisations", title: "Réalisations" },
                    { id: "articles", title: "Articles promotionnels" },
                ]} />

                <section className="px-mobile md:px-desktop w-full h-screen flex flex-col justify-center items-center" id="propos">
                    <div className="px-5 py-6 md:px-8 md:py-8">
                        <h2 className="mt-4 text-3xl md:text-5xl">Une culture d&apos;atelier et de production.</h2>
                        <p className="mt-4 max-w-md text-base leading-7  md:mt-5 md:text-lg md:leading-8">
                            Explo Arts met l&apos;accent sur la démarche, la matière et le développement d&apos;un regard personnel à travers des réalisations concrètes.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {overviewCards.map((card) => (
                            <article key={card.title} className="border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] -500">{card.eyebrow}</p>
                                <h3 className="mt-3 text-lg font-semibold  md:text-xl">{card.title}</h3>
                                <p className="mt-3 text-base leading-7 ">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="px-mobile md:px-desktop mt-16 w-full" id="etapes">
                    <div>
                        <h2 className="mt-4 text-3xl md:text-5xl">Apprendre, produire, montrer.</h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 md:mt-5 md:text-lg md:leading-8">
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
                                <p className="mt-3 text-base leading-7">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="px-mobile md:px-desktop mt-16 w-full" id="productions">
                    <h2 className="mt-4 text-3xl md:text-5xl">Des réalisations où la démarche devient visible.</h2>
                    <div className="grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                        <article className="overflow-hidden">
                            <div className="relative aspect-12/15 overflow-hidden rounded-3xl">
                                <Image
                                    src="/images/explo-art/DSC05435.jpg"
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
                                    <h3 className="text-xl font-semibold ">{item.title}</h3>
                                    <p className="mt-3 text-base leading-7 ">{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-mobile md:px-desktop mt-16 w-full" id="locaux">
                    <div className="">
                        <div className="">
                            <Image
                                src="/images/classe/explo.png"
                                width={1920}
                                height={1080}
                                alt="Local du parcours Explo Arts"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="px-5 py-6 md:px-8 md:py-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] -500">Les locaux</p>
                            <h2 className="mt-4 text-3xl md:text-4xl">Un espace pensé pour produire et montrer.</h2>
                            <p className="mt-4 text-base leading-7  md:mt-5 md:text-lg md:leading-8">
                                Les locaux d&apos;arts soutiennent autant la fabrication que l&apos;affichage et donnent un contexte réel aux réalisations des élèves.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="px-mobile md:px-desktop mt-16 w-full" id="realisations">
                    <div className="rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                        <div className="mb-6 md:mb-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] -500">Réalisations</p>
                            <h2 className="mt-4 text-3xl md:text-5xl">Quelques projets du parcours.</h2>
                            <p className="mt-4 max-w-2xl text-base leading-7  md:text-lg md:leading-8">
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

                <section id="articles" className="px-mobile md:px-desktop mt-16 w-full">
                    <div className="rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] -500">Articles promotionnels</p>
                            <h2 className="mt-4 text-3xl md:text-5xl">Des articles pensés comme prolongement de l&apos;identité Explo Arts.</h2>
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
            </div>
            
            <PageEndCta
                title="Voir comment TIC et créativité prolonge le programme."
                href="/tic-creativite"
                linkLabel="Découvrir TIC et créativité"
                image="/images/tic/hero.jpg"
                imageAlt="Parcours TIC et créativité"
            />
        </>
    );
}

export async function generateMetadata(
    _params: unknown,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const parentMetadata = await parent;

    return {
        title: "Parcours Explo Arts, Arts & TIC",
        description:
            "Le parcours Explo Arts explore la matière, le volume et la création artistique concrète. Fabrication, composition et présentation dans un atelier actif.",
        openGraph: {
            ...(parentMetadata.openGraph ?? {}),
            title: "Parcours Explo Arts, Arts & TIC | La Camaradière",
            description:
                "Explo Arts propose une approche concrète de la création : observer, expérimenter, développer des techniques et produire des réalisations réelles.",
            url: "https://artstic.crealab.ca/explo-arts",
            images: [{ url: "https://artstic.crealab.ca/images/explo-art/hero.jpg" }],
        },
    };
}