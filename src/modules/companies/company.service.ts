import { companyRepository } from "./company.repository";
import { AppError } from "../../shared/errors/AppError";

export const companyService = {
  async create(data: any, recruiterId: string) {
    const company = await companyRepository.create({
      ...data,
      recruiterId
    });

    return company;
  },

  async getMyCompanies(recruiterId: string) {
    return companyRepository.findByRecruiter(recruiterId);
  },

  async getById(id: string, recruiterId: string) {
    const company = await companyRepository.findById(id);

    if (!company) {
      throw new AppError("Empresa não encontrada", 404);
    }

    if (company.recruiterId.toString() !== recruiterId) {
      throw new AppError("Sem permissão para acessar essa empresa", 403);
    }

    return company;
  }
};
