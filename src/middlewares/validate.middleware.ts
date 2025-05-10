import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

export const validadeMiddleware =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success)
      res.status(400).json({
        error: "Validation failed",
        message: "Please, check your input data and try again",
        issue: result.error.errors,
      });

    next();
  };
