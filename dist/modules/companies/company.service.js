"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyService = void 0;
const company_repository_1 = require("./company.repository");
const AppError_1 = require("../../shared/errors/AppError");
exports.companyService = {
    async create(data, recruiterId) {
        const company = await company_repository_1.companyRepository.create({
            ...data,
            recruiterId
        });
        return company;
    },
    async getMyCompanies(recruiterId) {
        return company_repository_1.companyRepository.findByUserId(recruiterId);
    },
    async getById(id, recruiterId) {
        const company = await company_repository_1.companyRepository.findById(id);
        if (!company) {
            throw new AppError_1.AppError("Empresa não encontrada", 404);
        }
        if (company.recruiterId !== recruiterId) {
            throw new AppError_1.AppError("Sem permissão para acessar essa empresa", 403);
        }
        return company;
    }
};
