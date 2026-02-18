import { IUser } from "../modules/users/user.model";
import { ICompany } from "../modules/companies/company.model";
import { IJob } from "../modules/jobs/job.model";
import { ISubmission } from "../modules/submissions/submission.model";

interface DB {
  users: IUser[];
  companies: ICompany[];
  jobs: IJob[];
  submissions: ISubmission[];
}

export const db: DB = {
  users: [],
  companies: [],
  jobs: [],
  submissions: [],
};
