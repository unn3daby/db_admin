import { Router } from "express";
import {
    create,
    show,
    update,
    remove,
} from "../controllers/fundAccount-controller";

const router: Router = Router();

router.post("/fundAccount", create);
router.get("/fundAccount", show);
router.put("/fundAccount/:id", update);
router.delete("/fundAccount/:id", remove);

export default router;
