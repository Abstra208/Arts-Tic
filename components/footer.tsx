import SlideButton from "@/components/slidebutton";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 py-6 mt-12">
            <div>
                <p>Une réalisation étudiante par Ludovic</p>
                <Link href="/screen">Controle d&apos;écran</Link>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className='text-4xl md:text-5xl font-bold text-center mb-4 relative after:content-[""] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4'>Avez-vous des questions ?</h1>
                <SlideButton link="https://ecole-secondairedelacamaradiere.cssc.gouv.qc.ca/nous-joindre" text="Contacter nous!" size='large' openedDefault={true} target="_blank" />
            </div>
        </footer>
    );
}