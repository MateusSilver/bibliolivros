import { Prisma, titulos } from "@prisma/client";
import Image from "next/image";

interface LivroItemProps {
  titulo: Prisma.titulosGetPayload<{
    include: {
      serie: true;
      autor: true;
    };
  }>;
}

const LivroItem = ({ titulo }: LivroItemProps) => {
  return (
    <tr>
      <td className="border border-slate-400">
        <div className="relative h-[100px]">
          <Image
            className="rounded-sm"
            src={titulo.imageURLs}
            alt={titulo.titulo}
            style={{
              objectFit: "contain",
            }}
            fill
          />
        </div>
      </td>
      <td className="border border-slate-400">
        <div className="flex flex-col p-2">
          {titulo.serie && titulo.numeracaoSerie && (
            <h2 className="text-xs text-gray-400">
              {titulo.serie.titulo}: Livro {titulo.numeracaoSerie}
            </h2>
          )}
          <h2 className="text-md">{titulo.titulo}</h2>
        </div>
      </td>
      <td className="border border-slate-400">
        <p className="p-2 text-xs font-light">{titulo.autor.nome}</p>
      </td>
    </tr>
  );
};

export default LivroItem;
