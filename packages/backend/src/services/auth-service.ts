import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const registerUser = async (
    { username, role }: Prisma.UserCreateInput,
    hashedPassword: string
) => {
    const user = await prisma.user.create({
        data: {
            username,
            password: hashedPassword,
            role,
        },
    });
    return user;
};

export const loginUser = async (username: string) => {
    const user = await prisma.user.findUnique({ where: { username } });
    return user;
};

export const checkUser = async (username: string) => {
    const existingUser = await prisma.user.findUnique({ where: { username } });
    return existingUser;
};
