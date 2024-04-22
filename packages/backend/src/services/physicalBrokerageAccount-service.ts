import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createPhysicalBrokerageAccount = async (data: Prisma.PhysicalBrokerageAccountCreateInput) => {
    const stock = await prisma.physicalBrokerageAccount.create({
        data: data,
    });
    return stock;
};

export const showPhysicalBrokerageAccount = async () => {
    const stocks = await prisma.physicalBrokerageAccount.findMany();
    return stocks;
};

export const updatePhysicalBrokerageAccount = async (
    data: Prisma.PhysicalBrokerageAccountUpdateInput,
    id: number
) => {
    const stock = await prisma.physicalBrokerageAccount.update({
        where: {
            id: id,
        },
        data,
    });
    return stock;
};

export const deletePhysicalBrokerageAccount = async (id: number) => {
    const stock = await prisma.physicalBrokerageAccount.delete({
        where: {
            id: id,
        },
    });
    return stock;
};
