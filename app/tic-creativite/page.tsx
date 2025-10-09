import Image from 'next/image';

export default function TicPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Tic Page</h1>
            <p className="text-lg">This is the Tic page content.</p>
            <Image src="/images/projets/montage_affiche.png" height={500} width={500} className="w-[30%] h-auto" alt="Tic" />
        </div>
    );
}