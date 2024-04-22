import { Router } from "express";
import {
    create,
    show,
    update,
    remove,
} from "../controllers/obligation-controller";

const router: Router = Router();

router.post("/obligation", create);
router.get("/obligation", show);
router.put("/obligation/:id", update);
router.delete("/obligation/:id", remove);

export default router;
