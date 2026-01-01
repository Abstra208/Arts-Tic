import { Metadata } from "next";
import { Suspense } from "react";
import HeroProjects from "@/components/heroProjects";
import ProjectsGrid from "@/components/projectsgrid";

export default async function Projets() {
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
      images: ["/images/hero.jpg"],
    },
  };
}