"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        version: "1.0.0",
        title: "Stock API",
        description: "API для управления акциями",
    },
    servers: [
        {
            url: "http://localhost:8001",
        },
    ],
    paths: {
        "/stock": {
            post: {
                summary: "Создать новую акцию",
                description: "Этот эндпоинт позволяет создать новую акцию.",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    // Здесь описывайте структуру тела запроса для создания акции
                                    // Пример:
                                    companyId: {
                                        type: "integer",
                                    },
                                    globalId: {
                                        type: "integer",
                                    },
                                    price: {
                                        type: "number",
                                    },
                                    // Добавьте другие поля, если необходимо
                                },
                                required: ["companyId", "globalId", "price"],
                            },
                        },
                    },
                },
                responses: {
                    "201": {
                        description: "Акция успешно создана",
                    },
                    "400": {
                        description: "Неправильный запрос",
                    },
                    "500": {
                        description: "Внутренняя ошибка сервера",
                    },
                },
            },
            get: {
                summary: "Получить все акции",
                description: "Этот эндпоинт позволяет получить список всех акций.",
                responses: {
                    "200": {
                        description: "Успешный запрос",
                        content: {
                            "application/json": {
                                example: {
                                    message: "Succes get Product",
                                },
                            },
                        },
                    },
                    "500": {
                        description: "Внутренняя ошибка сервера",
                    },
                },
            },
        },
    },
};
exports.default = swaggerDocument;
