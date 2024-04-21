import { Router } from "express";
import { create, show, update, remove } from "../controllers/fund-controller";

const router: Router = Router();

router.post("/fund", create);
router.get("/fund", show);
router.put("/fund/:id", update);
router.delete("/fund/:id", remove);

export default router;
