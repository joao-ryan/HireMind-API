import { z } from "zod";

export const createSubmissionSchema = z.object({
  jobId: z.string(),
  code: z.string().min(10)
});
