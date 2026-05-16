import Button from "./button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="md:h-[70vh] w-full pl-mobile md:pl-desktop text-secondary-text bg-secondary py-15 md:mt-0 gap-8 md:gap-0 flex flex-col md:grid md:grid-cols-[auto_1fr] overflow-hidden border-b border-black/10">
            <div className="flex flex-col justify-center items-start z-20 pr-mobile md:pr-0">
                <h1 className="text-5xl md:text-6xl tracking-tight text-foreground mb-2">
                    Une galerie de projets vibrants et concrets
                </h1>
                <Button href="#arts">Voir les projets Arts</Button>
                <Button href="#tic">Voir les projets TIC</Button>
            </div>

            <div className="h-75 w-auto md:h-full aspect-61/53 relative justify-self-end self-end">
                <Image src="/images/arts.png" fill className="object-cover mask-url('/assets/svg/image-mask-large.svg') mask-contain mask-no-repeat mask-center [-webkit-mask-image:url('/assets/svg/image-mask-large.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]" alt="Étudiants du programme Arts & TIC" priority />
            </div>
        </section>
    );
}
