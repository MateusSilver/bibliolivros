import { Prisma, titulos } from "@prisma/client";

interface LivroItemProps {
  titulo: Prisma.titulosGetPayload<{
    include: {
      serie: true;
    };
  }>;
}

const LivroItem = ({ titulo }: LivroItemProps) => {
  return (
    <div className="flex flex-col p-3 ">
      <div className="flex flex-col p-2">
        {titulo.serie && titulo.numeracaoSerie && (
          <h2>
            {titulo.serie.titulo}: Livro {titulo.numeracaoSerie}
          </h2>
        )}
        <h2>{titulo.titulo}</h2>
      </div>
    </div>
  );
};

export default LivroItem;
