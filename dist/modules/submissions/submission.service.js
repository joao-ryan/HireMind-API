"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionService = void 0;
const submission_repository_1 = require("./submission.repository");
const AppError_1 = require("../../shared/errors/AppError");
exports.submissionService = {
    async create(data, candidateId) {
        // Prevent duplicate applications
        const existingSubmission = await submission_repository_1.submissionRepository.findByUserAndJob(candidateId, data.jobId);
        if (existingSubmission) {
            throw new AppError_1.AppError("Você já se candidatou para esta vaga", 400);
        }
        // Simulação de avaliação imediata
        const score = Math.min(100, data.code.length);
        const submission = await submission_repository_1.submissionRepository.create({
            ...data,
            candidateId,
            score,
            status: "done",
        });
        return submission;
    },
    async getRanking(jobId) {
        return submission_repository_1.submissionRepository.findByJobId(jobId);
    }
};
