import { IUser } from "./user.model";
import { db } from "../../shared/storage";
import crypto from "crypto";

export const userRepository = {
  async create(data: Partial<IUser>) {
    const newUser: IUser = {
      _id: crypto.randomUUID(),
      name: data.name!,
      email: data.email!,
      password: data.password!,
      role: data.role || "CANDIDATE",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.users.push(newUser);
    return newUser;
  },

  async findByEmail(email: string) {
    return db.users.find((user) => user.email === email) || null;
  },

  async findById(id: string) {
    return db.users.find((user) => user._id === id) || null;
  }
};
