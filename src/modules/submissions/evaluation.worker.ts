import { Worker } from "bullmq";
import { Submission } from "./submission.model";
import { config } from "../../config/config";

export const evaluationWorker = new Worker(
  "evaluation",
  async (job) => {
    const { submissionId, code } = job.data;

    // simulação de avaliação
    const score = Math.min(100, code.length);

    await Submission.findByIdAndUpdate(submissionId, {
      score,
      status: "done",
    });
  },
  {
    connection: {
      host: config.redis.host,
      port: config.redis.port,
      maxRetriesPerRequest: null
    },
  }
);

evaluationWorker.on("error", (err) => {
  // Apenas loga o erro para não derrubar o processo
});
