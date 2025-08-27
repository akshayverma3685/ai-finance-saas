import { Router } from "express";
import { chatCtrl, fraudCheckCtrl, recommendCtrl } from "../controllers/ai.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(auth);

router.post("/chat", chatCtrl);

router.post("/fraud-check", fraudCheckCtrl);

router.post("/recommend", recommendCtrl);

export default router;
