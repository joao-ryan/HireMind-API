"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryCandidateRepository = void 0;
const crypto_1 = require("crypto");
class InMemoryCandidateRepository {
    constructor() {
        this.candidates = [];
    }
    async create(data) {
        const candidate = { id: (0, crypto_1.randomUUID)(), ...data };
        this.candidates.push(candidate);
        return candidate;
    }
    async findAll() {
        return this.candidates;
    }
    async findById(id) {
        return this.candidates.find(c => c.id === id) || null;
    }
}
exports.InMemoryCandidateRepository = InMemoryCandidateRepository;
