-- CreateTable
CREATE TABLE "_FundStockToPhysicalBrokerageAccount" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FundStockToBrokerBrokerageAccount" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FundStockToPhysicalBrokerageAccount_AB_unique" ON "_FundStockToPhysicalBrokerageAccount"("A", "B");

-- CreateIndex
CREATE INDEX "_FundStockToPhysicalBrokerageAccount_B_index" ON "_FundStockToPhysicalBrokerageAccount"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FundStockToBrokerBrokerageAccount_AB_unique" ON "_FundStockToBrokerBrokerageAccount"("A", "B");

-- CreateIndex
CREATE INDEX "_FundStockToBrokerBrokerageAccount_B_index" ON "_FundStockToBrokerBrokerageAccount"("B");

-- AddForeignKey
ALTER TABLE "_FundStockToPhysicalBrokerageAccount" ADD CONSTRAINT "_FundStockToPhysicalBrokerageAccount_A_fkey" FOREIGN KEY ("A") REFERENCES "FundStock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FundStockToPhysicalBrokerageAccount" ADD CONSTRAINT "_FundStockToPhysicalBrokerageAccount_B_fkey" FOREIGN KEY ("B") REFERENCES "PhysicalBrokerageAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FundStockToBrokerBrokerageAccount" ADD CONSTRAINT "_FundStockToBrokerBrokerageAccount_A_fkey" FOREIGN KEY ("A") REFERENCES "BrokerBrokerageAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FundStockToBrokerBrokerageAccount" ADD CONSTRAINT "_FundStockToBrokerBrokerageAccount_B_fkey" FOREIGN KEY ("B") REFERENCES "FundStock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
