import { jobRepository } from "./job.repository";
import { companyRepository } from "../companies/company.repository";
import { AppError } from "../../shared/errors/AppError";

export const jobService = {
  async create(data: any, recruiterId: string) {
    const company = await companyRepository.findById(data.companyId);

    if (!company) {
      throw new AppError("Empresa não encontrada", 404);
    }

    if (company.recruiterId.toString() !== recruiterId) {
      throw new AppError("Você não pode criar vagas para essa empresa", 403);
    }

    const job = await jobRepository.create(data);

    return job;
  },

  async listAll() {
    return jobRepository.findAll();
  },

  async listByCompany(companyId: string) {
    return jobRepository.findByCompany(companyId);
  }
};
