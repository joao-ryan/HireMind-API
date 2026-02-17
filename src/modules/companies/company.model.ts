import { Schema, model, Document, Types } from "mongoose";

export interface ICompany extends Document {
  name: string;
  description?: string;
  recruiterId: Types.ObjectId;
}

const companySchema = new Schema<ICompany>(
  {
    name: { type: String, required: true },
    description: String,
    recruiterId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export const Company = model<ICompany>("Company", companySchema);
