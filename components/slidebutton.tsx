import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SlideButton({ link }: { link: string }) {
  const scroll = link.includes('#') ? false : true;
  return (
    <button className="hover:bg-blue-100 p-2 rounded-full bg-white shadow mt-4 hover:scale-110 flex items-center gap-2 transition-all duration-500 group">
        <Link
            href={link}
            className="flex items-center"
            scroll={scroll}
        >
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear whitespace-nowrap">
          <span className="pr-2">En savoir plus</span>
            </span>
            <ArrowRight className="text-gray-700" />
        </Link>
    </button>
  );
}