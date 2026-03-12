import { Newsreader } from "@/app/layout";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PageEndCtaProps = {
    eyebrow: string;
    title: string;
    text: string;
    href: string;
    outside?: boolean;
    linkLabel: string;
    image: string;
    imageAlt: string;
};

export default function PageEndCta({
    eyebrow,
    title,
    text,
    href,
    outside,
    linkLabel,
    image,
    imageAlt,
}: PageEndCtaProps) {
    return (
        <section className="mt-16 w-full px-4 md:px-10">
            <div className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)]">
                <div className="grid gap-6 p-5 md:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{eyebrow}</p>
                        <h2 className={`mt-4 text-3xl md:text-5xl ${Newsreader.className}`}>{title}</h2>
                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">{text}</p>
                        <Link
                            href={href}
                            target={outside ? "_blank" : undefined}
                            rel={outside ? "noopener noreferrer" : undefined}
                            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 md:px-6 md:py-4 md:text-base"
                        >
                            {linkLabel}
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                    <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#f7f6f2] p-2">
                        <div className="relative aspect-16/10 overflow-hidden rounded-[1.2rem]">
                            <Image src={image} width={1600} height={1000} alt={imageAlt} className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
