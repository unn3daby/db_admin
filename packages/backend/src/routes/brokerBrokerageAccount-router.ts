import { Router } from "express";
import {
    create,
    show,
    update,
    remove,
} from "../controllers/brokerBrokerageAccount-controller";

const router: Router = Router();

router.post("/brokerBrokerageAccount", create);
router.get("/brokerBrokerageAccount", show);
router.put("/brokerBrokerageAccount/:id", update);
router.delete("/brokerBrokerageAccount/:id", remove);

export default router;
