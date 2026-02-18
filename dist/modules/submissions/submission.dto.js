"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubmissionSchema = void 0;
const zod_1 = require("zod");
exports.createSubmissionSchema = zod_1.z.object({
    jobId: zod_1.z.string(),
    code: zod_1.z.string().min(10)
});
