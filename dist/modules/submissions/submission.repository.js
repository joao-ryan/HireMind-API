"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionRepository = void 0;
const storage_1 = require("../../shared/storage");
const crypto_1 = __importDefault(require("crypto"));
exports.submissionRepository = {
    async create(data) {
        const newSubmission = {
            _id: crypto_1.default.randomUUID(),
            candidateId: data.candidateId,
            jobId: data.jobId,
            code: data.code,
            score: data.score,
            status: data.status || "pending",
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        storage_1.db.submissions.push(newSubmission);
        return newSubmission;
    },
    async update(id, data) {
        const index = storage_1.db.submissions.findIndex((s) => s._id === id);
        if (index !== -1) {
            storage_1.db.submissions[index] = {
                ...storage_1.db.submissions[index],
                ...data,
                updatedAt: new Date(),
            };
            return storage_1.db.submissions[index];
        }
        return null;
    },
    async findByJobId(jobId) {
        return storage_1.db.submissions
            .filter((s) => s.jobId === jobId)
            .sort((a, b) => (b.score || 0) - (a.score || 0));
    },
    async findByUserAndJob(candidateId, jobId) {
        return storage_1.db.submissions.find((s) => s.candidateId === candidateId && s.jobId === jobId) || null;
    },
    async findById(id) {
        return storage_1.db.submissions.find((s) => s._id === id) || null;
    }
};
