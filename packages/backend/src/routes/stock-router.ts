import { Router } from "express";
import {
    create,
    show,
    update,
    remove,
    showByCompanyId,
} from "../controllers/stock-controller";

const router: Router = Router();

router.post("/stock", create);
router.get("/stock", show);
router.put("/stock/:id", update);
router.delete("/stock/:id", remove);

router.get("/stock/company/:companyId", showByCompanyId);

export default router;
