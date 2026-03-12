"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const gridColsClass: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
};

const gridRowsClass: Record<number, string> = {
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3",
};

type GalleryItems = Record<string, { tumb: string }>;

type ProductImageGalleryProps = {
    mainImage: string;
    items?: GalleryItems;
    cols?: number;
    rows?: number;
    title: string;
    description: string;
    badge?: string;
    note?: string;
    featured?: boolean;
    inverted?: boolean;
};

export default function ProductImageGallery({
    mainImage,
    items,
    cols = 3,
    rows = 1,
    title,
    description,
    badge,
    note,
    featured = false,
    inverted = false,
}: ProductImageGalleryProps) {
    const [currentImage, setCurrentImage] = React.useState(mainImage);
    const itemEntries = Object.entries(items || {});

    useEffect(() => {
        setCurrentImage(mainImage);
    }, [mainImage]);

    const colsClass = gridColsClass[cols] || "grid-cols-3";
    const rowsClass = gridRowsClass[rows] || "grid-rows-1";

    return (
        <article
            className={`w-full rounded-[1.8rem] border border-black/10 bg-[#f7f6f2] p-4 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] md:p-5 ${
                featured ? "xl:col-span-2" : ""
            }`}
        >
            <div
                className={`grid gap-5 ${
                    featured ? "md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:items-center" : ""
                }`}
            >
                <div className={featured ? (inverted ? "order-1" : "order-2") : ""}>
                    <div className="overflow-hidden rounded-[1.45rem] border border-black/10 bg-white p-2">
                        <div className={`relative overflow-hidden rounded-[1.1rem] bg-white aspect-4/4`}>
                            <Image
                                src={currentImage}
                                alt={title}
                                width={900}
                                height={900}
                                sizes={featured ? "(max-width: 1280px) 100vw, 22vw" : "(max-width: 1280px) 100vw, 22rem"}
                                className="h-full w-full object-cover pointer-events-none"
                            />
                        </div>
                    </div>
                </div>

                <div className={featured ? (inverted ? "order-2" : "order-1") : ""}>
                    <div className="flex flex-wrap items-center gap-2">
                        {badge ? (
                            <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-600">
                                {badge}
                            </span>
                        ) : null}
                        <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-slate-500">
                            {itemEntries.length} variations
                        </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold text-slate-900 md:text-[1.75rem]">{title}</h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">{description}</p>
                    {note ? (
                        <p className="mt-4 text-sm leading-6 text-slate-500">{note}</p>
                    ) : null}

                    <div className={`mt-5 grid ${colsClass} ${rowsClass} gap-2.5`}>
                        {itemEntries.map(([key, value], index) => (
                            <button
                                type="button"
                                onClick={() => setCurrentImage(key)}
                                aria-pressed={currentImage === key}
                                key={index}
                                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                                    currentImage === key
                                        ? "border-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.45)]"
                                        : "border-black/8 hover:border-black/25 hover:-translate-y-0.5"
                                }`}
                            >
                                <div className="relative aspect-square bg-white">
                                    <Image
                                        src={value.tumb}
                                        alt={`Variation ${index + 1} de ${title}`}
                                        width={300}
                                        height={300}
                                        sizes="(max-width: 768px) 84px, 92px"
                                        className="h-full w-full object-cover pointer-events-none"
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
