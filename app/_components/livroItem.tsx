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
    <div className="flex w-[300px] flex-col rounded-sm bg-gray-200 p-3">
      <Image
        src={titulo.imageURLs}
        alt={titulo.titulo}
        style={{
          objectFit: "cover",
        }}
        width={256}
        height={300}
      />
      <div className="flex flex-col p-2">
        {titulo.serie && titulo.numeracaoSerie && (
          <h2 className="text-xs text-gray-400">
            {titulo.serie.titulo}: Livro {titulo.numeracaoSerie}
          </h2>
        )}
        <h2 className="text-md">{titulo.titulo}</h2>
        <p className="text-xs font-light">{titulo.autor.nome}</p>
      </div>
    </div>
  );
};

export default LivroItem;
