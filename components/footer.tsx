import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-6 md:px-15 bg-gray-100 py-5 mt-16">
            <div className="flex flex-col md:flex-row justify-between pb-4">
                <div className="mb-2 md:mb-0">
                    <h1 className='text-2xl md:text-4xl text-left font-bold'>Avez-vous des<br />questions? <a className="text-blue-600" target="_blank" href="https://ecole-secondairedelacamaradiere.cssc.gouv.qc.ca/nous-joindre">Contacter nous!</a></h1>
                </div>
                <div className="text-md md:text-lg">
                    <ul>
                        <li><Link href="/screen">Controle d&apos;écran</Link></li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-0.5 bg-black" />
            <div className="flex flex-col md:flex-row justify-between pt-4 text-md text-gray-600 text-md md:text-lg">
                <p>© 2025 <a className="text-blue-600" target="_blank" href="https://crealab.ca">CréaLab</a>. Tous droits réservés.</p>
                <p>Une réalisation étudiante par <a className="text-blue-600" target="_blank" href="https://abstra208.com">Ludovic</a></p>
            </div>
        </footer>
    );
}