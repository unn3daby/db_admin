import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createPayer = async (data: Prisma.PayerCreateInput) => {
    const stock = await prisma.payer.create({
        data: data,
    });
    return stock;
};

export const showPayer = async () => {
    const stocks = await prisma.payer.findMany({
        orderBy: {
            id: Prisma.SortOrder.desc,
        },
    });
    return stocks;
};

export const updatePayer = async (
    data: Prisma.PayerUpdateInput,
    id: number
) => {
    const stock = await prisma.payer.update({
        where: {
            id: id,
        },
        data,
    });
    return stock;
};

export const deletePayer = async (id: number) => {
    const stock = await prisma.payer.delete({
        where: {
            id: id,
        },
    });
    return stock;
};
