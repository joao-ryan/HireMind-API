import { Worker } from "bullmq";
import { Submission } from "./submission.model";

export const evaluationWorker = new Worker(
  "evaluation",
  async job => {
    const { submissionId, code } = job.data;

    // simulação de avaliação
    const score = Math.min(100, code.length);

    await Submission.findByIdAndUpdate(submissionId, {
      score,
      status: "done"
    });
  },
  {
    connection: {
      host: "localhost",
      port: 6379
    }
  }
);
