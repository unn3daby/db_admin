/*
  Warnings:

  - You are about to drop the column `openPrice` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the `physicalPerson` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `physicalPersonId` on table `PhysicalBrokerageAccount` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `openingPrice` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PhysicalBrokerageAccount" DROP CONSTRAINT "PhysicalBrokerageAccount_physicalPersonId_fkey";

-- AlterTable
ALTER TABLE "PhysicalBrokerageAccount" ALTER COLUMN "physicalPersonId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "openPrice",
ADD COLUMN     "openingPrice" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "physicalPerson";

-- CreateTable
CREATE TABLE "PhysicalPerson" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "patronymic" TEXT,
    "inn" INTEGER NOT NULL,

    CONSTRAINT "PhysicalPerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obligation" (
    "id" SERIAL NOT NULL,
    "payerId" INTEGER NOT NULL,
    "price" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "openingPrice" DOUBLE PRECISION NOT NULL,
    "closePrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Obligation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Payer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "obligationId" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ObligationToFoundAccount" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ObligationToFoundAccount_AB_unique" ON "_ObligationToFoundAccount"("A", "B");

-- CreateIndex
CREATE INDEX "_ObligationToFoundAccount_B_index" ON "_ObligationToFoundAccount"("B");

-- AddForeignKey
ALTER TABLE "PhysicalBrokerageAccount" ADD CONSTRAINT "PhysicalBrokerageAccount_physicalPersonId_fkey" FOREIGN KEY ("physicalPersonId") REFERENCES "PhysicalPerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obligation" ADD CONSTRAINT "Obligation_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Payer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_obligationId_fkey" FOREIGN KEY ("obligationId") REFERENCES "Obligation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ObligationToFoundAccount" ADD CONSTRAINT "_ObligationToFoundAccount_A_fkey" FOREIGN KEY ("A") REFERENCES "FundAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ObligationToFoundAccount" ADD CONSTRAINT "_ObligationToFoundAccount_B_fkey" FOREIGN KEY ("B") REFERENCES "Obligation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
