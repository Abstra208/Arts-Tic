export default function NiveauxPage() {

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <section className="h-[50svh] flex flex-col justify-center items-center">
          <h1 className="text-xl md:text-2xl">Niveaux</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nos niveaux offerts</h1>
        </section>
        <section className="w-full px-15">
          <div className="w-full flex flex-col">
            <h1 className="text-5xl text-bold">Niveau secondaire 1</h1>
            <p className="text-2xl w-[70%]">Description du niveau secondaire 1.</p>
          </div>
        </section>
        <section className="w-full px-15">
          <div className="w-full flex flex-col">
            <h1 className="text-5xl text-bold">Niveau secondaire 2</h1>
            <p className="text-2xl w-[70%]">Description du niveau secondaire 2.</p>
          </div>
        </section>
        <section className="w-full px-15">
          <div className="w-full flex flex-col">
            <h1 className="text-5xl text-bold">Niveau secondaire 3</h1>
            <p className="text-2xl w-[70%]">Description du niveau secondaire 3.</p>
          </div>
        </section>
        <section className="w-full px-15">
          <div className="w-full flex flex-col">
            <h1 className="text-5xl text-bold">Niveau secondaire 4</h1>
            <p className="text-2xl w-[70%]">Description du niveau secondaire 4.</p>
          </div>
        </section>
        <section className="w-full px-15 mb-16">
          <div className="w-full flex flex-col">
            <h1 className="text-5xl text-bold">Niveau secondaire 5</h1>
            <p className="text-2xl w-[70%]">Description du niveau secondaire 5.</p>
          </div>
        </section>
      </div>
    </>
  );
}