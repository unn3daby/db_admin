import { Router } from "express";
import { create, show, update, remove } from "../controllers/physicalPerson-controller";

const router: Router = Router();

router.post("/physicalPerson", create);
router.get("/physicalPerson", show);
router.put("/physicalPerson/:id", update);
router.delete("/physicalPerson/:id", remove);

export default router;
