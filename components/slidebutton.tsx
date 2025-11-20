import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SlideButtonProps {
  link: string;
  text?: string;
  openedDefault?: boolean;
  size?: "small" | "large";
  target?: string;
  className?: string;
}

export default function SlideButton({ link, text, openedDefault, size, target, className }: SlideButtonProps) {
  const displayText = text ? text : "En savoir plus";
  const scroll = link.includes('#') ? false : true;
  return (
    <button className={`hover:bg-blue-100 hover:scale-110 p-2 cursor-pointer rounded-full bg-white shadow mt-4 flex items-center gap-2 transition-all duration-500 group ${size === "large" ? "px-6 py-3" : "px-4 py-2"}`}>
        <Link
            href={link}
            className={`flex items-center ${className}`}
            scroll={scroll}
            target={target}
        >
          <span className={`max-w-0 overflow-hidden transition-all duration-500 ease-linear whitespace-nowrap ${openedDefault ? 'max-w-xs' : 'group-hover:max-w-xs'}`}>
            <span className={`pr-2 ${size === "large" ? "text-xl" : "text-md"}`}>{displayText}</span>
          </span>
          <ArrowRight className="text-gray-700" />
        </Link>
    </button>
  );
}