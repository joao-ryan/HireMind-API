"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
exports.connectRedis = connectRedis;
const redis_1 = require("redis");
exports.redis = (0, redis_1.createClient)({
    url: process.env.REDIS_URL,
});
exports.redis.on("error", (err) => {
    console.error("🔴 Redis error:", err);
});
async function connectRedis() {
    if (!exports.redis.isOpen) {
        await exports.redis.connect();
        console.log("🟢 Redis conectado");
    }
}
