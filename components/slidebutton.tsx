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

export default function SlideButton({
  link,
  text,
  openedDefault = false,
  size = "small",
  target,
  className = "",
}: SlideButtonProps) {
  const displayText = text || "En savoir plus";
  const isAnchorLink = link.startsWith("#");
  const isExternalLink = target === "_blank" || /^https?:\/\//.test(link);
  const labelVisibilityClass = openedDefault ? "max-w-xs opacity-100" : "max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100";
  const sizeClasses =
    size === "large"
      ? "px-6 py-3 text-lg shadow-[0_20px_45px_-30px_rgba(15,23,42,0.28)]"
      : "px-4 py-2.5 text-base shadow-[0_12px_30px_-24px_rgba(15,23,42,0.2)]";

  return (
    <Link
      href={link}
      scroll={!isAnchorLink}
      target={target}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      className={`group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white sm:w-fit sm:flex-nowrap ${sizeClasses} ${className}`}
    >
      <span
        className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-out hidden md:block ${labelVisibilityClass}`}
      >
        <span className="pr-1">{displayText}</span>
      </span>
      <span className="whitespace-nowrap md:hidden">{displayText}</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
        <ArrowRight size={18} />
      </span>
    </Link>
  );
}
