import Button from "./button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="md:h-screen w-full pl-mobile md:pl-desktop text-secondary-text bg-secondary flex flex-col my-15 md:mt-0 gap-8 md:gap-0 md:grid md:grid-cols-[auto_1fr] overflow-hidden">
            <div className="flex flex-col justify-center items-start z-20">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Un cerveau qui pense.
                </h1>
                <h2 className="mt-1 text-4xl md:text-6xl text-foreground tracking-tight">
                    Créatif et concret
                </h2>
                <p className="mt-4 text-lg lg:text-xl leading-relaxed">
                    Explorez les arts visuels, la création numérique et la fabrication dans des projets concrets et vibrants.
                </p>
                <div>
                    <Button href="https://inscris-toi.cssc.gouv.qc.ca/Login" outside>
                        S&apos;inscrire au programme
                    </Button>
                </div>
            </div>

            <div className="w-full md:w-auto md:h-full aspect-895/1166 relative justify-self-end self-end">
                <Image src="/images/hero.jpg" fill className="object-cover mask-url('/assets/svg/image-mask.svg') mask-contain mask-no-repeat mask-center [-webkit-mask-image:url('/assets/svg/image-mask.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]" alt="Étudiants du programme Arts & TIC" priority />
            </div>
        </section>
    );
}
