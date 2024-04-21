import { Router } from "express";
import StockRouter from "./stock-router";
import CompanyRouter from "./company-router";
import BrokerRouter from "./broker-router";
import FundRouter from "./fund-router";
import PhysiacalPersonRouter from "./physicalPerson-router";
const router: Router = Router();

router.use("/api/", StockRouter);
router.use("/api/", CompanyRouter);
router.use("/api/", BrokerRouter);
router.use("/api/", FundRouter);
router.use("/api/", PhysiacalPersonRouter);

export default router;
