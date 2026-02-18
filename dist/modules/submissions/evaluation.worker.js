"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluationWorker = void 0;
const bullmq_1 = require("bullmq");
const submission_model_1 = require("./submission.model");
const config_1 = require("../../config/config");
exports.evaluationWorker = new bullmq_1.Worker("evaluation", async (job) => {
    const { submissionId, code } = job.data;
    // simulação de avaliação
    const score = Math.min(100, code.length);
    await submission_model_1.Submission.findByIdAndUpdate(submissionId, {
        score,
        status: "done",
    });
}, {
    connection: {
        host: config_1.config.redis.host,
        port: config_1.config.redis.port,
        maxRetriesPerRequest: null
    },
});
exports.evaluationWorker.on("error", (err) => {
    // Apenas loga o erro para não derrubar o processo
});
