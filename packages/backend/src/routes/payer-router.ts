import { Router } from "express";
import { create, show, update, remove } from "../controllers/payer-controller";

const router: Router = Router();

router.post("/payer", create);
router.get("/payer", show);
router.put("/payer/:id", update);
router.delete("/payer/:id", remove);

export default router;
