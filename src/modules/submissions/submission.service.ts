import { submissionRepository } from "./submission.repository";
import { evaluationQueue } from "./evaluation.queue";

export const submissionService = {
  async create(data: any, candidateId: string) {
    const submission = await submissionRepository.create({
      ...data,
      candidateId,
      status: "pending"
    });

    await evaluationQueue.add("evaluate", {
      submissionId: submission._id,
      code: submission.code
    });

    return submission;
  },

  async getRanking(jobId: string) {
    return submissionRepository.findByJob(jobId);
  }
};
