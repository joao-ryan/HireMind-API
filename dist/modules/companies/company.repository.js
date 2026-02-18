"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRepository = void 0;
const storage_1 = require("../../shared/storage");
const crypto_1 = __importDefault(require("crypto"));
exports.companyRepository = {
    async create(data) {
        const newCompany = {
            _id: crypto_1.default.randomUUID(),
            name: data.name,
            description: data.description,
            recruiterId: data.recruiterId,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        storage_1.db.companies.push(newCompany);
        return newCompany;
    },
    async findByUserId(recruiterId) {
        return storage_1.db.companies.filter((company) => company.recruiterId === recruiterId);
    },
    async findById(id) {
        return storage_1.db.companies.find((company) => company._id === id) || null;
    }
};
