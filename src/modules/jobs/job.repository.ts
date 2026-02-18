import { IJob } from "./job.model";
import { db } from "../../shared/storage";
import crypto from "crypto";

export const jobRepository = {
  async create(data: Partial<IJob>) {
    const newJob: IJob = {
      _id: crypto.randomUUID(),
      title: data.title!,
      level: data.level!,
      stack: data.stack || [],
      companyId: data.companyId!,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.jobs.push(newJob);
    return newJob;
  },

  async findAll() {
    // Populate manual
    return db.jobs.map((job) => {
      const company = db.companies.find((c) => c._id === job.companyId);
      return {
        ...job,
        company: company ? { name: company.name } : null,
      };
    });
  },

  async findByCompanyId(companyId: string) {
    return db.jobs.filter((job) => job.companyId === companyId);
  },

  async findById(id: string) {
    return db.jobs.find((job) => job._id === id) || null;
  }
};
