import { Router } from "express";
import { companyController } from "./company.controller";
import { authMiddleware } from "../../shared/middleware/auth.middleware";
import { roleMiddleware } from "../../shared/middleware/role.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["RECRUITER"]),
  companyController.create
);

router.get(
  "/my",
  authMiddleware,
  roleMiddleware(["RECRUITER"]),
  companyController.myCompanies
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware(["RECRUITER"]),
  companyController.getById
);

export default router;
