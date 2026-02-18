"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateController = void 0;
const InMemoryCandidateRepository_1 = require("../repositories/inMemory/InMemoryCandidateRepository");
const CreateCandidateService_1 = require("../services/CreateCandidateService");
const repo = new InMemoryCandidateRepository_1.InMemoryCandidateRepository();
const service = new CreateCandidateService_1.CreateCandidateService(repo);
class CandidateController {
    async create(req, res) {
        try {
            const candidate = await service.execute(req.body);
            return res.status(201).json(candidate);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async list(req, res) {
        const candidates = await repo.findAll();
        return res.json(candidates);
    }
}
exports.CandidateController = CandidateController;
