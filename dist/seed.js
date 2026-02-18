"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = require("./modules/users/user.model");
const config_1 = require("./config/config");
const seed = async () => {
    try {
        await mongoose_1.default.connect(config_1.config.mongoUri);
        console.log("🔌 Conectado para seed...");
        await user_model_1.User.deleteMany({});
        console.log("🗑️  Usuários antigos removidos");
        const password = await bcryptjs_1.default.hash("123456", 10);
        await user_model_1.User.create([
            {
                name: "Admin",
                email: "admin@hiremind.com",
                password,
                role: "ADMIN",
            },
            {
                name: "Recruiter",
                email: "recruiter@hiremind.com",
                password,
                role: "RECRUITER",
            },
            {
                name: "Candidate",
                email: "candidate@hiremind.com",
                password,
                role: "CANDIDATE",
            },
        ]);
        console.log("🌱 Seed finalizada com sucesso!");
    }
    catch (error) {
        console.error("❌ Erro no seed:", error);
    }
    finally {
        await mongoose_1.default.connection.close();
        process.exit();
    }
};
seed();
