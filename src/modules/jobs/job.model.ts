import { Schema, model, Document, Types } from "mongoose";

export interface IJob extends Document {
  title: string;
  level: "junior" | "mid" | "senior";
  stack: string[];
  companyId: Types.ObjectId;
}

const jobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    level: {
      type: String,
      enum: ["junior", "mid", "senior"],
      required: true
    },
    stack: [{ type: String, required: true }],
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true
    }
  },
  { timestamps: true }
);

export const Job = model<IJob>("Job", jobSchema);
