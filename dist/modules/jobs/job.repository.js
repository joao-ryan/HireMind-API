"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRepository = void 0;
const storage_1 = require("../../shared/storage");
const crypto_1 = __importDefault(require("crypto"));
exports.jobRepository = {
    async create(data) {
        const newJob = {
            _id: crypto_1.default.randomUUID(),
            title: data.title,
            level: data.level,
            stack: data.stack || [],
            companyId: data.companyId,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        storage_1.db.jobs.push(newJob);
        return newJob;
    },
    async findAll() {
        // Populate manual
        return storage_1.db.jobs.map((job) => {
            const company = storage_1.db.companies.find((c) => c._id === job.companyId);
            return {
                ...job,
                company: company ? { name: company.name } : null,
            };
        });
    },
    async findByCompanyId(companyId) {
        return storage_1.db.jobs.filter((job) => job.companyId === companyId);
    },
    async findById(id) {
        return storage_1.db.jobs.find((job) => job._id === id) || null;
    }
};
