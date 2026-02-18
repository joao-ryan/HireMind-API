export interface CandidateRepository {
  create(data: any): Promise<any>;
  findAll(): Promise<any[]>;
  findById(id: string): Promise<any | null>;
}
