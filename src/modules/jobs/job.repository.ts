import { Job } from "./job.model";

export const jobRepository = {
  async create(data: any) {
    return Job.create(data);
  },

  async findAll() {
    return Job.find().populate("companyId", "name");
  },

  async findByCompany(companyId: string) {
    return Job.find({ companyId });
  }
};
