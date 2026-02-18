import { submissionRepository } from "./submission.repository";
import { AppError } from "../../shared/errors/AppError";

export const submissionService = {
  async create(data: any, candidateId: string) {
    // Prevent duplicate applications
    const existingSubmission = await submissionRepository.findByUserAndJob(
      candidateId,
      data.jobId
    );

    if (existingSubmission) {
      throw new AppError("Você já se candidatou para esta vaga", 400);
    }

    // Simulação de avaliação imediata
    const score = Math.min(100, data.code.length);

    const submission = await submissionRepository.create({
      ...data,
      candidateId,
      score,
      status: "done",
    });

    return submission;
  },

  async getRanking(jobId: string) {
    return submissionRepository.findByJobId(jobId);
  }
};
