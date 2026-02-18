import { ISubmission } from "./submission.model";
import { db } from "../../shared/storage";
import crypto from "crypto";

export const submissionRepository = {
  async create(data: Partial<ISubmission>) {
    const newSubmission: ISubmission = {
      _id: crypto.randomUUID(),
      candidateId: data.candidateId!,
      jobId: data.jobId!,
      code: data.code!,
      score: data.score,
      status: data.status || "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.submissions.push(newSubmission);
    return newSubmission;
  },

  async update(id: string, data: Partial<ISubmission>) {
    const index = db.submissions.findIndex((s) => s._id === id);
    if (index !== -1) {
      db.submissions[index] = {
        ...db.submissions[index],
        ...data,
        updatedAt: new Date(),
      };
      return db.submissions[index];
    }
    return null;
  },

  async findByJobId(jobId: string) {
    return db.submissions
      .filter((s) => s.jobId === jobId)
      .sort((a, b) => (b.score || 0) - (a.score || 0));
  },

  async findByUserAndJob(candidateId: string, jobId: string) {
    return db.submissions.find(
      (s) => s.candidateId === candidateId && s.jobId === jobId
    ) || null;
  },

  async findById(id: string) {
    return db.submissions.find((s) => s._id === id) || null;
  }
};
