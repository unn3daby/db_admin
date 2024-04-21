/*
  Warnings:

  - Changed the type of `globalId` on the `Stock` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `isinCode` on the `Stock` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "globalId",
ADD COLUMN     "globalId" INTEGER NOT NULL,
DROP COLUMN "isinCode",
ADD COLUMN     "isinCode" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Stock_globalId_key" ON "Stock"("globalId");
