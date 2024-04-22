import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createObligation = async (data: Prisma.ObligationCreateInput) => {
    const stock = await prisma.obligation.create({
        data: data,
    });
    return stock;
};

export const showObligation = async () => {
    const stocks = await prisma.obligation.findMany();
    return stocks;
};

export const updateObligation = async (
    data: Prisma.ObligationUpdateInput,
    id: number
) => {
    const stock = await prisma.obligation.update({
        where: {
            id: id,
        },
        data,
    });
    return stock;
};

export const deleteObligation = async (id: number) => {
    const stock = await prisma.obligation.delete({
        where: {
            id: id,
        },
    });
    return stock;
};
