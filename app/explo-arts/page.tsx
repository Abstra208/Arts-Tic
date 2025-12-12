import Carousel from "@/components/carousel";
import HeroArts from "@/components/heroArts";
import { SideScroll, SideScrollBody, SideScrollGroup, SideScrollHeader } from "@/components/SideScroll";
import { Metadata } from "next";
import Image from "next/image";

export default function ArtsPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <HeroArts />
            {/*<Carousel style="2" className="pt-12">
                <div className="p-6 bg-gray-100">
                    <h1 className="text-2xl text-bold">Étape un: Apprentissage</h1>
                    <p className="text-xl w-[70%]">Avant chaque projet, de nouvelles compétences sont apprises en même temps que le nouveau projet!</p>
                    <Image src="/images/explo-art/DSC00975.jpg" width={1080} height={1080} className="w-auto h-full object-cover" alt="" />
                </div>
                <div className="p-6 bg-gray-100">
                    <h1 className="text-2xl text-bold">Étape deux: Place à l&apos;art!</h1>
                    <p className="text-xl w-[70%]">Lorsque tout est bien compris, les élèves peuvent commencer à créer leurs œuvres d&apos;art!</p>
                    <Image src="/images/explo-art/DSC00976.jpg" width={1080} height={1080} className="w-auto h-full object-cover" alt="" />
                </div>
                <div className="p-6 bg-gray-100">
                    <h1 className="text-2xl text-bold">Étape trois: Affichage</h1>
                    <p className="text-xl w-[70%]">Une fois les œuvres d&apos;art créées, les élèves peuvent afficher fièrement leurs créations dans le hall de l&apos;école ou dans les locales d&apos;arts!</p>
                    <Image src="/images/explo-art/DSC00977.jpg" width={1080} height={1080} className="w-auto h-full object-cover" alt="" />
                </div>
            </Carousel>*/}
            <SideScroll className="py-10 h-screen">
                <SideScrollHeader>
                    <h1 className='text-4xl md:text-5xl font-bold text-center relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Comment ça fonctionne?</h1>
                </SideScrollHeader>
                <SideScrollBody>
                    <SideScrollGroup className="h-[70vh] w-[75vw] p-6 bg-gray-100">
                        <h1 className="text-2xl text-bold">Étape un: Apprentissage</h1>
                        <p className="text-xl w-[70%]">Avant chaque projet, de nouvelles compétences sont apprises en même temps que le nouveau projet!</p>
                        <Image src="/images/explo-art/DSC00975.jpg" width={1080} height={1080} className="w-auto h-35 object-cover" alt="" />
                    </SideScrollGroup>
                    <SideScrollGroup className="h-[70vh] w-[75vw] p-6 bg-gray-100">
                        <h1 className="text-2xl text-bold">Étape deux: Place à l&apos;art!</h1>
                        <p className="text-xl w-[70%]">Lorsque tout est bien compris, les élèves peuvent commencer à créer leurs œuvres d&apos;art!</p>
                        <Image src="/images/explo-art/DSC00976.jpg" width={1080} height={1080} className="w-auto h-35 object-cover" alt="" />
                    </SideScrollGroup>
                    <SideScrollGroup className="h-[70vh] w-[75vw] p-6 bg-gray-100">
                        <h1 className="text-2xl text-bold">Étape trois: Affichage</h1>
                        <p className="text-xl w-[70%]">Une fois les œuvres d&apos;art créées, les élèves peuvent afficher fièrement leurs créations dans le hall de l&apos;école ou dans les locales d&apos;arts!</p>
                        <Image src="/images/explo-art/DSC00977.jpg" width={1080} height={1080} className="w-auto h-35 object-cover" alt="" />
                    </SideScrollGroup>
                </SideScrollBody>
            </SideScroll>
            <section className=" my-10">
                <h1>Projets</h1>
                <Carousel style="1" slidesToShow={3} autoSlide>
                    <Image src="/images/projets/mode.jpg" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/maquette.jpg" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/soulier.jpg" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/ronde-bosse-2.jpg" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/projets/ronde-bosse.jpg" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                </Carousel>
            </section>
            <section className="w-full my-10">
                <h1>Locales</h1>
                <Carousel style="3">
                    <Image src="/images/classe/back.png" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/classe/back.png" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                    <Image src="/images/classe/back.png" width={1920} height={1080} className="w-auto h-full object-cover" alt="" />
                </Carousel>
            </section>
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explo Arts - Arts & TIC",
    openGraph: {
      title: "Explo Arts - Arts & TIC",
      images: ["/images/hero.jpg"],
    },
  };
}