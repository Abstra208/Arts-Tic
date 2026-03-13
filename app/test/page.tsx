import { Newsreader } from "@/app/layout";

export default function Test() {
    return (
        <section className="">
            <video className="absolute inset-0 h-screen w-auto object-cover -z-1" autoPlay muted loop>
                <source src="/intro.mp4" type="video/mp4" />
            </video>
            <div className="h-screen w-screen max-w-6xl px-4 md:px-10 py-10 flex justify-start items-end text-start">
                <div className="">
                    <p className="inline-flex max-w-full rounded-full border border-black/10 bg-[#f5f4f0] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                        La Camaradière • Arts et TIC
                    </p>
                    <h1 className={`mt-5 text-[2.65rem] leading-none text-white sm:text-5xl md:mt-6 md:text-7xl ${Newsreader.className}`}>
                        Créer avec les arts,
                        <br />
                        les outils et les idées.
                    </h1>
                </div>
            </div>
        </section>
    );
}