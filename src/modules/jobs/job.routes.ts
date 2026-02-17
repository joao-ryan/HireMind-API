import { Router } from "express";
import { jobController } from "./job.controller";
import { authMiddleware } from "../../shared/middleware/auth.middleware";
import { roleMiddleware } from "../../shared/middleware/role.middleware";

const router = Router();

// recruiter cria vaga
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["RECRUITER"]),
  jobController.create
);

// candidato pode ver todas
router.get("/", jobController.listAll);

// listar por empresa
router.get("/company/:companyId", jobController.listByCompany);

export default router;
