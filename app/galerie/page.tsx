import HeroProjects from "@/components/heroProjects";
import PageEndCta from "@/components/pageendcta";
import Image from "next/image";

const mainGalleryImages = [
    { src: "/images/projets/mode.jpg", alt: "Projet de mode exposé dans la galerie" },
    { src: "/images/projets/montage_affiche.png", alt: "Projet d'affiche présenté dans la galerie" },
    { src: "/images/projets/maquette2.jpg", alt: "Maquette présentée dans la galerie" },
    { src: "/images/projets/soulier.jpg", alt: "Projet de soulier présenté dans la galerie" },
    { src: "/images/projets/maquette.jpg", alt: "Maquette d'un projet du programme" },
    { src: "/images/projets/hero.jpg", alt: "Projet présenté dans la galerie" },
];

const artsGalleryImages = [
    { src: "/images/projets/mode.jpg", alt: "Projet de mode en atelier" },
    { src: "/images/projets/maquette.jpg", alt: "Maquette d'un projet du programme" },
    { src: "/images/projets/maquette2.jpg", alt: "Maquette présentée dans la galerie" },
    { src: "/images/projets/soulier.jpg", alt: "Projet de soulier présenté dans la galerie" },
    { src: "/images/projets/hero.jpg", alt: "Projet présenté dans la galerie" },
    { src: "/images/projets/soulier2.jpg", alt: "Autre vue d'un projet de soulier" },
];

const ticGalleryImages = [
    { src: "/images/projets/montage_affiche.png", alt: "Projet d'affiche présenté dans la galerie" },
];

const gridClassName = "grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4";

export default function Galerie() {
    return (
        <div>
            <HeroProjects />

            <section className="px-mobile pt-19 md:px-desktop" aria-label="Galerie principale">
                <h2 className="text-3xl md:text-5xl pb-7">Galerie</h2>
                <div className={gridClassName}>
                    {mainGalleryImages.map((image, index) => (
                        <div key={`${image.src}-${index}`} className="overflow-hidden rounded-2xl">
                            <div className="relative aspect-4/5">
                                <Image
                                    src={image.src}
                                    width={900}
                                    height={1125}
                                    alt={image.alt}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="arts" className="px-mobile pt-19 md:px-desktop" aria-label="Galerie Arts">
                <h2 className="text-3xl md:text-5xl pb-7">Projets Arts</h2>
                <div className={gridClassName}>
                    {artsGalleryImages.map((image, index) => (
                        <div key={`${image.src}-${index}`} className="overflow-hidden rounded-2xl">
                            <div className="relative aspect-4/5">
                                <Image
                                    src={image.src}
                                    width={900}
                                    height={1125}
                                    alt={image.alt}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="tic" className="px-mobile py-19 md:px-desktop" aria-label="Galerie TIC">
                <h2 className="text-3xl md:text-5xl pb-7">Projets TIC</h2>
                <div className={gridClassName}>
                    {ticGalleryImages.map((image, index) => (
                        <div key={`${image.src}-${index}`} className="overflow-hidden rounded-2xl">
                            <div className="relative aspect-4/5">
                                <Image
                                    src={image.src}
                                    width={900}
                                    height={1125}
                                    alt={image.alt}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <PageEndCta
                title={
                    <>
                        <span className="block">Intéressé par les</span>
                        <span className="block">parcours ?</span>
                    </>
                }
                href="https://inscris-toi.cssc.gouv.qc.ca/Login"
                outside={true}
                linkLabel="Inscrire votre enfant"
                image="/images/tic/hero.jpg"
                imageAlt="inscription aux parcours Arts et TIC"
            />
        </div>
    );
}

export const metadata = {
  title: "Projets d'élèves, Arts & TIC",
  description:
    "Galerie des réalisations des élèves de la concentration Arts et TIC : objets, maquettes, affiches, vidéos et productions numériques des deux parcours.",
  openGraph: {
    title: "Projets d'élèves, Arts & TIC | La Camaradière",
    description:
      "Des objets, des maquettes, des images et des propositions visuelles issues d'Explo Arts et de TIC et créativité.",
    url: "https://artstic.crealab.ca/projets",
    images: [{ url: "https://artstic.crealab.ca/images/projets/hero.jpg" }],
  },
}