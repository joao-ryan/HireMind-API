import { Router } from "express";
import candidateRoutes from "./candidate.routes";

const routes = Router();

routes.get("/health", (req, res) => {
  res.json({ status: "ok", message: "HireMind API running" });
});

routes.use("/candidates", candidateRoutes);

export default routes;
