export default function HeroArts() {
    return (
        <section className="w-full h-[70svh] md:h-auto">
            <div className="h-[50%] md:h-[50svh] flex flex-col justify-center items-center text-center">
                <h1 className="text-xl md:text-2xl">Parcours</h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Explo Arts</h1>
            </div>
            <div className="h-[50%] md:h-[70vh]">
                <video autoPlay muted loop playsInline preload="none" controlsList="nodownload nofullscreen noremoteplayback" className="w-full h-full object-cover">
                    <source src="/videos/arts-broll.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}