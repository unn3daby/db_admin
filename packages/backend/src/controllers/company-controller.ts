import { Request, Response } from "express";
import {
    createCompany,
    showCompanies,
    updateCompany,
    deleteCompany,
} from "../services/company-service";

export const create = async (req: Request, res: Response) => {
    try {
        const { name, revenue, marketCap, netIncome } = req.body;
        const company = await createCompany({
            name,
            revenue: parseInt(revenue),
            marketCap: parseInt(marketCap),
            netIncome: parseInt(netIncome),
        });
        return res.status(201).json({
            message: "Компания успешно создана",
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

export const show = async (_: Request, res: Response) => {
    try {
        const companies = await showCompanies();
        return res.status(200).json({
            message: "Список компаний успешно сформирован",
            data: companies,
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
        const { name, revenue, marketCap, netIncome } = req.body;
        const company = await updateCompany(
            {
                name,
                revenue: parseInt(revenue),
                marketCap: parseInt(marketCap),
                netIncome: parseInt(netIncome),
            },
            id
        );
        return res.status(200).json({
            message: "Компания обновлена",
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
        const company = await deleteCompany(id);
        return res.status(200).json({
            message: "Компания удалена из базы",
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
