import { Request, Response } from "express";
import {
    createPayer,
    showPayer,
    updatePayer,
    deletePayer,
} from "../services/payer-service";

export const create = async (req: Request, res: Response) => {
    try {
        const { name, status } = req.body;
        const payer = await createPayer({
            name,
            status,
        });
        return res.status(201).json({
            message: "Элемент добавлен в базу",
            data: payer,
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
        const payers = await showPayer();
        return res.status(200).json({
            message: "Список успешно сформирован",
            data: payers,
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
        const { name, status } = req.body;
        const payer = await updatePayer(
            {
                name,
                status,
            },
            id
        );
        return res.status(200).json({
            message: "Элемент обновлен",
            data: payer,
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
        const payer = await deletePayer(id);
        return res.status(200).json({
            message: "Элемент удален из базы",
            data: payer,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};
