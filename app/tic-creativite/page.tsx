import HeroTIC from '@/components/heroTIC';
import { Metadata } from 'next';

export default function TicPage() {
    return (
        <HeroTIC />
    );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "TIC et Créativité - Arts & TIC",
    openGraph: {
      title: "TIC et Créativité - Arts & TIC",
      images: ["/images/hero.jpg"],
    },
  };
}