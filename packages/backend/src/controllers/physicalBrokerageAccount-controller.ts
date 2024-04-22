import { Request, Response } from "express";
import {
    createPhysicalBrokerageAccount,
    showPhysicalBrokerageAccount,
    updatePhysicalBrokerageAccount,
    deletePhysicalBrokerageAccount,
} from "../services/physicalBrokerageAccount-service";

export const create = async (req: Request, res: Response) => {
    try {
        const { capital, brokerId, physicalPersonId } = req.body;
        const physicalBrokerageAccount = await createPhysicalBrokerageAccount({
            capital,
            Broker: {
                connect: { id: brokerId },
            },
            PhysicalPerson: {
                connect: { id: physicalPersonId },
            },
        });
        return res.status(201).json({
            message: "Элемент добавлен в базу",
            data: physicalBrokerageAccount,
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
        const physicalBrokerageAccounts = await showPhysicalBrokerageAccount();
        return res.status(200).json({
            message: "Список успешно сформирован",
            data: physicalBrokerageAccounts,
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
        const { capital, brokerId, physicalPersonId } = req.body;
        const physicalBrokerageAccount = await updatePhysicalBrokerageAccount(
            {
                capital,
                Broker: {
                    connect: { id: brokerId },
                },
                PhysicalPerson: {
                    connect: { id: physicalPersonId },
                },
            },
            id
        );
        return res.status(200).json({
            message: "Элемент обновлен",
            data: physicalBrokerageAccount,
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
        const company = await deletePhysicalBrokerageAccount(id);
        return res.status(200).json({
            message: "Элемент удален из базы",
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
