import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";
import userRoutes from "./modules/users/user.routes";
import companyRoutes from "./modules/companies/company.routes";
import jobRoutes from "./modules/jobs/job.routes";
import submissionRoutes from "./modules/submissions/submission.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/docs/swagger";
import { errorMiddleware } from "./shared/middleware/error.middleware";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/submissions", submissionRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "HireMind API rodando 🚀" });
});
app.use(errorMiddleware);

export default app;
