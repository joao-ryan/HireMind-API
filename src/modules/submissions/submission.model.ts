export interface ISubmission {
  _id: string;
  candidateId: string;
  jobId: string;
  code: string;
  score?: number;
  status: "pending" | "processing" | "done";
  createdAt: Date;
  updatedAt: Date;
}
