import { Router } from "express";
import {
    create,
    show,
    update,
    remove,
} from "../controllers/physicalBrokerageAccount-controller";

const router: Router = Router();

router.post("/physicalBrokerageAccount", create);
router.get("/physicalBrokerageAccount", show);
router.put("/physicalBrokerageAccount/:id", update);
router.delete("/physicalBrokerageAccount/:id", remove);

export default router;
