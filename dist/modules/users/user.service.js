"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_repository_1 = require("./user.repository");
const AppError_1 = require("../../shared/errors/AppError");
exports.userService = {
    async register(data) {
        const userExists = await user_repository_1.userRepository.findByEmail(data.email);
        if (userExists) {
            throw new AppError_1.AppError("Email já cadastrado", 409);
        }
        const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
        const user = await user_repository_1.userRepository.create({
            ...data,
            password: hashedPassword
        });
        return user;
    },
    async login(email, password) {
        const user = await user_repository_1.userRepository.findByEmail(email);
        if (!user) {
            throw new AppError_1.AppError("Credenciais inválidas", 401);
        }
        const passwordMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError_1.AppError("Credenciais inválidas", 401);
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
        return { user, token };
    }
};
