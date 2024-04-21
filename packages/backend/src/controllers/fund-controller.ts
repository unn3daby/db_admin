import { Request, Response } from "express";
import {
    createFund,
    showFund,
    updateFund,
    deleteFund,
} from "../services/fund-service";

export const create = async (req: Request, res: Response) => {
    try {
        const { name, fullname, capitalization, shortname } = req.body;
        const fund = await createFund({
            name,
            fullname,
            capitalization,
            shortname,
        });
        return res.status(201).json({
            message: "Фонд успешно создан",
            data: fund,
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
        const funds = await showFund();
        return res.status(200).json({
            message: "Список Фондов успешно сформирован",
            data: funds,
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
        const { name, fullname, capitalization, shortname } = req.body;
        const company = await updateFund(
            {
                name,
                fullname,
                capitalization,
                shortname,
            },
            id
        );
        return res.status(200).json({
            message: "Фонд обновлен",
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
        const company = await deleteFund(id);
        return res.status(200).json({
            message: "Фонд удален из базы",
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
