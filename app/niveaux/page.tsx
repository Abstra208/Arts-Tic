export default function NiveauxPage() {
    return (
        <div className="relative">
            <div className="h-24"></div>
            <section className="sticky top-24 h-[calc(100vh-6rem)] bg-white flex items-center justify-center text-black text-4xl z-10">
                <h1>Secondaire 1</h1>
            </section>
            <section className="sticky top-24 h-[calc(100vh-6rem)] bg-black flex items-center justify-center text-white text-4xl z-20">
                <h1>Secondaire 2</h1>
            </section>
            <section className="sticky top-24 h-[calc(100vh-6rem)] bg-white flex items-center justify-center text-black text-4xl z-30">
                <h1>Secondaire 3</h1>
            </section>
            <section className="sticky top-24 h-[calc(100vh-6rem)] bg-black flex items-center justify-center text-white text-4xl z-40">
                <h1>Secondaire 4</h1>
            </section>
            <section className="sticky top-24 h-[calc(100vh-6rem)] bg-white flex items-center justify-center text-black text-4xl z-50">
                <h1>Secondaire 5</h1>
            </section>
        </div>
    );
}