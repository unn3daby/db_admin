/*
  Warnings:

  - You are about to drop the column `circulation` on the `Stock` table. All the data in the column will be lost.
  - Added the required column `fundStockId` to the `FundAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appeal` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FundAccount" ADD COLUMN     "fundStockId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "circulation",
ADD COLUMN     "appeal" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "FundStock" (
    "id" SERIAL NOT NULL,
    "fundId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isin" INTEGER NOT NULL,
    "openingPrice" DOUBLE PRECISION NOT NULL,
    "appeal" INTEGER NOT NULL,
    "commission" DOUBLE PRECISION NOT NULL,
    "closePrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FundStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dividends" (
    "id" SERIAL NOT NULL,
    "stockId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "payment" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Dividends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Broker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "paymentAccount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Broker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrokerBrokerageAccount" (
    "id" SERIAL NOT NULL,
    "brokerId" INTEGER NOT NULL,
    "capital" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BrokerBrokerageAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhysicalBrokerageAccount" (
    "id" SERIAL NOT NULL,
    "brokerId" INTEGER NOT NULL,
    "physicalId" INTEGER NOT NULL,
    "capital" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PhysicalBrokerageAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physicalPerson" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "patronymic" TEXT,
    "inn" INTEGER NOT NULL,

    CONSTRAINT "physicalPerson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FundStock" ADD CONSTRAINT "FundStock_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "Fund"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dividends" ADD CONSTRAINT "Dividends_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrokerBrokerageAccount" ADD CONSTRAINT "BrokerBrokerageAccount_brokerId_fkey" FOREIGN KEY ("brokerId") REFERENCES "Broker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhysicalBrokerageAccount" ADD CONSTRAINT "PhysicalBrokerageAccount_brokerId_fkey" FOREIGN KEY ("brokerId") REFERENCES "Broker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
