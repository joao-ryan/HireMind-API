import { CandidateRepository } from "../repositories/CandidateRepository";

export class CreateCandidateService {
  constructor(private repo: CandidateRepository) {}

  async execute(data: any) {
    if (!data.name) {
      throw new Error("Name is required");
    }

    return this.repo.create(data);
  }
}
