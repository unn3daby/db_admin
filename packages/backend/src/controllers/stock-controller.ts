import { Request, Response } from "express";
import {
    createStock,
    showStocks,
    updateStock,
    deleteStock,
    showStocksByCompanyId,
} from "../services/stock-service";

export const create = async (req: Request, res: Response) => {
    try {
        const {
            companyId,
            globalId,
            price,
            date,
            fullName,
            isinCode,
            shortName,
            openingPrice,
            appeal,
            closePrice,
        } = req.body;
        const jsDate = new Date(date);
        console.log(jsDate);
        const stock = await createStock({
            Company: { connect: { id: parseInt(companyId) } },
            globalId: parseInt(globalId),
            price: parseInt(price),
            date: jsDate.toISOString(),
            fullName,
            isinCode: parseInt(isinCode),
            shortName,
            openingPrice: parseInt(openingPrice),
            appeal: parseInt(appeal),
            closePrice: parseInt(closePrice),
        });
        return res.status(201).json({
            message: "Success Create Stock",
            data: stock,
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
        const stocks = await showStocks();
        return res.status(200).json({
            message: "Список акций успешно сформирован",
            data: stocks,
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
        const {
            companyId,
            globalId,
            price,
            date,
            fullName,
            isinCode,
            shortName,
            openingPrice,
            appeal,
            closePrice,
        } = req.body;
        const jsDate = new Date(date);
        const stock = await createStock({
            Company: { connect: { id: parseInt(companyId) } },
            globalId: parseInt(globalId),
            price: parseInt(price),
            date: jsDate.toISOString(),
            fullName,
            isinCode: parseInt(isinCode),
            shortName,
            openingPrice: parseInt(openingPrice),
            appeal: parseInt(appeal),
            closePrice: parseInt(closePrice),
        });
        return res.status(200).json({
            message: "Акция обновлена",
            data: stock,
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
        const stock = await deleteStock(id);
        return res.status(200).json({
            message: "Акция удалена из базы",
            data: stock,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};

export const showByCompanyId = async (req: Request, res: Response) => {
    try {
        const companyId = parseInt(req.params.companyId);
        const stocks = await showStocksByCompanyId(companyId);
        return res.status(200).json({
            message: "Список удачно сформирован",
            data: stocks,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};
