import { Response, NextFunction } from "express";
import { companyService } from "./company.service";
import { createCompanySchema } from "./company.dto";
import { AuthRequest } from "../../shared/middleware/auth.middleware";

export const companyController = {
  async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = createCompanySchema.parse(req.body);

      const company = await companyService.create(
        data,
        req.user!.id
      );

      res.status(201).json(company);
    } catch (error) {
      next(error);
    }
  },

  async myCompanies(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const companies = await companyService.getMyCompanies(req.user!.id);

      res.json(companies);
    } catch (error) {
      next(error);
    }
  },

  async getById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);

      const company = await companyService.getById(
        id,
        req.user!.id
      );

      res.json(company);
    } catch (error) {
      next(error);
    }
  }
};
