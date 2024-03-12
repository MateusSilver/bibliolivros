-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('LIVRO', 'REVISTA', 'QUADRINHO');

-- CreateEnum
CREATE TYPE "Aquisicao" AS ENUM ('TENHO', 'EMPRESTADO', 'DESEJADO');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('LIDO', 'RELENDO', 'LENDO', 'ABANDONADO', 'QUEROLER');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "editoras" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "historia" TEXT NOT NULL,

    CONSTRAINT "editoras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "autores" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "historia" TEXT NOT NULL,

    CONSTRAINT "autores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "series" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "titulos" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "tipo" "Tipo" NOT NULL,
    "paginas" INTEGER NOT NULL,
    "edicao" TEXT NOT NULL,
    "numeracaoSerie" INTEGER,
    "sinopse" TEXT NOT NULL,
    "imageURLs" TEXT[],
    "editoraId" TEXT NOT NULL,
    "autorId" TEXT NOT NULL,
    "serieId" TEXT NOT NULL,

    CONSTRAINT "titulos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boxes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "boxes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boxLivros" (
    "id" TEXT NOT NULL,
    "tituloId" TEXT NOT NULL,
    "boxId" TEXT NOT NULL,

    CONSTRAINT "boxLivros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leituras" (
    "id" TEXT NOT NULL,
    "nota" INTEGER,
    "aquisicao" "Aquisicao",
    "statusLeitura" "Status",
    "vezesLido" INTEGER,
    "favorito" BOOLEAN,
    "resenha" TEXT,
    "tituloId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "leituras_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "titulos" ADD CONSTRAINT "titulos_editoraId_fkey" FOREIGN KEY ("editoraId") REFERENCES "editoras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "titulos" ADD CONSTRAINT "titulos_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "autores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "titulos" ADD CONSTRAINT "titulos_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boxLivros" ADD CONSTRAINT "boxLivros_tituloId_fkey" FOREIGN KEY ("tituloId") REFERENCES "titulos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boxLivros" ADD CONSTRAINT "boxLivros_boxId_fkey" FOREIGN KEY ("boxId") REFERENCES "boxes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leituras" ADD CONSTRAINT "leituras_tituloId_fkey" FOREIGN KEY ("tituloId") REFERENCES "titulos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leituras" ADD CONSTRAINT "leituras_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
