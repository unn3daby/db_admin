import { Request, Response } from "express";
import {
    createBroker,
    showBroker,
    updateBroker,
    deleteBroker,
} from "../services/broker-service";

export const create = async (req: Request, res: Response) => {
    try {
        const { name, paymentAccount } = req.body;
        const broker = await createBroker({
            name,
            paymentAccount: parseInt(paymentAccount),
        });
        return res.status(201).json({
            message: "Брокер успешно создан",
            data: broker,
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
        const brokers = await showBroker();
        return res.status(200).json({
            message: "Список брокеров успешно сформирован",
            data: brokers,
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
        const { name, paymentAccount } = req.body;
        const company = await updateBroker(
            {
                name,
                paymentAccount: parseInt(paymentAccount),
            },
            id
        );
        return res.status(200).json({
            message: "Брокер обновлен",
            data: company,
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
        const company = await deleteBroker(id);
        return res.status(200).json({
            message: "Брокер удален из базы",
            data: company,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};
