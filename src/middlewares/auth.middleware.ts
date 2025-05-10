import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  userId: string;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    res.status(401).json({ error: "User not authenticated" });
    return;
  }

  const [, token] = authToken.split(" ");

  if (!process.env.JWT_SECRET)
    throw new Error("Missing JWT_SECRET environment variable");

  const { sub } = verify(token, process.env.JWT_SECRET) as { sub: string };

  (req as AuthenticatedRequest).userId = sub;

  next();
};
