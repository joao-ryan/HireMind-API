import { Queue } from "bullmq";

export const evaluationQueue = new Queue("evaluation", {
  connection: {
    host: "localhost",
    port: 6379
  }
});
