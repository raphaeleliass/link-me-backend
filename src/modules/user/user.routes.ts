import { Router } from "express";
import { UserController } from "./user.controller";
import { validadeMiddleware } from "../../middlewares/validate.middleware";
import { userSchema } from "./user.schema";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const userRouter = Router();

userRouter.post(
  "/create",
  validadeMiddleware(userSchema),
  UserController.createUser
);

userRouter.post(
  "/session",
  validadeMiddleware(userSchema),
  UserController.authUser
);
