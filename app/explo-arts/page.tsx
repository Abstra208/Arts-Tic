import Carousel from "@/components/carousel";
import HeroArts from "@/components/heroArts";
import ProductImageGallery from "@/components/productimagegallery";
import { SideScroll, SideScrollBody, SideScrollGroup, SideScrollHeader } from "@/components/SideScroll";
import { Metadata } from "next";
import Image from "next/image";

export default function ArtsPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <HeroArts />
            <section>
                <h1>La concentration Explo Arts est une exploration professionnelle du volet des arts</h1>
            </section>
            <Carousel style="2" className="pt-12">
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
            </Carousel>
            <SideScroll className="py-10 h-screen">
                <SideScrollHeader>
                    <h1 className='text-4xl md:text-5xl font-bold text-center relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Les étapes de la production</h1>
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
            <section>
                <div>
                    <h1 className='text-4xl md:text-5xl font-bold text-center relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Article promotionnel</h1>
                    <p className='text-xl text-center mt-4'>Nous offrons une sélection d'articles promotionnels uniques pour.</p>
                </div>
                <Carousel style="4" slidesToShow={4} className="py-12" dot="black">
                    <ProductImageGallery
                        mainImage="/images/boutique/molleton_capuchon_art/blanc-art.jpg"
                        items={{
                            "/images/boutique/molleton_capuchon_art/blanc-art.jpg":{tumb:"/images/boutique/molleton_capuchon_art/tumb/blanc-art.jpg"},
                            "/images/boutique/molleton_capuchon_art/dark-heather-art.jpg":{tumb:"/images/boutique/molleton_capuchon_art/tumb/dark-heather-art.jpg"},
                            "/images/boutique/molleton_capuchon_art/gris-sport-art.jpg":{tumb:"/images/boutique/molleton_capuchon_art/tumb/gris-sport-art.jpg"},
                            "/images/boutique/molleton_capuchon_art/navy-art.jpg":{tumb:"/images/boutique/molleton_capuchon_art/tumb/navy-art.jpg"},
                            "/images/boutique/molleton_capuchon_art/noir-art.jpg":{tumb:"/images/boutique/molleton_capuchon_art/tumb/noir-art.jpg"},
                            "/images/boutique/molleton_capuchon_art/red-art.jpg":{tumb:"/images/boutique/molleton_capuchon_art/tumb/red-art.jpg"},
                        }}
                        cols={3}
                        rows={2}
                        title="Molleton à Capuchon"
                    />
                    <ProductImageGallery
                        mainImage="/images/boutique/molleton_col_art/blanc-art.jpg"
                        items={{
                            "/images/boutique/molleton_col_art/blanc-art.jpg":{tumb:"/images/boutique/molleton_col_art/tumb/blanc-art.jpg"},
                            "/images/boutique/molleton_col_art/dark-heather-art.jpg":{tumb:"/images/boutique/molleton_col_art/tumb/dark-heather-art.jpg"},
                            "/images/boutique/molleton_col_art/gris-sport-art.jpg":{tumb:"/images/boutique/molleton_col_art/tumb/gris-sport-art.jpg"},
                            "/images/boutique/molleton_col_art/navy-art.jpg":{tumb:"/images/boutique/molleton_col_art/tumb/navy-art.jpg"},
                            "/images/boutique/molleton_col_art/noir-art.jpg":{tumb:"/images/boutique/molleton_col_art/tumb/noir-art.jpg"},
                            "/images/boutique/molleton_col_art/red-art.jpg":{tumb:"/images/boutique/molleton_col_art/tumb/red-art.jpg"},
                        }}
                        cols={3}
                        rows={2}
                        title="Molleton à Col Arrondi"
                    />
                    <ProductImageGallery
                        mainImage="/images/boutique/manches_courtes_art/dark-heather-art.jpg"
                        items={{
                            "/images/boutique/manches_courtes_art/dark-heather-art.jpg":{tumb:"/images/boutique/manches_courtes_art/tumb/dark-heather-art.jpg"},
                            "/images/boutique/manches_courtes_art/navy-art.jpg":{tumb:"/images/boutique/manches_courtes_art/tumb/navy-art.jpg"},
                            "/images/boutique/manches_courtes_art/noir-art.jpg":{tumb:"/images/boutique/manches_courtes_art/tumb/noir-art.jpg"},
                            "/images/boutique/manches_courtes_art/red-art.jpg":{tumb:"/images/boutique/manches_courtes_art/tumb/red-art.jpg"},
                        }}
                        cols={3}
                        rows={2}
                        title="Manches Courtes"
                    />
                    <ProductImageGallery
                        mainImage="/images/boutique/molleton_capuchon_explo/sand-explo.jpg"
                        items={{
                            "/images/boutique/molleton_capuchon_explo/sand-explo.jpg":{tumb:"/images/boutique/molleton_capuchon_explo/tumb/sand-explo.jpg"},
                            "/images/boutique/molleton_capuchon_explo/green-explo.jpg":{tumb:"/images/boutique/molleton_capuchon_explo/tumb/green-explo.jpg"},
                            "/images/boutique/molleton_capuchon_explo/noir-explo.jpg":{tumb:"/images/boutique/molleton_capuchon_explo/tumb/noir-explo.jpg"},
                        }}
                        cols={3}
                        rows={1}
                        title="Molleton à Capuchon"
                    />
                    <ProductImageGallery
                        mainImage="/images/boutique/molleton_col_explo/sand-explo.jpg"
                        items={{
                            "/images/boutique/molleton_col_explo/sand-explo.jpg":{tumb:"/images/boutique/molleton_col_explo/tumb/sand-explo.jpg"},
                            "/images/boutique/molleton_col_explo/green-explo.jpg":{tumb:"/images/boutique/molleton_col_explo/tumb/green-explo.jpg"},
                            "/images/boutique/molleton_col_explo/noir-explo.jpg":{tumb:"/images/boutique/molleton_col_explo/tumb/noir-explo.jpg"},
                        }}
                        cols={3}
                        rows={1}
                        title="Molleton à Col Arrondi"
                    />
                    <ProductImageGallery
                        mainImage="/images/boutique/manches_courtes_explo/sand-explo.jpg"
                        items={{
                            "/images/boutique/manches_courtes_explo/sand-explo.jpg":{tumb:"/images/boutique/manches_courtes_explo/tumb/sand-explo.jpg"},
                            "/images/boutique/manches_courtes_explo/green-explo.jpg":{tumb:"/images/boutique/manches_courtes_explo/tumb/green-explo.jpg"},
                            "/images/boutique/manches_courtes_explo/noir-explo.jpg":{tumb:"/images/boutique/manches_courtes_explo/tumb/noir-explo.jpg"},
                        }}
                        cols={3}
                        rows={1}
                        title="Manches Courtes"
                    />
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