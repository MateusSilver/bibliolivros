import LivroItem from "../_components/livroItem";
import { db } from "../_lib/prisma";

export default async function Home() {
  const livros = await db.titulos.findMany({
    include: {
      serie: true,
      autor: true,
    },
  });

  return (
    <main>
      <div className="mx-3 my-4">
        <h2 className="my-3 text-xl uppercase">Todos os livros</h2>
        <div className="my-4 flex flex-nowrap gap-2 overflow-x-auto">
          {livros.map((livro) => (
            <LivroItem titulo={livro} key={livro.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
