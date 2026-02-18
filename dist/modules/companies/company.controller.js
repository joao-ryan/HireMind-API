"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyController = void 0;
const company_service_1 = require("./company.service");
const company_dto_1 = require("./company.dto");
exports.companyController = {
    async create(req, res, next) {
        try {
            const data = company_dto_1.createCompanySchema.parse(req.body);
            const company = await company_service_1.companyService.create(data, req.user.id);
            res.status(201).json(company);
        }
        catch (error) {
            next(error);
        }
    },
    async myCompanies(req, res, next) {
        try {
            const companies = await company_service_1.companyService.getMyCompanies(req.user.id);
            res.json(companies);
        }
        catch (error) {
            next(error);
        }
    },
    async getById(req, res, next) {
        try {
            const id = req.params.id;
            const company = await company_service_1.companyService.getById(id, req.user.id);
            res.json(company);
        }
        catch (error) {
            next(error);
        }
    }
};
