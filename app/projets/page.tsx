import { Metadata } from "next";
import Image from "next/image";
export const dynamic = 'force-dynamic';

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
export default async function Projets() {
    const blobs: Blobs = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projets`).then(res => res.json());

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="h-[50svh] flex flex-col justify-center items-center text-center">
                <h1 className="text-xl md:text-2xl">Affichage</h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Projets</h1>
            </div>
            <div className="w-screen">
                <div className="grid grid-cols-3 gap-0 w-full">
                    {Object.values(blobs.data).map((blob: Blob) => (
                        <div key={blob.url} className="relative w-full overflow-hidden group" style={{ aspectRatio: '1 / 1.5' }}>
                            <Image
                                src={blob.url}
                                alt={blob.pathname}
                                fill
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <h1 className="text-white font-semibold">{blob.title} ⋅ {blob.year}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projets - Arts & TIC",
    openGraph: {
      title: "Projets - Arts & TIC",
      images: ["/images/og-image.jpg"],
    },
  };
}