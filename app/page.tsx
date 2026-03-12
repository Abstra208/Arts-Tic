import Hero from '@/components/hero';
import { Metadata } from 'next';
import Image from 'next/image';
import SlideButton from '@/components/slidebutton';
import Showcase from '@/components/showcase';
import { Newsreader } from '@/app/layout';
import PageEndCta from '@/components/pageendcta';

export default function Page() {
    const programHighlights = [
        {
            eyebrow: 'Deux parcours',
            title: 'Deux façons d’entrer dans la création.',
            text: 'Explo Arts et TIC et créativité proposent deux approches complémentaires, avec une même exigence de production et d’exploration.',
        },
        {
            eyebrow: 'Des projets concrets',
            title: 'Des réalisations qui prennent forme.',
            text: 'Les élèves passent de l’idée au prototype, à l’image, à l’objet ou à la présentation finale dans des projets visibles et présentables.',
        },
        {
            eyebrow: 'Un cadre stimulant',
            title: 'Arts, outils et culture d’atelier.',
            text: 'La concentration réunit arts visuels, fabrication et numérique dans un environnement pensé pour expérimenter et construire.',
        },
    ];

    const reasons = [
        {
            title: 'Apprendre en faisant',
            text: 'Les élèves passent rapidement de l’idée au prototype, à l’image, à l’objet ou à la présentation finale.',
        },
        {
            title: 'Relier arts et numérique',
            text: 'La concentration combine culture visuelle, fabrication, médias et outils technologiques dans un même parcours.',
        },
        {
            title: 'Construire un portfolio',
            text: 'Chaque projet laisse une trace concrète du cheminement, utile pour la motivation comme pour la suite.',
        },
    ];

    return (
        <div className='max-w-6xl pb-4'>
            <Hero />
            <section className='w-full px-4 pt-16 md:px-10'>
                <div className='grid gap-4 rounded-4xl border border-black/10 bg-white px-4 py-5 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] sm:px-5 sm:py-6 md:px-8 md:py-8 lg:grid-cols-[0.82fr_1.18fr]'>
                    <div className='rounded-3xl border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-8 md:py-8'>
                        <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>Arts et TIC en bref</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Trois repères pour comprendre le programme.</h2>
                        <p className='mt-4 max-w-md text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8'>
                            Une concentration pensée pour créer, expérimenter et donner une vraie présence aux réalisations des élèves.
                        </p>
                    </div>
                    <div className='grid gap-4'>
                        <article className='rounded-3xl border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-7'>
                            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-slate-500'>{programHighlights[0].eyebrow}</p>
                            <h3 className='mt-3 text-xl font-semibold text-slate-900 md:text-2xl'>{programHighlights[0].title}</h3>
                            <p className='mt-3 text-base leading-7 text-slate-700'>{programHighlights[0].text}</p>
                        </article>
                        <div className='grid gap-4 md:grid-cols-2'>
                            {programHighlights.slice(1).map((item) => (
                                <article key={item.eyebrow} className='rounded-3xl border border-black/8 bg-[#f7f6f2] px-5 py-6 md:px-6'>
                                    <p className='text-sm font-semibold uppercase tracking-[0.22em] text-slate-500'>{item.eyebrow}</p>
                                    <h3 className='mt-3 text-lg font-semibold text-slate-900 md:text-xl'>{item.title}</h3>
                                    <p className='mt-3 text-base leading-7 text-slate-700'>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-16 px-4 md:px-10'>
                <div className='grid gap-8 rounded-4xl border border-black/10 bg-[#111111] px-5 py-8 text-white md:px-10 md:py-10 lg:grid-cols-[0.9fr_1.1fr]'>
                    <div>
                        <p className='text-sm font-semibold uppercase tracking-[0.22em] text-white/55'>Ce que le programme rend possible</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>Plus qu&apos;un simple programme.</h2>
                        <p className='mt-4 max-w-lg text-base leading-7 text-white/72 md:mt-5 md:text-lg md:leading-8'>
                            La concentration donne aux élèves un espace pour explorer leur créativité, développer des méthodes de travail et produire des réalisations qui ont une vraie présence.
                        </p>
                    </div>
                    <div className='grid gap-4 md:grid-cols-3'>
                        {reasons.map((reason) => (
                            <article key={reason.title} className='rounded-3xl border border-white/10 bg-white/4 p-5'>
                                <h3 className='text-xl font-semibold'>{reason.title}</h3>
                                <p className='mt-3 text-base leading-7 text-white/68'>{reason.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section id='parcours' className='mt-16 px-4 md:px-10 w-full'>
                <div className='flex items-center flex-col'>
                    <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>Les parcours</p>
                    <h3 className={`mt-4 text-center text-3xl md:text-5xl ${Newsreader.className}`}>Deux façons d&apos;habiter la création.</h3>
                    <p className='mt-4 max-w-2xl text-center text-base text-slate-600 md:text-xl'>Chaque parcours a sa couleur, mais les deux partagent la même envie de faire, d&apos;explorer et de présenter des projets forts.</p>
                </div>
                <div className='w-full py-12'>
                    <div className='grid grid-cols-1 gap-8 w-full lg:grid-cols-2'>
                        <section className='group flex flex-col overflow-hidden rounded-4xl border border-black/10 bg-white p-5 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:p-6'>
                            <Image src="/images/explo-art/DSC00976.jpg" width={900} height={600} alt="Parcours Explo Arts" className="h-56 w-full rounded-[1.35rem] object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-80 md:rounded-3xl" />
                            <h3 className='mt-5 text-2xl font-bold text-gray-900 md:mt-6 md:text-3xl'>Parcours Explo Arts</h3>
                            <p className='mt-3 text-base leading-7 text-slate-600 md:text-lg'>
                                Pour les élèves attirés par la matière, la composition, le dessin, le volume et l&apos;expérimentation artistique.
                            </p>
                            <SlideButton link='/explo-arts' text='Découvrir Explo Arts' className='text-slate-900' openedDefault />
                        </section>
                        <section className='group flex flex-col overflow-hidden rounded-4xl border border-black/10 bg-[#f4f3ef] p-5 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:p-6'>
                            <Image src="/images/tic/DSC00978.jpg" width={900} height={600} alt="Parcours TIC et Créativité" className="h-56 w-full rounded-[1.35rem] object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-80 md:rounded-3xl" />
                            <h3 className='mt-5 text-2xl font-bold text-gray-900 md:mt-6 md:text-3xl'>Parcours TIC et créativité</h3>
                            <p className='mt-3 text-base leading-7 text-slate-600 md:text-lg'>
                                Pour les élèves qui veulent créer avec les outils numériques, les médias, l&apos;image et les technologies de production.
                            </p>
                            <SlideButton link='/tic-creativite' text='Découvrir TIC et créativité' className='text-slate-900' openedDefault />
                        </section>
                    </div>
                </div>
            </section>
            <Showcase moreButtonText="Voir tous les projets">
                <Image src="/images/projets/maquette2.jpg" width={500} height={500} alt="Maquette réalisée dans le programme Arts et TIC" />
                <Image src="/images/projets/aquaurabaine.jpg" width={500} height={500} alt="Projet d’aquaurabaine réalisé par des élèves" />
                <Image src="/images/projets/soulier2.jpg" width={500} height={500} alt="Projet de soulier conçu par des élèves" />
            </Showcase>
            <section className="mt-16 px-4 md:px-10">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="h-[42svh] min-h-72 overflow-hidden rounded-4xl md:h-[68svh] md:min-h-96">
                        <Image src="/images/arts.png" width={1920} height={1080} alt="Réalisations du programme Arts et TIC" className="w-full h-full object-cover" />
                    </div>
                    <aside className="flex flex-col justify-center rounded-4xl border border-black/10 bg-white px-5 py-6 md:px-8 md:py-8 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)]">
                        <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>Ambiance</p>
                        <h3 className={`mt-4 text-3xl md:text-4xl ${Newsreader.className}`}>Un programme où les idées prennent de la place.</h3>
                        <p className='mt-4 text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8'>
                            L&apos;atelier, les écrans, les matériaux et les discussions font partie du même écosystème. La page d&apos;accueil devait mieux montrer cette énergie.
                        </p>
                    </aside>
                </div>
            </section>
            <section className="mt-16 h-auto px-4 md:px-10">
                <h3 className={`text-center text-3xl md:text-5xl ${Newsreader.className}`}>Un aperçu en mouvement</h3>
                <p className='mx-auto mt-4 max-w-2xl text-center text-base md:text-xl text-slate-600'>Cette vidéo a été réalisée par d&apos;anciens élèves de la concentration. Elle complète bien ce que les images laissent entrevoir.</p>
                <video
                    className="mt-8 w-full h-auto object-cover rounded-2xl border border-black/10 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)]"
                    autoPlay controls muted loop playsInline preload="none"
                    controlsList="nodownload nofullscreen noremoteplayback"
                    poster='/images/arts.png'
                >
                    <source src="/video_arts_tic.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
            <PageEndCta
                eyebrow="Continuer la visite"
                title="Entrer dans la concentration Arts."
                text="Si tu veux voir une première facette du programme de plus près, le parcours Explo Arts est la meilleure suite logique depuis l&apos;accueil."
                href="/explo-arts"
                linkLabel="Découvrir Explo Arts"
                image="/images/explo-art/DSC00976.jpg"
                imageAlt="Parcours Explo Arts"
            />
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Arts & TIC",
    openGraph: {
      title: "Arts & TIC",
      images: ["/images/hero.jpg"],
    },
  };
}
