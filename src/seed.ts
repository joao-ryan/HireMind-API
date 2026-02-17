import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "./modules/users/user.model";
import { config } from "./config/config";

const seed = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log("🔌 Conectado para seed...");

    await User.deleteMany({});
    console.log("🗑️  Usuários antigos removidos");

    const password = await bcrypt.hash("123456", 10);

    await User.create([
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
  } catch (error) {
    console.error("❌ Erro no seed:", error);
  } finally {
    await mongoose.connection.close();
    process.exit();
  }
};

seed();
