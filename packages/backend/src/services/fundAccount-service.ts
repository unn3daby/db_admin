import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createFundAccount = async (data: Prisma.FundAccountCreateInput) => {
    const stock = await prisma.fundAccount.create({
        data: data,
    });
    return stock;
};

export const showFundAccount = async () => {
    const stocks = await prisma.fundAccount.findMany({
        orderBy: {
            id: Prisma.SortOrder.desc,
        },
    });
    return stocks;
};

export const updateFundAccount = async (
    data: Prisma.FundAccountUpdateInput,
    id: number
) => {
    const stock = await prisma.fundAccount.update({
        where: {
            id: id,
        },
        data,
    });
    return stock;
};

export const deleteFundAccount = async (id: number) => {
    const stock = await prisma.fundAccount.delete({
        where: {
            id: id,
        },
    });
    return stock;
};
