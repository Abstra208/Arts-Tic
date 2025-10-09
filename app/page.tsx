import Hero from '@/components/hero';
import { Metadata } from 'next';
import Image from 'next/image';
import SlideButton from '@/components/slidebutton';

export const metadata: Metadata = {
  title: 'Arts & TIC - Accueil',
};

export default function Page() {
    return (
        <div>
            <Hero />
            <section className='my-16 px-15 max-w-7xl mx-auto'>
                <h1 className='text-4xl md:text-5xl font-bold text-center mb-10 relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Plus qu'un simple programme</h1>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16'>
                    <div className='bg-white rounded-lg shadow-lg p-6'>
                        <h2 className='text-2xl font-semibold mb-6 text-blue-800'>Différents parcours disponibles</h2>
                        <div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
                            <div className='flex flex-col items-center p-4 transition-transform bg-gray-50 rounded-md'>
                                <Image src="/images/exploarts.webp" width={150} height={150} alt="Parcours Explo Arts" className="rounded-full border-4 border-blue-100" />
                                <h3 className='mt-4 text-xl font-medium whitespace-nowrap'>Parcours Explo Arts</h3>
                                <SlideButton link='/explo-arts' />
                            </div>
                            <div className='flex flex-col items-center p-4 transition-transform bg-gray-50 rounded-md'>
                                <Image src="/images/logo-tic.png" width={150} height={150} alt="Parcours TIC et Créativité" className="rounded-full border-4 border-blue-100" />
                                <h3 className='mt-4 text-xl font-medium'>Parcours TIC et Créativité</h3>
                                <SlideButton link='/tic-creativite' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg shadow-lg p-8'>
                        <h2 className='text-2xl font-semibold mb-6 text-blue-800'>Plusieurs activités disponibles</h2>
                        <div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
                            <div className='flex flex-col items-center p-4 transition-transform bg-gray-50 rounded-md'>
                                <Image src="/images/exploarts.webp" width={150} height={150} alt="Activité Explo Arts" className="rounded-full border-4 border-blue-100" />
                                <h3 className='mt-4 text-xl font-medium'>Explo Arts</h3>
                                <SlideButton link='/explo-arts#midi' />
                            </div>
                            <div className='flex flex-col items-center p-4 transition-transform bg-gray-50 rounded-md'>
                                <Image src="/images/crealab.png" width={150} height={150} alt="Activité CréaLab" className="rounded-full border-4 border-blue-100" />
                                <h3 className='mt-4 text-xl font-medium'>CréaLab</h3>
                                <SlideButton link='/tic-creativite#midi' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-15'>
                <h1></h1>
            </section>
            <section className="my-16 h-[70svh]">
                <Image src="/images/arts.png" width={1920} height={1080} alt="" className="w-full h-full object-cover" />
            </section>
            <section className="h-[60vh] flex flex-col items-center justify-center">
                <div className="div1 w-[90vw] px-[5vw] text-center">
                    <p className="mt-4 text-3xl">Professeur Explo Arts, Marie France Théberge</p>
                    <h1 className="text1 text-6xl font-bold overflow-y-hidden py-2">
                        <span className="mr-3">« Un programme pour acquérir</span>
                        <span className="mr-3">un esprit créatif et artistique à</span>
                        <span className="mr-3">travers différents projets et</span>
                        <span className="mr-3">moyens de communication</span>
                        <span className="mr-3">graphique »</span>
                    </h1>
                </div>
            </section>
            <section className="h-screen w-screen px-15">
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
                <h1>Avez-vous des questions ?</h1>
                <button>Contactez-nous</button>
                <button>Critères et Impact</button>
            </section>
        </div>
    );
}