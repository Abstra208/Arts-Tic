import Image from "next/image";

interface HeroArtsProps {
    title: string;
    description: string;
    imageSrc: string;
}

export default function HeroPage({ title, description, imageSrc }: HeroArtsProps) {
    return (
        <section className="md:h-[70vh] w-full gap-10 md:gap-0 p-mobile pb-0 md:p-0 md:pl-desktop text-secondary-text bg-secondary mt-15 md:mt-0 flex flex-col md:grid md:grid-cols-2 overflow-hidden border-b border-black/10">
            <div className="flex flex-col text-center md:text-start justify-center items-center md:items-start z-20">
                <h2 className="mt-2 text-5xl md:text-6xl font-bold text-foreground">
                    {title}
                </h2>
                <p className="mt-3 text-lg lg:text-xl leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="h-90 md:h-auto px-10 md:px-0 flex items-end justify-center md:justify-end">
                <Image src={imageSrc} className="w-full md:w-100 md:h-auto" width={1000} height={600} alt="Étudiants du programme Arts & TIC" priority />
            </div>
        </section>
    );
}
