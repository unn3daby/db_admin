import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createStock = async (data: Prisma.StockCreateInput) => {
    const stock = await prisma.stock.create({
        data: data,
    });
    return stock;
};

export const showStocks = async () => {
    const stocks = await prisma.stock.findMany({
        orderBy: {
            id: Prisma.SortOrder.desc,
        },
    });
    return stocks;
};

export const updateStock = async (
    data: Prisma.StockUpdateInput,
    id: number
) => {
    const stock = await prisma.stock.update({
        where: {
            id: id,
        },
        data,
    });
    return stock;
};

export const deleteStock = async (id: number) => {
    const stock = await prisma.stock.delete({
        where: {
            id: id,
        },
    });
    return stock;
};

export const showStocksByCompanyId = async (companyId: number) => {
    const stocks = await prisma.stock.findMany({
        where: {
            companyId: companyId,
        },
    });
    return stocks;
};

export const searchStocks = async (string: string) => {
    const stocks = await prisma.stock.findMany({
        where: {},
    });
    return stocks;
};
