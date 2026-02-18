import { Response, NextFunction } from "express";
import { submissionService } from "./submission.service";
import { createSubmissionSchema } from "./submission.dto";
import { AuthRequest } from "../../shared/middleware/auth.middleware";

export const submissionController = {
  async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = createSubmissionSchema.parse(req.body);

      const submission = await submissionService.create(
        data,
        req.user!.id
      );

      res.status(201).json(submission);
    } catch (error) {
      next(error);
    }
  },

  async ranking(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const jobId = String(req.params.jobId);

      const ranking = await submissionService.getRanking(jobId);

      res.json(ranking);
    } catch (error) {
      next(error);
    }
  }
};
