"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const user_dto_1 = require("./user.dto");
const user_repository_1 = require("./user.repository");
exports.userController = {
    async me(req, res, next) {
        try {
            const user = await user_repository_1.userRepository.findById(req.user.id);
            res.json(user);
        }
        catch (error) {
            next(error);
        }
    },
    async register(req, res, next) {
        try {
            const data = user_dto_1.registerSchema.parse(req.body);
            const user = await user_service_1.userService.register(data);
            res.status(201).json(user);
        }
        catch (error) {
            next(error);
        }
    },
    async login(req, res, next) {
        try {
            const data = user_dto_1.loginSchema.parse(req.body);
            const result = await user_service_1.userService.login(data.email, data.password);
            res.json(result);
        }
        catch (error) {
            next(error);
        }
    }
};
