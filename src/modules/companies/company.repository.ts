import { Company } from "./company.model";

export const companyRepository = {
  async create(data: any) {
    return Company.create(data);
  },

  async findByRecruiter(recruiterId: string) {
    return Company.find({ recruiterId });
  },

  async findById(id: string) {
    return Company.findById(id);
  }
};
