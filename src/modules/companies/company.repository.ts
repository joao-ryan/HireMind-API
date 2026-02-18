import { ICompany } from "./company.model";
import { db } from "../../shared/storage";
import crypto from "crypto";

export const companyRepository = {
  async create(data: Partial<ICompany>) {
    const newCompany: ICompany = {
      _id: crypto.randomUUID(),
      name: data.name!,
      description: data.description,
      recruiterId: data.recruiterId!,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.companies.push(newCompany);
    return newCompany;
  },

  async findByUserId(recruiterId: string) {
    return db.companies.filter((company) => company.recruiterId === recruiterId);
  },

  async findById(id: string) {
    return db.companies.find((company) => company._id === id) || null;
  }
};
