import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const NavItems = {
        "arts et tic": [
            { label: "Explo Arts", href: "/explo-arts" },
            { label: "À propos", href: "/explo-arts#propos" },
            { label: "Étapes", href: "/explo-arts#etapes" },
            { label: "Productions", href: "/explo-arts#productions" },
            { label: "Locaux", href: "/explo-arts#locaux" },
            { label: "Réalisation", href: "/explo-arts#realisations" },
            { label: "Articles promotionnels", href: "/explo-arts#boutique" },
        ],
        "TIC et créativité": [
            { label: "TIC et créativité", href: "/tic-creativite" },
            { label: "À propos", href: "/tic-creativite#propos" },
            { label: "Étapes", href: "/tic-creativite#etapes" },
            { label: "Productions", href: "/tic-creativite#productions" },
            { label: "Locaux", href: "/tic-creativite#locaux" },
            { label: "Réalisation", href: "/tic-creativite#realisations" },
            { label: "Articles promotionnels", href: "/tic-creativite#boutique" },
        ],
        "navigation": [
            { label: "Accueil", href: "/" },
            { label: "Explo Arts", href: "/explo-arts" },
            { label: "TIC et créativité", href: "/tic-creativite" },
            { label: "Galerie", href: "/galerie" },
        ],
        "Galerie": [
            { label: "Page de la galerie", href: "/galerie" },
            { label: "Projets Arts", href: "/galerie#arts" },
            { label: "Projets TIC", href: "/galerie#tic" },
        ],
        "À propos": [
            { label: "aa@sa.ca", href: "mailto:aa@sa.ca" },
        ],
    };
    
    return (
        <footer className="w-full md:h-screen">
            <div className="h-full flex flex-col md:grid md:grid-cols-[1fr_2fr]">
                <div className="h-full order-2 md:order-1 bg-secondary text-foreground pt-16 pb-8 flex flex-col gap-15 md:gap-0 md:justify-between items-center">
                    <div className="h-full flex flex-col items-center font-bold">
                        <Image src="/logo.svg" alt="Logo" width={130} height={130} className="h-30 md:h-40" />
                        <h2 className="mt-4 text-6xl">
                            Arts & TIC
                        </h2>
                        <p className="mt-4 leading-7 text-xl uppercase">
                            La Camaradière
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>
                            © 2025{" "}
                            <a
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
                                className="transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://morin.moi"
                            >
                                Ludovic
                            </a>
                        </p>
                    </div>
                </div>

                <div className="py-15 md:py-0 p-5 md:p-0 h-full w-full bg-[#F6F6F5] order-1 md:order-2 flex flex-col md:items-center md:justify-between">
                    <div className="flex flex-row h-full w-full items-center justify-start md:justify-center">
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
                            {Object.entries(NavItems).map(([section, items]) => (
                                <div key={section} className="flex flex-col gap-2 md:gap-4">
                                    <h3 className="font-bold uppercase tracking-[0.22em] text-black">{section}</h3>
                                    <ul className="flex flex-col gap-1 md:gap-2">
                                        {items.map((item) => (
                                            <li key={item.href}>
                                                <Link href={item.href} className="transition-colors duration-300 text-gray-500 hover:text-gray-700">
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
