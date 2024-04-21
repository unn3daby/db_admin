import { Request, Response } from "express";
import {
    createPhysicalPerson,
    showPhysicalPerson,
    updatePhysicalPerson,
    deletePhysicalPerson,
} from "../services/physicalPerson-service";

export const create = async (req: Request, res: Response) => {
    try {
        const { name, surname, inn } = req.body;
        const physicalPerson = await createPhysicalPerson({
            name,
            surname,
            inn,
        });
        return res.status(201).json({
            message: "Элемент добавлен в базу",
            data: physicalPerson,
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
        const physicalPersons = await showPhysicalPerson();
        return res.status(200).json({
            message: "Список успешно сформирован",
            data: physicalPersons,
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
        const { name, surname, inn } = req.body;
        const physicalPerson = await updatePhysicalPerson(
            {
                name,
                surname,
                inn,
            },
            id
        );
        return res.status(200).json({
            message: "Элемент обновлен",
            data: physicalPerson,
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
        const company = await deletePhysicalPerson(id);
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
