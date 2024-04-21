"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const stock_service_1 = require("../services/stock-service");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stock = yield (0, stock_service_1.createStock)({
        globalId: 1,
        price: 1,
        date: "",
        fullName: "",
        isinCode: 1,
        shortName: "",
        openingPrice: 1,
        appeal: 1,
        closePrice: 1,
        Company: {
            connect: {
                id: 1,
            },
        },
    });
    return res.status(201).json({
        message: "Succes Create Product",
        data: stock,
    });
});
exports.create = create;
