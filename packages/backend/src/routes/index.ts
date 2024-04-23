import { Router } from "express";
import StockRouter from "./stock-router";
import CompanyRouter from "./company-router";
import BrokerRouter from "./broker-router";
import FundRouter from "./fund-router";
import PhysiacalPersonRouter from "./physicalPerson-router";
import ObligationRouter from "./obligation-router";
import PayerRouter from "./payer-router";
import FundAccountRouter from "./fundAccount-router";
import BrokerBrokerageAccount from "./brokerBrokerageAccount-router";
import PhysicalBrokerageAccount from "./physicalBrokerageAccount-router";
import AuthRoutes from "./auth-routes";

const router: Router = Router();

router.use("/api/", StockRouter);
router.use("/api/", CompanyRouter);
router.use("/api/", BrokerRouter);
router.use("/api/", FundRouter);
router.use("/api/", PhysiacalPersonRouter);
router.use("/api/", ObligationRouter);
router.use("/api/", PayerRouter);
router.use("/api/", FundAccountRouter);
router.use("/api/", BrokerBrokerageAccount);
router.use("/api/", PhysicalBrokerageAccount);
router.use("/api/", AuthRoutes);

export default router;
