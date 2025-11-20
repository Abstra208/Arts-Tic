import Hero from '@/components/hero';
import { Metadata } from 'next';
import Image from 'next/image';
import SlideButton from '@/components/slidebutton';
import { SlidingCarousel } from '@/components/slidingcarousel';

export const metadata: Metadata = {
  title: 'Arts & TIC - Accueil',
};

export default function Page() {
    return (
        <div>
            <Hero />
            <section className='mt-16 px-4 md:px-8 w-full'>
                <div className='flex items-center flex-col'>
                    <h1 className='text-4xl md:text-5xl font-bold text-center relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Plus qu&apos;un simple programme</h1>
                    <p className='text-xl text-center mt-4'>Avec deux differents parcours disponible pour les élèves.</p>
                </div>
                <div className='w-full'>
                    <div className='bg-white rounded-lg p-6 w-full'>
                        <div className='flex flex-col md:flex-row gap-6 items-center justify-center w-full'>
                            <div className='flex flex-col items-center p-4 transition-transform bg-gray-50 rounded-md w-full md:w-1/2'>
                                <Image src="/images/explo-art/DSC00976.jpg" width={300} height={300} alt="Parcours Explo Arts" className="border-2 rounded-t-2xl rounded-b-lg border-blue-100 w-full h-auto object-cover" />
                                <h3 className='mt-4 text-3xl font-medium whitespace-nowrap'>Parcours Explo Arts</h3>
                                <SlideButton link='/explo-arts' />
                            </div>
                            <div className='flex flex-col items-center p-4 transition-transform bg-gray-50 rounded-md w-full md:w-1/2'>
                                <Image src="/images/tic/DSC00978.jpg" width={300} height={300} alt="Parcours TIC et Créativité" className="border-2 rounded-t-2xl rounded-b-lg border-blue-100 w-full h-auto object-cover" />
                                <h3 className='mt-4 text-3xl font-medium'>Parcours TIC et Créativité</h3>
                                <SlideButton link='/tic-creativite' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center after:content-[""] w-full'>
                    <p className='text-xl text-center'>Pour plus d&apos;information sur les niveaux et choix de parcours:</p>
                    <SlideButton link="/niveaux" text="Visiter la page des niveaux" openedDefault={true} />
                </div>
            </section>
            <section className='py-15'>
                <h1 className='text-4xl md:text-5xl font-bold text-center mb-4 relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Plus intéressé à voir ce que l&apos;on fait?</h1>
                <p className='text-xl text-center mb-4'>On vous comprend. En voici quelques exemples :</p>
                <SlidingCarousel speed={10} className='w-full'>
                    <Image src="/images/projets/maquette2.jpg" width={500} height={500} alt="Projet Explo Arts" />
                    <Image src="/images/projets/aquaurabaine.jpg" width={500} height={500} alt="Projet CréaLab" />
                    <Image src="/images/projets/soulier2.jpg" width={500} height={500} alt="Projet CréaLab" />
                    <Image src="/images/projets/maquette.jpg" width={500} height={500} alt="Projet Explo Arts" />
                </SlidingCarousel>
                <div className='flex flex-col items-center mt-4 after:content-[""]'>
                    <p className='text-3xl text-bold text-center'>Vous voulez en voir plus?</p>
                    <SlideButton link="/projets" text="Cliquer ici!" size='large' openedDefault={true} />
                </div>
            </section>
            <section className="mb-16 h-[70svh]">
                <Image src="/images/arts.png" width={1920} height={1080} alt="" className="w-full h-full object-cover" />
            </section>
            <section className="h-screen w-screen px-15">
                <h1 className='text-4xl md:text-5xl font-bold text-center mb-4 relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Avez-vous le temps pour une vidéo?</h1>
                <p className='text-xl text-center mb-4'>Cette vidéo est un projet réalisé par d&apos;anciens élèves de la concentration.</p>
                <video
                    className="w-full h-auto object-cover rounded-2xl"
                    autoPlay controls muted loop playsInline preload="none"
                    controlsList="nodownload nofullscreen noremoteplayback"
                    poster='/images/arts.png'
                >
                    <source src="/video_arts_tic.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
            <section>
                <h1>Critères et Impact</h1>
            </section>
        </div>
    );
}