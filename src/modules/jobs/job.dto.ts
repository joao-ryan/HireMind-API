import { z } from "zod";

export const createJobSchema = z.object({
  title: z.string().min(2),
  level: z.enum(["junior", "mid", "senior"]),
  stack: z.array(z.string().min(1)),
  companyId: z.string()
});
