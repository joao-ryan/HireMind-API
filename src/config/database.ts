import mongoose from "mongoose";
import { config } from "./config";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log("🟢 MongoDB conectado");
  } catch (error) {
    console.error("🔴 Erro ao conectar no MongoDB", error);
    process.exit(1);
  }
};
