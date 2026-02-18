"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = require("../errors/AppError");
const storage_1 = require("../storage");
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.AppError("Token não fornecido", 401);
    }
    const [, token] = authHeader.split(" ");
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "supersecret");
        // Read user from in-memory storage
        const userExists = storage_1.db.users.some((user) => user._id === decoded.id);
        if (!userExists) {
            throw new AppError_1.AppError("Usuário não encontrado", 401);
        }
        req.user = decoded;
        next();
    }
    catch {
        throw new AppError_1.AppError("Token inválido", 401);
    }
};
exports.authMiddleware = authMiddleware;
