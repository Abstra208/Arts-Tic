import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full h-auto">
            <div className="h-[40svh] md:h-[50vh] flex flex-col justify-center items-center text-center relative">
                <Image src="/images/logo-tic.png" width={1920} height={1080} className="w-[50vw] md:w-70 md:h-auto" alt="" />
                <Image src="/images/tic/DSC01607.png" width={1920} height={1080} className="absolute bottom-0 right-0 h-15 md:h-30 w-auto" alt="" />
                <Image src="/images/tic/DSC01615.png" width={1920} height={1080} className="absolute top-0 left-40 h-15 md:h-30 w-auto" alt="" />
                <Image src="/images/tic/DSC01608.png" width={1920} height={1080} className="absolute top-15 right-0 h-20 md:h-40 w-auto" alt="" />
            </div>
            <div className="h-[40svh] md:h-[70vh] relative">
                <Image src="/images/hero.jpg" width={1920} height={1080} alt="" className="w-full h-full object-cover" />
            </div>
        </section>
    );
}