import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createPhysicalPerson = async (
    data: Prisma.PhysicalPersonCreateInput
) => {
    const stock = await prisma.physicalPerson.create({
        data: data,
    });
    return stock;
};

export const showPhysicalPerson = async () => {
    const stocks = await prisma.physicalPerson.findMany({
        orderBy: {
            id: Prisma.SortOrder.desc,
        },
    });
    return stocks;
};

export const updatePhysicalPerson = async (
    data: Prisma.PhysicalPersonUpdateInput,
    id: number
) => {
    const stock = await prisma.physicalPerson.update({
        where: {
            id: id,
        },
        data,
    });
    return stock;
};

export const deletePhysicalPerson = async (id: number) => {
    const stock = await prisma.physicalPerson.delete({
        where: {
            id: id,
        },
    });
    return stock;
};
