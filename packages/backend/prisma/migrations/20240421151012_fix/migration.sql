-- CreateTable
CREATE TABLE "StockToFundAccount" (
    "stockId" INTEGER NOT NULL,
    "fundAccountId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "StockToFundAccount_pkey" PRIMARY KEY ("stockId","fundAccountId")
);

-- CreateTable
CREATE TABLE "FundStockToBrokerBrokerageAccount" (
    "fundStockId" INTEGER NOT NULL,
    "brokerBrokerageAccountId" INTEGER NOT NULL,

    CONSTRAINT "FundStockToBrokerBrokerageAccount_pkey" PRIMARY KEY ("fundStockId","brokerBrokerageAccountId")
);

-- CreateTable
CREATE TABLE "FundStockToPhysicalBrokerageAccount" (
    "fundStockId" INTEGER NOT NULL,
    "physicalBrokerageAccountId" INTEGER NOT NULL,

    CONSTRAINT "FundStockToPhysicalBrokerageAccount_pkey" PRIMARY KEY ("fundStockId","physicalBrokerageAccountId")
);

-- CreateTable
CREATE TABLE "ObligationToFoundAccount" (
    "obligationId" INTEGER NOT NULL,
    "fundAccountId" INTEGER NOT NULL,

    CONSTRAINT "ObligationToFoundAccount_pkey" PRIMARY KEY ("obligationId","fundAccountId")
);

-- CreateTable
CREATE TABLE "ObligationToBrokerBrokerageAccount" (
    "obligationId" INTEGER NOT NULL,
    "brokerBrokerageAccountId" INTEGER NOT NULL,

    CONSTRAINT "ObligationToBrokerBrokerageAccount_pkey" PRIMARY KEY ("obligationId","brokerBrokerageAccountId")
);

-- CreateTable
CREATE TABLE "ObligationToPhysicalBrokerageAccount" (
    "obligationId" INTEGER NOT NULL,
    "physicalBrokerageAccountId" INTEGER NOT NULL,

    CONSTRAINT "ObligationToPhysicalBrokerageAccount_pkey" PRIMARY KEY ("obligationId","physicalBrokerageAccountId")
);

-- AddForeignKey
ALTER TABLE "StockToFundAccount" ADD CONSTRAINT "StockToFundAccount_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockToFundAccount" ADD CONSTRAINT "StockToFundAccount_fundAccountId_fkey" FOREIGN KEY ("fundAccountId") REFERENCES "FundAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundStockToBrokerBrokerageAccount" ADD CONSTRAINT "FundStockToBrokerBrokerageAccount_fundStockId_fkey" FOREIGN KEY ("fundStockId") REFERENCES "FundStock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundStockToBrokerBrokerageAccount" ADD CONSTRAINT "FundStockToBrokerBrokerageAccount_brokerBrokerageAccountId_fkey" FOREIGN KEY ("brokerBrokerageAccountId") REFERENCES "BrokerBrokerageAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundStockToPhysicalBrokerageAccount" ADD CONSTRAINT "FundStockToPhysicalBrokerageAccount_fundStockId_fkey" FOREIGN KEY ("fundStockId") REFERENCES "FundStock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundStockToPhysicalBrokerageAccount" ADD CONSTRAINT "FundStockToPhysicalBrokerageAccount_physicalBrokerageAccou_fkey" FOREIGN KEY ("physicalBrokerageAccountId") REFERENCES "PhysicalBrokerageAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToFoundAccount" ADD CONSTRAINT "ObligationToFoundAccount_obligationId_fkey" FOREIGN KEY ("obligationId") REFERENCES "Obligation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToFoundAccount" ADD CONSTRAINT "ObligationToFoundAccount_fundAccountId_fkey" FOREIGN KEY ("fundAccountId") REFERENCES "FundAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToBrokerBrokerageAccount" ADD CONSTRAINT "ObligationToBrokerBrokerageAccount_obligationId_fkey" FOREIGN KEY ("obligationId") REFERENCES "Obligation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToBrokerBrokerageAccount" ADD CONSTRAINT "ObligationToBrokerBrokerageAccount_brokerBrokerageAccountI_fkey" FOREIGN KEY ("brokerBrokerageAccountId") REFERENCES "BrokerBrokerageAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToPhysicalBrokerageAccount" ADD CONSTRAINT "ObligationToPhysicalBrokerageAccount_obligationId_fkey" FOREIGN KEY ("obligationId") REFERENCES "Obligation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObligationToPhysicalBrokerageAccount" ADD CONSTRAINT "ObligationToPhysicalBrokerageAccount_physicalBrokerageAcco_fkey" FOREIGN KEY ("physicalBrokerageAccountId") REFERENCES "PhysicalBrokerageAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
