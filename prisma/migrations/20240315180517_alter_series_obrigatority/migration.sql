-- DropForeignKey
ALTER TABLE "titulos" DROP CONSTRAINT "titulos_serieId_fkey";

-- AlterTable
ALTER TABLE "titulos" ALTER COLUMN "serieId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "titulos" ADD CONSTRAINT "titulos_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "series"("id") ON DELETE SET NULL ON UPDATE CASCADE;
