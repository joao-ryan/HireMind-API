"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const storage_1 = require("../../shared/storage");
const crypto_1 = __importDefault(require("crypto"));
exports.userRepository = {
    async create(data) {
        const newUser = {
            _id: crypto_1.default.randomUUID(),
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role || "CANDIDATE",
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        storage_1.db.users.push(newUser);
        return newUser;
    },
    async findByEmail(email) {
        return storage_1.db.users.find((user) => user.email === email) || null;
    },
    async findById(id) {
        return storage_1.db.users.find((user) => user._id === id) || null;
    }
};
