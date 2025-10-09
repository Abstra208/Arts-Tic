import Carousel from "@/components/carousel";
import Image from "next/image";

export default function ArtsPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <section className="h-[60svh] px-15 flex flex-col justify-center items-center">
                <p className="font-bold">Coté Arts</p>
                <h1 className="text-7xl font-bold">Explo Arts</h1>
                <p className="font-bold mt-2 text-gray-500">Projet Artistique</p>
            </section>
            <section className="w-full h-full px-15 text-black flex flex-col items-center justify-center relative">
                <div className="w-full flex flex-row items-center justify-between mb-4">
                    <div>
                        <p>Professeur</p>
                        <h1>Marie France Théberge</h1>
                    </div>
                    <div>
                        <h1>«  »</h1>
                    </div>
                    <div>

                    </div>
                </div>
                <video autoPlay controls muted loop playsInline preload="none" controlsList="nodownload nofullscreen noremoteplayback" className="arts-vid w-full h-auto rounded-2xl">
                    <source src="/videos/arts-broll.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
            <section className="px-15 my-10">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam modi natus cumque enim praesentium fugiat fugit! Labore architecto quia sed vel repellendus eligendi, cumque recusandae non, eius maxime aspernatur nulla!</p>
            </section>
            <section className="px-15 my-10">
                <h1>Projets</h1>
                <Carousel slidesToShow={3} autoSlide>
                    <Image src="/images/projets/mode.jpg" width={1920} height={1080} className="rounded-2xl w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/maquette.jpg" width={1920} height={1080} className="rounded-2xl w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/soulier.jpg" width={1920} height={1080} className="rounded-2xl w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/ronde-bosse-2.jpg" width={1920} height={1080} className="rounded-2xl w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/ronde-bosse.jpg" width={1920} height={1080} className="rounded-2xl w-auto h-full object-cover" alt="" />
                </Carousel>
            </section>
            <section id="midi" className="w-full h-full px-15 my-10">
                <div>
                    <h1>Activite Midi</h1>
                </div>
            </section>
            <section className="w-full px-15 my-10">
                <h1>Locales</h1>
                <Carousel>
                    <Image src="/images/classe/back.png" width={1920} height={1080} className="rounded-2xl w-auto h-full object-cover" alt="" />
                    <Image src="/images/classe/back.png" width={1920} height={1080} className="rounded-2xl w-auto h-full object-cover" alt="" />
                    <Image src="/images/classe/back.png" width={1920} height={1080} className="rounded-2xl w-auto h-full object-cover" alt="" />
                </Carousel>
            </section>
        </div>
    );
}