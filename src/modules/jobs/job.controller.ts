import { Request, Response, NextFunction } from "express";
import { jobService } from "./job.service";
import { createJobSchema } from "./job.dto";
import { AuthRequest } from "../../shared/middleware/auth.middleware";

export const jobController = {
  async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = createJobSchema.parse(req.body);

      const job = await jobService.create(data, req.user!.id);

      res.status(201).json(job);
    } catch (error) {
      next(error);
    }
  },

  async listAll(req: Request, res: Response, next: NextFunction) {
    try {
      const jobs = await jobService.listAll();
      res.json(jobs);
    } catch (error) {
      next(error);
    }
  },

  async listByCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const jobs = await jobService.listByCompany(req.params.companyId);
      res.json(jobs);
    } catch (error) {
      next(error);
    }
  }
};
