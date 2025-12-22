import Image from "next/image";

interface Blobs {
    [key: string]: Blob;
}

interface Blob {
    url: string;
    year: number;
    title: string;
    project: string;
    pathname: string;
}

export default async function ProjectsGrid() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projets`, { cache: 'no-store' });
    const blobs: Blobs = await res.json();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
            {Object.values(blobs.data).map((blob: Blob) => (
                <div key={blob.url} className="relative w-full overflow-hidden group" style={{ aspectRatio: '1 / 1.5' }}>
                    <Image
                        src={blob.url}
                        alt={blob.pathname}
                        fill
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 md:bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h1 className="text-white font-semibold">{blob.title} ⋅ {blob.year}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}