export interface IJob {
  _id: string;
  title: string;
  level: "junior" | "mid" | "senior";
  stack: string[];
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}
