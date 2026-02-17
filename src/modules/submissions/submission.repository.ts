import { Submission } from "./submission.model";

export const submissionRepository = {
  async create(data: any) {
    return Submission.create(data);
  },

  async updateStatus(id: string, data: any) {
    return Submission.findByIdAndUpdate(id, data, { new: true });
  },

  async findByJob(jobId: string) {
    return Submission.find({ jobId }).sort({ score: -1 });
  }
};
