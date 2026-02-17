import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userRepository } from "./user.repository";
import { AppError } from "../../shared/errors/AppError";

export const userService = {
  async register(data: any) {
    const userExists = await userRepository.findByEmail(data.email);

    if (userExists) {
      throw new AppError("Email já cadastrado", 409);
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await userRepository.create({
      ...data,
      password: hashedPassword
    });

    return user;
  },

  async login(email: string, password: string) {
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Credenciais inválidas", 401);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Credenciais inválidas", 401);
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return { user, token };
  }
};
