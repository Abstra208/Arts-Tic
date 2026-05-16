import Link from "next/link";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";

interface ButtonProps {
    href: string;
    outside?: boolean;
    children: React.ReactNode;
    inverted?: boolean;
}

export default function Button({ href, outside = false, children, inverted }: ButtonProps) {
    return (
        <Link
            href={href}
            target={outside ? "_blank" : undefined}
            rel={outside ? "noopener noreferrer" : undefined}
            className={`group mt-6 inline-flex items-center gap-3 rounded-full ${inverted ? "bg-white text-foreground" : "bg-foreground text-white"} px-5 py-3.5 text-sm font-semibold md:px-6 md:py-4 md:text-base`}
        >
            {children}
            {outside ? (
                <SquareArrowOutUpRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
            ) : 
                <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
            }
        </Link>
    );
}