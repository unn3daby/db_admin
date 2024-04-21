import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createBroker = async (data: Prisma.BrokerCreateInput) => {
    const stock = await prisma.broker.create({
        data: data,
    });
    return stock;
};

export const showBroker = async () => {
    const stocks = await prisma.broker.findMany();
    return stocks;
};

export const updateBroker = async (
    data: Prisma.BrokerUpdateInput,
    id: number
) => {
    const stock = await prisma.broker.update({
        where: {
            id: id,
        },
        data,
    });
    return stock;
};

export const deleteBroker = async (id: number) => {
    const stock = await prisma.broker.delete({
        where: {
            id: id,
        },
    });
    return stock;
};
