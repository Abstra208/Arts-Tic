import Carousel from "@/components/carousel";
import Image from "next/image";
import { Suspense } from "react";

export default function ArtsPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <section className="h-[50svh] flex flex-col justify-center items-center">
                <h1 className="text-xl md:text-2xl">Parcours</h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Explo Arts</h1>
            </section>
            <section className="w-full h-full text-black flex flex-col items-center justify-center relative">
                <Suspense fallback={<div>Loading video...</div>}>
                    <video autoPlay controls muted loop playsInline preload="none" controlsList="nodownload nofullscreen noremoteplayback" className="arts-vid w-full h-auto">
                        <source src="/videos/arts-broll.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Suspense>
            </section>
            <section className="w-full px-15">
                <div className="w-full flex flex-col">
                    <h1 className="text-5xl text-bold">Étape un: Apprentissage</h1>
                    <p className="text-2xl w-[70%]">Avant chaque projet, de nouvelles compétences sont apprises en même temps que le nouveau projet!</p>
                </div>
                <ul className="flex flex-row">
                    <li>
                        <Image src="/images/explo-art/DSC00975.jpg" width={1080} height={1080} className="w-auto h-full object-cover" alt="" />
                        <p>Apprentissage du cercle chromatique</p>
                    </li>
                </ul>
            </section>
            <section className="w-full px-15 flex flex-col justify-end text-end">
                <div className="w-full flex flex-col items-end">
                    <h1 className="text-5xl text-bold">Étape deux: Place à l'art!</h1>
                    <p className="text-2xl w-[70%]">Lorsque tout est bien compris, les élèves peuvent commencer à créer leurs œuvres d'art!</p>
                </div>
                <ul className="flex flex-row justify-end">
                    <li>
                        <Image src="/images/explo-art/DSC00976.jpg" width={1080} height={1080} className="w-auto h-full object-cover" alt="" />
                        <p>Création d'œuvres d'art uniques</p>
                    </li>
                </ul>
            </section>
            <section className="w-full px-15">
                <div className="w-full flex flex-col">
                    <h1 className="text-5xl text-bold">Étape trois: Affichage</h1>
                    <p className="text-2xl w-[70%]">Une fois les œuvres d'art créées, les élèves peuvent afficher fièrement leurs créations dans le hall de l'école ou dans les locales d'arts!</p>
                </div>
                <ul className="flex flex-row">
                    <li>
                        <Image src="/images/explo-art/DSC00977.jpg" width={1080} height={1080} className="w-auto h-full object-cover" alt="" />
                        <p>Affichage d'un projet dans le hall de l'école</p>
                    </li>
                </ul>
            </section>
            <section className=" my-10">
                <h1>Projets</h1>
                <Carousel slidesToShow={3} autoSlide>
                    <Image src="/images/projets/mode.jpg" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/maquette.jpg" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/soulier.jpg" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/ronde-bosse-2.jpg" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/ronde-bosse.jpg" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                </Carousel>
            </section>
            <section className="w-full my-10">
                <h1>Locales</h1>
                <Carousel>
                    <Image src="/images/classe/back.png" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/classe/back.png" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/classe/back.png" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                </Carousel>
            </section>
        </div>
    );
}