import { Router } from "express";
import {
    create,
    show,
    update,
    remove,
} from "../controllers/company-controller";

const router: Router = Router();

router.post("/company", create);
router.get("/company", show);
router.put("/company/:id", update);
router.delete("/company/:id", remove);

export default router;
