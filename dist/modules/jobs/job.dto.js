"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJobSchema = void 0;
const zod_1 = require("zod");
exports.createJobSchema = zod_1.z.object({
    title: zod_1.z.string().min(2),
    level: zod_1.z.enum(["junior", "mid", "senior"]),
    stack: zod_1.z.array(zod_1.z.string().min(1)),
    companyId: zod_1.z.string()
});
