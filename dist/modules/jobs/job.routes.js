"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const job_controller_1 = require("./job.controller");
const auth_middleware_1 = require("../../shared/middleware/auth.middleware");
const role_middleware_1 = require("../../shared/middleware/role.middleware");
const router = (0, express_1.Router)();
// recruiter cria vaga
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["RECRUITER"]), job_controller_1.jobController.create);
// candidato pode ver todas
router.get("/", job_controller_1.jobController.listAll);
// listar por empresa
router.get("/company/:companyId", job_controller_1.jobController.listByCompany);
exports.default = router;
