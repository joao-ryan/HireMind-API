import { Request, Response } from "express";
import { InMemoryCandidateRepository } from "../repositories/inMemory/InMemoryCandidateRepository";
import { CreateCandidateService } from "../services/CreateCandidateService";

const repo = new InMemoryCandidateRepository();
const service = new CreateCandidateService(repo);

export class CandidateController {
  async create(req: Request, res: Response) {
    try {
      const candidate = await service.execute(req.body);
      return res.status(201).json(candidate);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  async list(req: Request, res: Response) {
    const candidates = await repo.findAll();
    return res.json(candidates);
  }
}
