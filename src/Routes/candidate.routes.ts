import { Router } from "express";
import { CandidateController } from "../controllers/CandidateController";

const router = Router();
const controller = new CandidateController();

router.post("/", controller.create);
router.get("/", controller.list);

export default router;
