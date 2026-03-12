import Image from "next/image";

interface BlobRecord {
    url: string;
    year: number;
    title: string;
    project: string;
    pathname: string;
}

type ApiResponse = {
    data?: Record<string, BlobRecord>;
};

export default async function ProjectsGrid() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projets`, { cache: "no-store" });
    const blobs: ApiResponse = await res.json();
    const items = Object.values(blobs.data || {}).sort((a, b) => b.year - a.year);

    if (items.length === 0) {
        return (
            <div className="rounded-[1.6rem] border border-dashed border-black/12 bg-[#f7f6f2] px-5 py-12 text-center text-slate-600">
                Aucun projet n&apos;est disponible pour le moment.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((blob, index) => (
                <article
                    key={blob.url}
                    className={`group overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-[0_24px_70px_-54px_rgba(15,23,42,0.2)] ${
                        index % 5 === 0 ? "xl:col-span-2" : ""
                    }`}
                >
                    <div className={`relative overflow-hidden ${index % 5 === 0 ? "aspect-16/10" : "aspect-4/5"}`}>
                        <Image
                            src={blob.url}
                            alt={blob.pathname || blob.title}
                            fill
                            sizes={index % 5 === 0 ? "(max-width: 1280px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"}
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.58)_100%)]" />
                    </div>
                    <div className="flex items-end justify-between gap-4 px-5 py-5">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                {blob.project || "Projet"}
                            </p>
                            <h3 className="mt-2 text-xl font-semibold text-slate-900">{blob.title}</h3>
                        </div>
                        <p className="shrink-0 rounded-full border border-black/10 bg-[#f7f6f2] px-3 py-1 text-sm font-medium text-slate-700">
                            {blob.year}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
}
