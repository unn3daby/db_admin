import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createFund = async (data: Prisma.FundCreateInput) => {
    const stock = await prisma.fund.create({
        data: data,
    });
    return stock;
};

export const showFund = async () => {
    const stocks = await prisma.fund.findMany();
    return stocks;
};

export const updateFund = async (
    data: Prisma.FundUpdateInput,
    id: number
) => {
    const stock = await prisma.fund.update({
        where: {
            id: id,
        },
        data,
    });
    return stock;
};

export const deleteFund = async (id: number) => {
    const stock = await prisma.fund.delete({
        where: {
            id: id,
        },
    });
    return stock;
};
