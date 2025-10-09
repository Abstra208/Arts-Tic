import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full h-auto">
            <div className="h-[50svh] flex flex-col justify-center items-center text-center">
                <Image src="/images/logo-tic.png" width={1920} height={1080} className="w-70 h-auto" alt="" />
            </div>
            <div className="h-[70svh]">
                <Image src="/images/hero.jpg" width={1920} height={1080} alt="" className="w-full h-full object-cover" />
            </div>
        </section>
    );
}