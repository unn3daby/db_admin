/*
  Warnings:

  - You are about to drop the `_FundStockToBrokerBrokerageAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FundStockToPhysicalBrokerageAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ObligationToBrokerBrokerageAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ObligationToFoundAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ObligationToPhysicalBrokerageAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_StockToBrokerBrokerageAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_StockToFundAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_StockToPhysicalBrokerageAccount` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `price` to the `FundStockToBrokerBrokerageAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `FundStockToBrokerBrokerageAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `FundStockToPhysicalBrokerageAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `FundStockToPhysicalBrokerageAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ObligationToBrokerBrokerageAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ObligationToBrokerBrokerageAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ObligationToFoundAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ObligationToFoundAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ObligationToPhysicalBrokerageAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ObligationToPhysicalBrokerageAccount` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_FundStockToBrokerBrokerageAccount" DROP CONSTRAINT "_FundStockToBrokerBrokerageAccount_A_fkey";

-- DropForeignKey
ALTER TABLE "_FundStockToBrokerBrokerageAccount" DROP CONSTRAINT "_FundStockToBrokerBrokerageAccount_B_fkey";

-- DropForeignKey
ALTER TABLE "_FundStockToPhysicalBrokerageAccount" DROP CONSTRAINT "_FundStockToPhysicalBrokerageAccount_A_fkey";

-- DropForeignKey
ALTER TABLE "_FundStockToPhysicalBrokerageAccount" DROP CONSTRAINT "_FundStockToPhysicalBrokerageAccount_B_fkey";

-- DropForeignKey
ALTER TABLE "_ObligationToBrokerBrokerageAccount" DROP CONSTRAINT "_ObligationToBrokerBrokerageAccount_A_fkey";

-- DropForeignKey
ALTER TABLE "_ObligationToBrokerBrokerageAccount" DROP CONSTRAINT "_ObligationToBrokerBrokerageAccount_B_fkey";

-- DropForeignKey
ALTER TABLE "_ObligationToFoundAccount" DROP CONSTRAINT "_ObligationToFoundAccount_A_fkey";

-- DropForeignKey
ALTER TABLE "_ObligationToFoundAccount" DROP CONSTRAINT "_ObligationToFoundAccount_B_fkey";

-- DropForeignKey
ALTER TABLE "_ObligationToPhysicalBrokerageAccount" DROP CONSTRAINT "_ObligationToPhysicalBrokerageAccount_A_fkey";

-- DropForeignKey
ALTER TABLE "_ObligationToPhysicalBrokerageAccount" DROP CONSTRAINT "_ObligationToPhysicalBrokerageAccount_B_fkey";

-- DropForeignKey
ALTER TABLE "_StockToBrokerBrokerageAccount" DROP CONSTRAINT "_StockToBrokerBrokerageAccount_A_fkey";

-- DropForeignKey
ALTER TABLE "_StockToBrokerBrokerageAccount" DROP CONSTRAINT "_StockToBrokerBrokerageAccount_B_fkey";

-- DropForeignKey
ALTER TABLE "_StockToFundAccount" DROP CONSTRAINT "_StockToFundAccount_A_fkey";

-- DropForeignKey
ALTER TABLE "_StockToFundAccount" DROP CONSTRAINT "_StockToFundAccount_B_fkey";

-- DropForeignKey
ALTER TABLE "_StockToPhysicalBrokerageAccount" DROP CONSTRAINT "_StockToPhysicalBrokerageAccount_A_fkey";

-- DropForeignKey
ALTER TABLE "_StockToPhysicalBrokerageAccount" DROP CONSTRAINT "_StockToPhysicalBrokerageAccount_B_fkey";

-- AlterTable
ALTER TABLE "FundStockToBrokerBrokerageAccount" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "FundStockToPhysicalBrokerageAccount" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ObligationToBrokerBrokerageAccount" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ObligationToFoundAccount" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ObligationToPhysicalBrokerageAccount" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_FundStockToBrokerBrokerageAccount";

-- DropTable
DROP TABLE "_FundStockToPhysicalBrokerageAccount";

-- DropTable
DROP TABLE "_ObligationToBrokerBrokerageAccount";

-- DropTable
DROP TABLE "_ObligationToFoundAccount";

-- DropTable
DROP TABLE "_ObligationToPhysicalBrokerageAccount";

-- DropTable
DROP TABLE "_StockToBrokerBrokerageAccount";

-- DropTable
DROP TABLE "_StockToFundAccount";

-- DropTable
DROP TABLE "_StockToPhysicalBrokerageAccount";
