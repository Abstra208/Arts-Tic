import { Metadata } from "next";
import { Suspense } from "react";
import HeroProjects from "@/components/heroProjects";
import ProjectsGrid from "@/components/projectsgrid";

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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projets`, { cache: 'no-store' });
    const blobs: Blobs = await res.json();

    return (
        <div className="flex flex-col items-center justify-center">
            <HeroProjects />
            <div className="w-screen">
                <Suspense fallback={<div className="flex items-center justify-center h-96">Loading...</div>}>
                    <ProjectsGrid />
                </Suspense>
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