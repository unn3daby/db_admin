"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stock_controller_1 = require("../controllers/stock-controller");
const router = (0, express_1.Router)();
router.post("/stock", stock_controller_1.create);
router.get("/stock", (_, res) => res.status(201).json({
    message: "Succes get Product",
}));
exports.default = router;
