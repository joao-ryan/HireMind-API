"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CandidateController_1 = require("../controllers/CandidateController");
const router = (0, express_1.Router)();
const controller = new CandidateController_1.CandidateController();
router.post("/", controller.create);
router.get("/", controller.list);
exports.default = router;
