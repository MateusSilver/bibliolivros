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
        <table className="m-3 w-full table-auto border-collapse border border-primary">
          <thead>
            <tr>
              <th className="border border-slate-400">
                <p className="text-start">Capa</p>
              </th>
              <th className="border border-slate-400">
                <p className="text-start">Nome</p>
              </th>
              <th className="border border-slate-400">
                <p className="text-start">Autor</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LivroItem titulo={livro} key={livro.id} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
