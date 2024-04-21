/*
  Warnings:

  - You are about to drop the column `fundAccountId` on the `Fund` table. All the data in the column will be lost.
  - You are about to drop the column `stockId` on the `Fund` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Fund" DROP CONSTRAINT "Fund_fundAccountId_fkey";

-- AlterTable
ALTER TABLE "Fund" DROP COLUMN "fundAccountId",
DROP COLUMN "stockId";

-- AddForeignKey
ALTER TABLE "FundAccount" ADD CONSTRAINT "FundAccount_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "Fund"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
