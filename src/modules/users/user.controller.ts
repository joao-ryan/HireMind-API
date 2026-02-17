import { Request, Response, NextFunction } from "express";
import { userService } from "./user.service";
import { registerSchema, loginSchema } from "./user.dto";
import { authMiddleware } from "../../shared/middleware/auth.middleware";
import { userRepository } from "./user.repository";

export const userController = {

  async me(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userRepository.findById(req.user!.id);

      res.json(user);
    } catch (error) {
      next(error);
    }
  },
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const data = registerSchema.parse(req.body);

      const user = await userService.register(data);

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = loginSchema.parse(req.body);

      const result = await userService.login(data.email, data.password);

      res.json(result);
    } catch (error) {
      next(error);
    }
  }

};
