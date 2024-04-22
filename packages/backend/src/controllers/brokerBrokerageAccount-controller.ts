import { Request, Response } from "express";
import {
    createBrokerBrokerageAccount,
    showBrokerBrokerageAccount,
    updateBrokerBrokerageAccount,
    deleteBrokerBrokerageAccount,
} from "../services/brokerBrokerageAccount-service";

export const create = async (req: Request, res: Response) => {
    try {
        const { capital, brokerId } = req.body;
        const brokerBrokerageAccount = await createBrokerBrokerageAccount({
            capital,
            Broker: {
                connect: { id: brokerId },
            },
        });
        return res.status(201).json({
            message: "Аккаунт брокера добавлен в базу",
            data: brokerBrokerageAccount,
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
        const brokerBrokerageAccounts = await showBrokerBrokerageAccount();
        return res.status(200).json({
            message: "Список брокеров успешно сформирован",
            data: brokerBrokerageAccounts,
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
        const { capital, brokerId } = req.body;
        const brokerBrokerageAccount = await updateBrokerBrokerageAccount(
            {
                capital,
                Broker: {
                    connect: { id: brokerId },
                },
            },
            id
        );
        return res.status(200).json({
            message: "Аккаунт брокера обновлен",
            data: brokerBrokerageAccount,
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
        const brokerBrokerageAccount = await deleteBrokerBrokerageAccount(id);
        return res.status(200).json({
            message: "Аккаунт брокера удален из базы",
            data: brokerBrokerageAccount,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};
