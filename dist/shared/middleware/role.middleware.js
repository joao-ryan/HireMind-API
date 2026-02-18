"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = void 0;
const AppError_1 = require("../errors/AppError");
const roleMiddleware = (roles) => {
    return (req, res, next) => {
        if (!req.user) {
            throw new AppError_1.AppError("Não autenticado", 401);
        }
        if (!roles.includes(req.user.role)) {
            throw new AppError_1.AppError("Sem permissão", 403);
        }
        next();
    };
};
exports.roleMiddleware = roleMiddleware;
