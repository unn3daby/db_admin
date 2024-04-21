-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "globalId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "isinCode" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "openPrice" DOUBLE PRECISION NOT NULL,
    "circulation" DOUBLE PRECISION NOT NULL,
    "closePrice" DOUBLE PRECISION NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "revenue" DOUBLE PRECISION NOT NULL,
    "marketCap" DOUBLE PRECISION NOT NULL,
    "founded" TIMESTAMP(3) NOT NULL,
    "netIncome" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_globalId_key" ON "Stock"("globalId");

-- CreateIndex
CREATE UNIQUE INDEX "Stock_companyId_key" ON "Stock"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
