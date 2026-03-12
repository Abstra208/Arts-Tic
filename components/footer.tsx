import Link from "next/link";

export default function Footer() {
    return (
        <footer className="m-6 w-full mx-auto max-w-6xl px-4 md:px-3">
            <div className="mx-auto max-w-6xl rounded-4xl border border-black/10 bg-white px-5 py-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:px-8 md:py-8">
                <div className="grid gap-8 border-b border-black/10 pb-6 md:grid-cols-[1.2fr_0.8fr] md:pb-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Contact</p>
                        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                            Une question sur la concentration?
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                            Pour en savoir plus sur Arts et TIC, les parcours ou l&apos;inscription, vous pouvez joindre l&apos;école directement.
                        </p>
                        <a
                            href="https://ecole-secondairedelacamaradiere.cssc.gouv.qc.ca/nous-joindre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#f7f6f2] px-4 py-2.5 text-sm font-medium text-slate-800 transition-all duration-300 hover:border-black/20 hover:bg-[#f2f0ea] md:px-5 md:py-3"
                        >
                            Nous joindre
                            <span aria-hidden="true" className="text-sm leading-none text-slate-500">↗</span>
                        </a>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Navigation</p>
                            <ul className="mt-4 space-y-3 text-base text-slate-700">
                                <li><Link href="/">Accueil</Link></li>
                                <li><Link href="/projets">Projets</Link></li>
                                <li><Link href="/explo-arts">Explo Arts</Link></li>
                                <li><Link href="/tic-creativite">TIC et créativité</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Accès</p>
                            <ul className="mt-4 space-y-3 text-base text-slate-700">
                                <li><Link href="/screen">Contrôle d&apos;écran</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:pt-6 md:text-base">
                    <p>
                        © 2025{" "}
                        <a
                            className="text-slate-900 transition-colors duration-200 hover:text-slate-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://crealab.ca"
                        >
                            CréaLab
                        </a>
                        . Tous droits réservés.
                    </p>
                    <p>
                        Une réalisation étudiante par{" "}
                        <a
                            className="text-slate-900 transition-colors duration-200 hover:text-slate-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://morin.moi"
                        >
                            Ludovic
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
