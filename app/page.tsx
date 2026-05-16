import Hero from '@/components/hero';
import Link from 'next/link';
import Image from 'next/image';
import PageEndCta from '@/components/pageendcta';
import { SlidingCarousel } from '@/components/slidingcarousel';
import { ArrowRight, Plus } from 'lucide-react';
import Button from '@/components/button';

export default function Page() {
    const parcours = [
        {
            title: 'Explo Arts',
            image: '/images/explo-art/hero.jpg',
            link: { 'Explo Arts': '/explo-arts', 'Locaux': '/explo-arts#locaux', 'Réalisations': '/explo-arts#realisations' },
        },
        {
            title: 'TIC et créativité',
            image: '/images/tic/hero.jpg',
            link: { 'TIC et créativité': '/tic-creativite', 'Locaux': '/tic-creativite#locaux', 'Réalisations': '/tic-creativite#realisations' },
        },
    ];

    return (
        <div>
            <Hero />
            <section id='parcours' className='py-16 px-mobile md:px-desktop w-full bg-[#F6F6F5]'>
                <div className='flex flex-col md:grid md:grid-cols-2'>
                    <h2 className="text-3xl md:text-5xl">Nos Parcours</h2>
                    <p className='mt-4 md:mt-0'>
                        Explo Arts et TIC et créativité proposent deux approches complémentaires, avec une même exigence de production et d’exploration. La concentration combine culture visuelle, fabrication, médias et outils technologiques dans un même parcours.
                    </p>
                </div>
                <div className='w-full pt-15 text-white'>
                    <div className='grid grid-cols-1 gap-8 w-full lg:grid-cols-2'>
                        {parcours.map((parcours) => (
                            <div key={parcours.title} className='group relative rounded-2xl overflow-hidden'>
                                <Image src={parcours.image} width={900} height={600} alt={`Parcours ${parcours.title}`} className="rounded-2xl" />
                                <div className='absolute flex flex-col w-auto left-2 right-2 bottom-2 md:left-4 md:right-4 md:bottom-4 p-5 md:p-8 bg-foreground rounded-2xl overflow-hidden transition-all'>
                                    <div className='flex flex-row justify-between'>
                                        <h3 className='text-xl uppercase'>{parcours.title}</h3>
                                        <Plus className='hidden md:block transition-transform duration-300 group-hover:rotate-45' />
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-0 max-h-80 md:max-h-0 overflow-hidden opacity-100 md:opacity-0 translate-y-0 md:translate-y-full pointer-events-auto md:pointer-events-none transition-all duration-300 ease-in-out pt-4 md:pt-0 md:group-hover:pt-4 md:group-hover:max-h-80 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto">
                                        {Object.entries(parcours.link).map(([label, href]) => (
                                            <div key={label} className='group/link flex flex-row items-center py-1'>
                                                <Link key={label} className='underline underline-offset-7 relative' href={href}>{label}</Link>
                                                <ArrowRight size={22} className='opacity-0 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-1'/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-mobile md:px-desktop py-20">
                <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-6">
                    <div className="w-full md:h-auto md:p-13 aspect-square">
                        <Image src="/images/arts.png" width={1920} height={1080} alt="Réalisations du programme Arts et TIC" className='h-full object-cover rounded-full' />
                    </div>
                    <aside className="flex flex-col text-center md:text-start justify-center rounded-2xl">
                        <h2 className="mt-4 md:mt-0 text-3xl md:text-4xl">Un programme où les idées prennent de la place.</h2>
                        <p className='mt-4 text-base leading-7  md:mt-5 md:text-lg md:leading-8'>
                            L&apos;atelier, les écrans, les matériaux et les discussions font partie du même écosystème. La page d&apos;accueil devait mieux montrer cette énergie.
                        </p>
                    </aside>
                </div>
            </section>

            <section className="px-mobile md:px-desktop py-20 bg-[#F6F6F5]">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-center">
                        <video
                            className="w-full rounded-2xl"
                            controls muted loop playsInline preload="none"
                            controlsList="nodownload nofullscreen noremoteplayback"
                            poster='/intro-thumbnail.png'
                        >
                            <source src="/intro.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <aside className="flex flex-col text-end md:text-start md:grid md:grid-cols-2 mt-5">
                        <h2 className="text-3xl md:text-4xl">Un aperçu en mouvement</h2>
                        <p className='mt-4 md:mt-0 text-base leading-7 md:text-lg md:leading-8'>Cette vidéo a été réalisée par d&apos;anciens élèves de la concentration.</p>
                    </aside>
                </div>
            </section>

            <section className='my-40'>
                <div className='text-center'>
                    <h2 className='text-3xl md:text-5xl'>Explorer les réalisations étudiantes</h2>
                    <Button href="/galerie">
                        Voir les projets
                    </Button>
                </div>
                <SlidingCarousel speed={20} className='h-45 md:h-[30vh] my-20 w-screen'>
                    <Image src="/images/projets/maquette.jpg" width={500} height={500} alt="Maquette réalisée dans le programme Arts et TIC" />
                    <Image src="/images/projets/soulier_2.jpg" width={500} height={500} alt="Maquette réalisée dans le programme Arts et TIC" />
                    <Image src="/images/projets/maquette2.jpg" width={500} height={500} alt="Maquette réalisée dans le programme Arts et TIC" />
                    <Image src="/images/projets/mode.jpg" width={500} height={500} alt="Maquette réalisée dans le programme Arts et TIC" />
                    <Image src="/images/projets/soulier.jpg" width={500} height={500} alt="Maquette réalisée dans le programme Arts et TIC" />
                    <Image src="/images/projets/ronde-bosse-2.jpg" width={500} height={500} alt="Maquette réalisée dans le programme Arts et TIC" />
                </SlidingCarousel>
            </section>

            <PageEndCta
                title="Entrer dans la concentration Arts."
                href="/explo-arts"
                linkLabel="Découvrir Explo Arts"
                image="/images/explo-art/hero.jpg"
                imageAlt="Parcours Explo Arts"
            />
        </div>
    );
}

export const metadata = {
  title: "Arts & TIC, Concentration artistique | La Camaradière",
  description:
    "Découvrez la concentration Arts et TIC à l'école secondaire de La Camaradière. Deux parcours créatifs : Explo Arts et TIC et créativité. Inscriptions ouvertes.",
  openGraph: {
    title: "Arts & TIC, Concentration artistique | La Camaradière",
    description:
      "Un programme où les élèves explorent les arts visuels, la création numérique et la fabrication dans des projets concrets.",
    url: "https://artstic.crealab.ca",
    images: [{ url: "https://artstic.crealab.ca/images/hero.jpg" }],
  },
}
