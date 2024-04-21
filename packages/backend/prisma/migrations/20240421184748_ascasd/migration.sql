-- DropForeignKey
ALTER TABLE "BrokerBrokerageAccount" DROP CONSTRAINT "BrokerBrokerageAccount_brokerId_fkey";

-- DropForeignKey
ALTER TABLE "Dividends" DROP CONSTRAINT "Dividends_stockId_fkey";

-- DropForeignKey
ALTER TABLE "FundAccount" DROP CONSTRAINT "FundAccount_fundId_fkey";

-- DropForeignKey
ALTER TABLE "FundStock" DROP CONSTRAINT "FundStock_fundId_fkey";

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_companyId_fkey";

-- CreateIndex
CREATE INDEX "Stock_companyId_idx" ON "Stock"("companyId");

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundStock" ADD CONSTRAINT "FundStock_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "Fund"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundAccount" ADD CONSTRAINT "FundAccount_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "Fund"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dividends" ADD CONSTRAINT "Dividends_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrokerBrokerageAccount" ADD CONSTRAINT "BrokerBrokerageAccount_brokerId_fkey" FOREIGN KEY ("brokerId") REFERENCES "Broker"("id") ON DELETE CASCADE ON UPDATE CASCADE;
