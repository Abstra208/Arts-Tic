import Image from 'next/image';

export default function HeroTIC() {
    return (
        <section className="w-full h-auto">
            <div className="h-[45svh] md:h-[50svh] flex flex-col justify-center items-center text-center relative">
                <h1 className="text-xl md:text-2xl">Parcours</h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">TIC et Créativité</h1>
                <Image src="/images/tic/DSC01607.png" width={1920} height={1080} className="absolute bottom-0 right-0 h-15 md:h-30 w-auto" alt="" />
                <Image src="/images/tic/DSC01615.png" width={1920} height={1080} className="absolute top-0 left-40 h-15 md:h-30 w-auto" alt="" />
                <Image src="/images/tic/DSC01608.png" width={1920} height={1080} className="absolute top-15 right-0 h-20 md:h-40 w-auto" alt="" />
            </div>
            <div className="h-[40svh] md:h-[70vh]">
                <video controls muted loop playsInline preload="none" controlsList="nodownload nofullscreen noremoteplayback" className="w-full h-full object-cover">
                    <source src="/videos/arts-broll.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}