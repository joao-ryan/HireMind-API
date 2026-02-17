import { User, IUser } from "./user.model";

export const userRepository = {
  async create(data: Partial<IUser>) {
    return User.create(data);
  },

  async findByEmail(email: string) {
    return User.findOne({ email });
  },

  async findById(id: string) {
    return User.findById(id);
  }
};
