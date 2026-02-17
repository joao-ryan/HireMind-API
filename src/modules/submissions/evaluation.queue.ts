import { Queue } from "bullmq";
import { config } from "../../config/config";

export const evaluationQueue = new Queue("evaluation", {
  connection: {
    host: config.redis.host,
    port: config.redis.port,
    maxRetriesPerRequest: null
  }
});

evaluationQueue.on("error", (err) => {
  console.warn("⚠️  Fila de avaliação: Conexão com Redis indisponível.");
});
