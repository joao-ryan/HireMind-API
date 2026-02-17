import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";
import { AppError } from "../errors/AppError";

export const roleMiddleware = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new AppError("Não autenticado", 401);
    }

    if (!roles.includes(req.user.role)) {
      throw new AppError("Sem permissão", 403);
    }

    next();
  };
};
