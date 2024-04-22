import { Request, Response } from "express";
import {
    createFundAccount,
    showFundAccount,
    updateFundAccount,
    deleteFundAccount,
} from "../services/fundAccount-service";

export const create = async (req: Request, res: Response) => {
    try {
        const { fundStockId, capital, fundId } = req.body;
        const fundAccount = await createFundAccount({
            fundStockId,
            capital,
            Fund: {
                connect: { id: fundId },
            },
        });
        return res.status(201).json({
            message: "Аккаунт фонда добавлен в базу",
            data: fundAccount,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};

export const show = async (_: Request, res: Response) => {
    try {
        const fundAccounts = await showFundAccount();
        return res.status(200).json({
            message: "Список аккаунтов фонда успешно сформирован",
            data: fundAccounts,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { fundStockId, capital, fundId } = req.body;
        const fundAccount = await updateFundAccount(
            {
                fundStockId,
                capital,
                Fund: {
                    connect: { id: fundId },
                },
            },
            id
        );
        return res.status(200).json({
            message: "Аккаунт фонда обновлен",
            data: fundAccount,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};

export const remove = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const fundAccount = await deleteFundAccount(id);
        return res.status(200).json({
            message: "Аккаунт фонда удален из базы",
            data: fundAccount,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};
