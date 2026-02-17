import { Schema, model, Document, Types } from "mongoose";

export interface ISubmission extends Document {
  candidateId: Types.ObjectId;
  jobId: Types.ObjectId;
  code: string;
  score?: number;
  status: "pending" | "processing" | "done";
}

const submissionSchema = new Schema<ISubmission>(
  {
    candidateId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true
    },
    code: { type: String, required: true },
    score: { type: Number },
    status: {
      type: String,
      enum: ["pending", "processing", "done"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export const Submission = model<ISubmission>("Submission", submissionSchema);
