import HeroTIC from '@/components/heroTIC';
import { Metadata } from 'next';

export default function TicPage() {
    return (
        <div className='flex flex-col items-center justify-center'>
          <HeroTIC />
          <section>
            <div className="max-w-4xl px-4 py-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">TIC et Créativité</h2>
              <p className="text-lg mb-4">
                Le parcours TIC et Créativité offre aux étudiants une opportunité unique de fusionner la technologie avec l&apos;expression artistique. En explorant divers outils numériques, les élèves développent des compétences en conception graphique, en montage vidéo, en animation 3D et en programmation créative. Ce parcours vise à stimuler l&apos;innovation et la pensée critique, tout en encourageant les étudiants à repousser les limites de leur créativité à travers des projets pratiques et collaboratifs.
              </p>
              <p className="text-lg">
                En intégrant les technologies de l&apos;information et de la communication dans le processus créatif, les étudiants acquièrent une compréhension approfondie des tendances actuelles dans le domaine des arts numériques. Ils apprennent à utiliser des logiciels professionnels et des plateformes en ligne pour donner vie à leurs idées, tout en développant une sensibilité artistique et une capacité à communiquer visuellement. Ce parcours prépare les élèves à des carrières dans des domaines variés tels que le design graphique, le développement web, la production multimédia et bien plus encore.
              </p>
            </div>
          </section>
        </div>
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