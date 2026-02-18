"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluationQueue = void 0;
const bullmq_1 = require("bullmq");
const config_1 = require("../../config/config");
exports.evaluationQueue = new bullmq_1.Queue("evaluation", {
    connection: {
        host: config_1.config.redis.host,
        port: config_1.config.redis.port,
        maxRetriesPerRequest: null
    }
});
exports.evaluationQueue.on("error", (err) => {
    console.warn("⚠️  Fila de avaliação: Conexão com Redis indisponível.");
});
