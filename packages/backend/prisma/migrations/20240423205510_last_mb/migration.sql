/*
  Warnings:

  - You are about to drop the column `fundStockId` on the `FundAccount` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "FundStockToBrokerBrokerageAccount" DROP CONSTRAINT "FundStockToBrokerBrokerageAccount_brokerBrokerageAccountId_fkey";

-- DropForeignKey
ALTER TABLE "FundStockToBrokerBrokerageAccount" DROP CONSTRAINT "FundStockToBrokerBrokerageAccount_fundStockId_fkey";

-- DropForeignKey
ALTER TABLE "FundStockToPhysicalBrokerageAccount" DROP CONSTRAINT "FundStockToPhysicalBrokerageAccount_fundStockId_fkey";

-- DropForeignKey
ALTER TABLE "FundStockToPhysicalBrokerageAccount" DROP CONSTRAINT "FundStockToPhysicalBrokerageAccount_physicalBrokerageAccou_fkey";

-- DropForeignKey
ALTER TABLE "Obligation" DROP CONSTRAINT "Obligation_payerId_fkey";

-- DropForeignKey
ALTER TABLE "ObligationToBrokerBrokerageAccount" DROP CONSTRAINT "ObligationToBrokerBrokerageAccount_brokerBrokerageAccountI_fkey";

-- DropForeignKey
ALTER TABLE "ObligationToBrokerBrokerageAccount" DROP CONSTRAINT "ObligationToBrokerBrokerageAccount_obligationId_fkey";

-- DropForeignKey
ALTER TABLE "ObligationToFoundAccount" DROP CONSTRAINT "ObligationToFoundAccount_fundAccountId_fkey";

-- DropForeignKey
ALTER TABLE "ObligationToFoundAccount" DROP CONSTRAINT "ObligationToFoundAccount_obligationId_fkey";

-- DropForeignKey
ALTER TABLE "ObligationToPhysicalBrokerageAccount" DROP CONSTRAINT "ObligationToPhysicalBrokerageAccount_obligationId_fkey";

-- DropForeignKey
ALTER TABLE "ObligationToPhysicalBrokerageAccount" DROP CONSTRAINT "ObligationToPhysicalBrokerageAccount_physicalBrokerageAcco_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_obligationId_fkey";

-- DropForeignKey
ALTER TABLE "PhysicalBrokerageAccount" DROP CONSTRAINT "PhysicalBrokerageAccount_physicalPersonId_fkey";

-- DropForeignKey
ALTER TABLE "StockToFundAccount" DROP CONSTRAINT "StockToFundAccount_fundAccountId_fkey";

-- DropForeignKey
ALTER TABLE "StockToFundAccount" DROP CONSTRAINT "StockToFundAccount_stockId_fkey";

-- AlterTable
ALTER TABLE "FundAccount" DROP COLUMN "fundStockId";

-- AddForeignKey
ALTER TABLE "PhysicalBrokerageAccount" ADD CONSTRAINT "PhysicalBrokerageAccount_physicalPersonId_fkey" FOREIGN KEY ("physicalPersonId") REFERENCES "PhysicalPerson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obligation" ADD CONSTRAINT "Obligation_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Payer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_obligationId_fkey" FOREIGN KEY ("obligationId") REFERENCES "Obligation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockToFundAccount" ADD CONSTRAINT "StockToFundAccount_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockToFundAccount" ADD CONSTRAINT "StockToFundAccount_fundAccountId_fkey" FOREIGN KEY ("fundAccountId") REFERENCES "FundAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundStockToBrokerBrokerageAccount" ADD CONSTRAINT "FundStockToBrokerBrokerageAccount_fundStockId_fkey" FOREIGN KEY ("fundStockId") REFERENCES "FundStock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundStockToBrokerBrokerageAccount" ADD CONSTRAINT "FundStockToBrokerBrokerageAccount_brokerBrokerageAccountId_fkey" FOREIGN KEY ("brokerBrokerageAccountId") REFERENCES "BrokerBrokerageAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundStockToPhysicalBrokerageAccount" ADD CONSTRAINT "FundStockToPhysicalBrokerageAccount_fundStockId_fkey" FOREIGN KEY ("fundStockId") REFERENCES "FundStock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundStockToPhysicalBrokerageAccount" ADD CONSTRAINT "FundStockToPhysicalBrokerageAccount_physicalBrokerageAccou_fkey" FOREIGN KEY ("physicalBrokerageAccountId") REFERENCES "PhysicalBrokerageAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToFoundAccount" ADD CONSTRAINT "ObligationToFoundAccount_obligationId_fkey" FOREIGN KEY ("obligationId") REFERENCES "Obligation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToFoundAccount" ADD CONSTRAINT "ObligationToFoundAccount_fundAccountId_fkey" FOREIGN KEY ("fundAccountId") REFERENCES "FundAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToBrokerBrokerageAccount" ADD CONSTRAINT "ObligationToBrokerBrokerageAccount_obligationId_fkey" FOREIGN KEY ("obligationId") REFERENCES "Obligation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToBrokerBrokerageAccount" ADD CONSTRAINT "ObligationToBrokerBrokerageAccount_brokerBrokerageAccountI_fkey" FOREIGN KEY ("brokerBrokerageAccountId") REFERENCES "BrokerBrokerageAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToPhysicalBrokerageAccount" ADD CONSTRAINT "ObligationToPhysicalBrokerageAccount_obligationId_fkey" FOREIGN KEY ("obligationId") REFERENCES "Obligation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToPhysicalBrokerageAccount" ADD CONSTRAINT "ObligationToPhysicalBrokerageAccount_physicalBrokerageAcco_fkey" FOREIGN KEY ("physicalBrokerageAccountId") REFERENCES "PhysicalBrokerageAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;
