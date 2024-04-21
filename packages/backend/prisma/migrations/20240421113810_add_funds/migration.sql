/*
  Warnings:

  - You are about to drop the column `founded` on the `Company` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "founded",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Fund" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "fullname" TEXT NOT NULL,
    "capitalization" TEXT NOT NULL,
    "shortname" TEXT NOT NULL,
    "fundAccountId" INTEGER,
    "stockId" INTEGER,

    CONSTRAINT "Fund_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FundAccount" (
    "id" SERIAL NOT NULL,
    "fundId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "capital" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FundAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_StockToFundAccount" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_StockToFundAccount_AB_unique" ON "_StockToFundAccount"("A", "B");

-- CreateIndex
CREATE INDEX "_StockToFundAccount_B_index" ON "_StockToFundAccount"("B");

-- AddForeignKey
ALTER TABLE "Fund" ADD CONSTRAINT "Fund_fundAccountId_fkey" FOREIGN KEY ("fundAccountId") REFERENCES "FundAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StockToFundAccount" ADD CONSTRAINT "_StockToFundAccount_A_fkey" FOREIGN KEY ("A") REFERENCES "FundAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StockToFundAccount" ADD CONSTRAINT "_StockToFundAccount_B_fkey" FOREIGN KEY ("B") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
