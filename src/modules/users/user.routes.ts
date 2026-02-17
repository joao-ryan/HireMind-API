import { Router } from "express";
import { userController } from "./user.controller";
import { authMiddleware } from "../../shared/middleware/auth.middleware";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.get("/me", authMiddleware, userController.me);

export default router;
