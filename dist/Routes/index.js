"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candidate_routes_1 = __importDefault(require("./candidate.routes"));
const routes = (0, express_1.Router)();
routes.get("/health", (req, res) => {
    res.json({ status: "ok", message: "HireMind API running" });
});
routes.use("/candidates", candidate_routes_1.default);
exports.default = routes;
