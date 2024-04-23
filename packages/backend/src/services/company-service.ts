import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const createCompany = async (data: Prisma.CompanyCreateInput) => {
    const stock = await prisma.company.create({
        data: data,
    });
    return stock;
};

export const showCompanies = async () => {
    const stocks = await prisma.company.findMany({
        orderBy: {
            id: Prisma.SortOrder.desc,
        },
    });
    return stocks;
};

export const updateCompany = async (
    data: Prisma.CompanyUpdateInput,
    id: number
) => {
    const stock = await prisma.company.update({
        where: {
            id: id,
        },
        data,
    });
    return stock;
};

export const deleteCompany = async (id: number) => {
    const stock = await prisma.company.delete({
        where: {
            id: id,
        },
    });
    return stock;
};
