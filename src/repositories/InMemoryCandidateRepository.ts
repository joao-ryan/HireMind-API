import { CandidateRepository } from "../CandidateRepository";
import { randomUUID } from "crypto";

export class InMemoryCandidateRepository implements CandidateRepository {
  private candidates: any[] = [];

  async create(data: any) {
    const candidate = { id: randomUUID(), ...data };
    this.candidates.push(candidate);
    return candidate;
  }

  async findAll() {
    return this.candidates;
  }

  async findById(id: string) {
    return this.candidates.find(c => c.id === id) || null;
  }
}
