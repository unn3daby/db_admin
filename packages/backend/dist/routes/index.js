"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stock_router_1 = __importDefault(require("./stock-router"));
const router = (0, express_1.Router)();
router.use("/api/", stock_router_1.default);
exports.default = router;
