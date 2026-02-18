"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionController = void 0;
const submission_service_1 = require("./submission.service");
const submission_dto_1 = require("./submission.dto");
exports.submissionController = {
    async create(req, res, next) {
        try {
            const data = submission_dto_1.createSubmissionSchema.parse(req.body);
            const submission = await submission_service_1.submissionService.create(data, req.user.id);
            res.status(201).json(submission);
        }
        catch (error) {
            next(error);
        }
    },
    async ranking(req, res, next) {
        try {
            const jobId = req.params.jobId;
            const ranking = await submission_service_1.submissionService.getRanking(jobId);
            res.json(ranking);
        }
        catch (error) {
            next(error);
        }
    }
};
