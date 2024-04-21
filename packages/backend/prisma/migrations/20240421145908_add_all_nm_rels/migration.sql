-- CreateTable
CREATE TABLE "_ObligationToBrokerBrokerageAccount" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_StockToBrokerBrokerageAccount" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_StockToPhysicalBrokerageAccount" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ObligationToPhysicalBrokerageAccount" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ObligationToBrokerBrokerageAccount_AB_unique" ON "_ObligationToBrokerBrokerageAccount"("A", "B");

-- CreateIndex
CREATE INDEX "_ObligationToBrokerBrokerageAccount_B_index" ON "_ObligationToBrokerBrokerageAccount"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StockToBrokerBrokerageAccount_AB_unique" ON "_StockToBrokerBrokerageAccount"("A", "B");

-- CreateIndex
CREATE INDEX "_StockToBrokerBrokerageAccount_B_index" ON "_StockToBrokerBrokerageAccount"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StockToPhysicalBrokerageAccount_AB_unique" ON "_StockToPhysicalBrokerageAccount"("A", "B");

-- CreateIndex
CREATE INDEX "_StockToPhysicalBrokerageAccount_B_index" ON "_StockToPhysicalBrokerageAccount"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ObligationToPhysicalBrokerageAccount_AB_unique" ON "_ObligationToPhysicalBrokerageAccount"("A", "B");

-- CreateIndex
CREATE INDEX "_ObligationToPhysicalBrokerageAccount_B_index" ON "_ObligationToPhysicalBrokerageAccount"("B");

-- AddForeignKey
ALTER TABLE "_ObligationToBrokerBrokerageAccount" ADD CONSTRAINT "_ObligationToBrokerBrokerageAccount_A_fkey" FOREIGN KEY ("A") REFERENCES "BrokerBrokerageAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ObligationToBrokerBrokerageAccount" ADD CONSTRAINT "_ObligationToBrokerBrokerageAccount_B_fkey" FOREIGN KEY ("B") REFERENCES "Obligation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StockToBrokerBrokerageAccount" ADD CONSTRAINT "_StockToBrokerBrokerageAccount_A_fkey" FOREIGN KEY ("A") REFERENCES "BrokerBrokerageAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StockToBrokerBrokerageAccount" ADD CONSTRAINT "_StockToBrokerBrokerageAccount_B_fkey" FOREIGN KEY ("B") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StockToPhysicalBrokerageAccount" ADD CONSTRAINT "_StockToPhysicalBrokerageAccount_A_fkey" FOREIGN KEY ("A") REFERENCES "PhysicalBrokerageAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StockToPhysicalBrokerageAccount" ADD CONSTRAINT "_StockToPhysicalBrokerageAccount_B_fkey" FOREIGN KEY ("B") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ObligationToPhysicalBrokerageAccount" ADD CONSTRAINT "_ObligationToPhysicalBrokerageAccount_A_fkey" FOREIGN KEY ("A") REFERENCES "Obligation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ObligationToPhysicalBrokerageAccount" ADD CONSTRAINT "_ObligationToPhysicalBrokerageAccount_B_fkey" FOREIGN KEY ("B") REFERENCES "PhysicalBrokerageAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;
