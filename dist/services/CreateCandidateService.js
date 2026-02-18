"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCandidateService = void 0;
class CreateCandidateService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(data) {
        if (!data.name) {
            throw new Error("Name is required");
        }
        return this.repo.create(data);
    }
}
exports.CreateCandidateService = CreateCandidateService;
