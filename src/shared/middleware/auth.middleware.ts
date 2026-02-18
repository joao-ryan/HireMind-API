import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { db } from "../storage";

interface TokenPayload {
  id: string;
  role: string;
}

export interface AuthRequest extends Request {
  user?: TokenPayload;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token não fornecido", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "supersecret"
    ) as TokenPayload;

    // Read user from in-memory storage
    const userExists = db.users.some((user) => user._id === decoded.id);

    if (!userExists) {
      throw new AppError("Usuário não encontrado", 401);
    }

    req.user = decoded;

    next();
  } catch {
    throw new AppError("Token inválido", 401);
  }
};
