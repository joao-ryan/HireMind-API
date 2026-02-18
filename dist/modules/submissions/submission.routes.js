"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const submission_controller_1 = require("./submission.controller");
const auth_middleware_1 = require("../../shared/middleware/auth.middleware");
const role_middleware_1 = require("../../shared/middleware/role.middleware");
const router = (0, express_1.Router)();
// candidato envia código
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["CANDIDATE"]), submission_controller_1.submissionController.create);
// ranking por vaga
router.get("/ranking/:jobId", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["RECRUITER", "ADMIN"]), submission_controller_1.submissionController.ranking);
exports.default = router;
