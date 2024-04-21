import { Router } from "express";
import { create, show, update, remove } from "../controllers/broker-controller";

const router: Router = Router();

router.post("/broker", create);
router.get("/broker", show);
router.put("/broker/:id", update);
router.delete("/broker/:id", remove);

export default router;
