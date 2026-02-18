"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobService = void 0;
const job_repository_1 = require("./job.repository");
const company_repository_1 = require("../companies/company.repository");
const AppError_1 = require("../../shared/errors/AppError");
exports.jobService = {
    async create(data, recruiterId) {
        const company = await company_repository_1.companyRepository.findById(data.companyId);
        if (!company) {
            throw new AppError_1.AppError("Empresa não encontrada", 404);
        }
        if (company.recruiterId !== recruiterId) {
            throw new AppError_1.AppError("Você não pode criar vagas para essa empresa", 403);
        }
        const job = await job_repository_1.jobRepository.create(data);
        return job;
    },
    async listAll() {
        return job_repository_1.jobRepository.findAll();
    },
    async listByCompany(companyId) {
        return job_repository_1.jobRepository.findByCompanyId(companyId);
    }
};
