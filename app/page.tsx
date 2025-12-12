import Hero from '@/components/hero';
import { Metadata } from 'next';
import Image from 'next/image';
import SlideButton from '@/components/slidebutton';
import { SlidingCarousel } from '@/components/slidingcarousel';

export default function Page() {
    return (
        <div>
            <Hero />
            <section className='mt-16 px-6 md:px-15 w-full'>
                <div className='flex items-center flex-col'>
                    <h1 className='text-4xl md:text-5xl font-bold text-center relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Plus qu&apos;un simple programme</h1>
                    <p className='text-xl text-center mt-4'>Avec deux differents parcours disponible pour les élèves.</p>
                </div>
                <div className='w-full py-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
                        <div className='flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md'>
                            <Image src="/images/explo-art/DSC00976.jpg" width={300} height={150} alt="Parcours Explo Arts" className="rounded-lg w-full h-45 md:h-80 object-cover" />
                            <h3 className='mt-6 text-2xl font-bold text-gray-800'>Parcours Explo Arts</h3>
                            <SlideButton link='/explo-arts' />
                        </div>
                        <div className='flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md'>
                            <Image src="/images/tic/DSC00978.jpg" width={300} height={150} alt="Parcours TIC et Créativité" className="rounded-lg w-full h-45 md:h-80 object-cover" />
                            <h3 className='mt-6 text-2xl font-bold text-gray-800'>Parcours TIC et Créativité</h3>
                            <SlideButton link='/tic-creativite' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-16'>
                <h1 className='text-4xl md:text-5xl font-bold text-center mb-4 relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Plus intéressé à voir ce que l&apos;on fait?</h1>
                <p className='text-xl text-center mb-4'>On vous comprend. En voici quelques exemples :</p>
                <SlidingCarousel speed={10} className='h-[40vh] md:h-[90vh] w-full'>
                    <Image src="/images/projets/maquette2.jpg" width={500} height={500} className='w-full object-cover' alt="Projet Explo Arts" />
                    <Image src="/images/projets/aquaurabaine.jpg" width={500} height={500} className='w-full object-cover' alt="Projet CréaLab" />
                    <Image src="/images/projets/soulier2.jpg" width={500} height={500} className='w-full object-cover' alt="Projet CréaLab" />
                    <Image src="/images/projets/maquette.jpg" width={500} height={500} className='w-full object-cover' alt="Projet Explo Arts" />
                </SlidingCarousel>
                <div className='flex flex-col items-center mt-10 after:content-[""]'>
                    <p className='text-3xl text-bold text-center'>Vous voulez en voir plus?</p>
                    <SlideButton link="/projets" text="Cliquer ici!" size='large' openedDefault={true} />
                </div>
            </section>
            <section className="mt-16 h-[35vh] md:h-[70vh]">
                <Image src="/images/arts.png" width={1920} height={1080} alt="" className="w-full h-full object-cover" />
            </section>
            <section className="mt-16 h-auto w-screen px-6 md:px-15">
                <h1 className='text-4xl md:text-5xl font-bold text-center mb-4 relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Avez-vous le temps pour une vidéo?</h1>
                <p className='text-xl text-center mb-4'>Cette vidéo est un projet réalisé par d&apos;anciens élèves de la concentration.</p>
                <video
                    className="w-full h-auto object-cover rounded-sm md:rounded-lg"
                    autoPlay controls muted loop playsInline preload="none"
                    controlsList="nodownload nofullscreen noremoteplayback"
                    poster='/images/arts.png'
                >
                    <source src="/video_arts_tic.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
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