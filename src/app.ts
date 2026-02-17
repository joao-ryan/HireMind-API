import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";

import { errorMiddleware } from "./shared/middleware/error.middleware";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// 🔎 Rota de teste (health check)
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "HireMind API rodando 🚀" });
});

// ❌ middleware de erro sempre por último
app.use(errorMiddleware);

export { app };
