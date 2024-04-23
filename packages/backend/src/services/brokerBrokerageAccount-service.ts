import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createBrokerBrokerageAccount = async (data: Prisma.BrokerBrokerageAccountCreateInput) => {
    const stock = await prisma.brokerBrokerageAccount.create({
        data: data,
    });
    return stock;
};

export const showBrokerBrokerageAccount = async () => {
    const stocks = await prisma.brokerBrokerageAccount.findMany({
        orderBy: {
            id: Prisma.SortOrder.desc,
        },
    });
    return stocks;
};

export const updateBrokerBrokerageAccount = async (
    data: Prisma.BrokerBrokerageAccountUpdateInput,
    id: number
) => {
    const stock = await prisma.brokerBrokerageAccount.update({
        where: {
            id: id,
        },
        data,
    });
    return stock;
};

export const deleteBrokerBrokerageAccount = async (id: number) => {
    const stock = await prisma.brokerBrokerageAccount.delete({
        where: {
            id: id,
        },
    });
    return stock;
};
