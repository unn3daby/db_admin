import { Router } from "express";
import { register, auth } from "../controllers/auth-controller";

const router: Router = Router();

router.post("/reg", register);
router.post("/auth", auth);

export default router;
