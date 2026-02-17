import { Router } from "express";
import { submissionController } from "./submission.controller";
import { authMiddleware } from "../../shared/middleware/auth.middleware";
import { roleMiddleware } from "../../shared/middleware/role.middleware";

const router = Router();

// candidato envia código
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["CANDIDATE"]),
  submissionController.create
);

// ranking por vaga
router.get(
  "/ranking/:jobId",
  authMiddleware,
  roleMiddleware(["RECRUITER", "ADMIN"]),
  submissionController.ranking
);

export default router;
