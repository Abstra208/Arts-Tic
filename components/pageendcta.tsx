import Image from "next/image";
import Button from "./button";
import { JSX } from "react";

type PageEndCtaProps = {
    title: string | JSX.Element;
    href: string;
    outside?: boolean;
    linkLabel: string;
    image: string;
    imageAlt: string;
};

export default function PageEndCta({
    title,
    href,
    outside,
    linkLabel,
    image,
    imageAlt,
}: PageEndCtaProps) {
    return (
        <section className="h-[60vh] md:h-[55vh]">
            <div className="md:gap-6 h-full bg-foreground text-white grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-hidden">
                <div className="flex flex-col px-5 justify-center items-start text-start md:items-end md:text-end">
                    <h2 className="font-bold text-3xl md:text-5xl">{title}</h2>
                    <Button href={href} outside={outside} inverted>
                        {linkLabel}
                    </Button>
                </div>
                <div className="relative h-full">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover rounded-b-2xl md:rounded-b-none md:rounded-l-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
