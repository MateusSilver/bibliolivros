import LivroItem from "../_components/livroItem";
import { db } from "../_lib/prisma";

export default async function Home() {
  const livros = await db.titulos.findMany({
    include: {
      serie: true,
    },
  });

  return (
    <main>
      <p>hello world</p>
      <div className="my-4 flex flex-col gap-2">
        {livros.map((livro) => (
          <LivroItem titulo={livro} key={livro.id} />
        ))}
      </div>
    </main>
  );
}
