"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobController = void 0;
const job_service_1 = require("./job.service");
const job_dto_1 = require("./job.dto");
exports.jobController = {
    async create(req, res, next) {
        try {
            const data = job_dto_1.createJobSchema.parse(req.body);
            const job = await job_service_1.jobService.create(data, req.user.id);
            res.status(201).json(job);
        }
        catch (error) {
            next(error);
        }
    },
    async listAll(req, res, next) {
        try {
            const jobs = await job_service_1.jobService.listAll();
            res.json(jobs);
        }
        catch (error) {
            next(error);
        }
    },
    async listByCompany(req, res, next) {
        try {
            const companyId = req.params.companyId;
            const jobs = await job_service_1.jobService.listByCompany(companyId);
            res.json(jobs);
        }
        catch (error) {
            next(error);
        }
    }
};
