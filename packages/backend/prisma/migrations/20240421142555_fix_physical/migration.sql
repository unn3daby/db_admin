/*
  Warnings:

  - You are about to drop the column `physicalId` on the `PhysicalBrokerageAccount` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PhysicalBrokerageAccount" DROP COLUMN "physicalId",
ADD COLUMN     "physicalPersonId" INTEGER;

-- AddForeignKey
ALTER TABLE "PhysicalBrokerageAccount" ADD CONSTRAINT "PhysicalBrokerageAccount_physicalPersonId_fkey" FOREIGN KEY ("physicalPersonId") REFERENCES "physicalPerson"("id") ON DELETE SET NULL ON UPDATE CASCADE;
