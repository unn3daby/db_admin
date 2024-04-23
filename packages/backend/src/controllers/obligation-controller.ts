import { Request, Response } from "express";
import {
    createObligation,
    showObligation,
    updateObligation,
    deleteObligation,
} from "../services/obligation-service";

export const create = async (req: Request, res: Response) => {
    try {
        const { price, date, openingPrice, closePrice, payerId } = req.body;
        const jsDate = new Date(date);
        const obligation = await createObligation({
            price,
            date: jsDate.toISOString(),
            openingPrice: parseInt(openingPrice),
            closePrice: parseInt(closePrice),
            Payer: {
                connect: { id: parseInt(payerId) },
            },
        });
        return res.status(201).json({
            message: "Облигация успешно создана",
            data: obligation,
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
        const obligations = await showObligation();
        return res.status(200).json({
            message: "Список облигаций успешно сформирован",
            data: obligations,
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
        const { price, date, openingPrice, closePrice, payerId } = req.body;
        const jsDate = new Date(date);
        const obligation = await updateObligation(
            {
                price,
                date: jsDate.toISOString(),
                openingPrice: parseInt(openingPrice),
                closePrice: parseInt(closePrice),
                Payer: {
                    connect: { id: parseInt(payerId) },
                },
            },
            id
        );
        return res.status(200).json({
            message: "Облигация обновлена",
            data: obligation,
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
        const obligation = await deleteObligation(id);
        return res.status(200).json({
            message: "Облигация удалена из базы",
            data: obligation,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};
