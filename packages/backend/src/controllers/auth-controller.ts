import { Request, Response } from "express";
import { registerUser, loginUser, checkUser } from "../services/auth-service";
import bcrypt from "bcrypt";

export const auth = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await loginUser(username);
        if (!user) {
            return res
                .status(401)
                .json({ error: "Такого пользователя не существует" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Неверный пароль" });
        }
        return res.status(201).json({
            message: "Пользователь авторизован",
            data: user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const existingUser = await checkUser(username);

        if (existingUser) {
            return res
                .status(400)
                .json({ error: "Имя пользователя уже существует" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await registerUser(req.body, hashedPassword);

        return res.status(200).json({
            message: "Пользователь зарегистрирован",
            data: user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error",
            data: error,
        });
    }
};
