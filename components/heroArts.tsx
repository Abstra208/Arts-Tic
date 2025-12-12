export default function HeroArts() {
    return (
        <section className="w-full h-[70svh] md:h-auto">
            <div className="h-[50svh] flex flex-col justify-center items-center text-center">
                <h1 className="text-xl md:text-2xl">Parcours</h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Explo Arts</h1>
            </div>
            <div className="h-auto">
                <video autoPlay controls muted loop playsInline preload="none" controlsList="nodownload nofullscreen noremoteplayback" className="arts-vid w-full h-[86vh]">
                    <source src="/videos/arts-broll.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}