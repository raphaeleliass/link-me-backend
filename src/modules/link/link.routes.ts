import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { validadeMiddleware } from "../../middlewares/validate.middleware";
import { linkSchema } from "./link.schema";
import { LinkController } from "./link.controller";

export const linkRouter = Router();

linkRouter.post(
  "/create",
  authMiddleware,
  validadeMiddleware(linkSchema),
  LinkController.createLink
);

linkRouter.get("/all", authMiddleware, LinkController.allLinks);

linkRouter.put(
  "/edit",
  authMiddleware,
  validadeMiddleware(linkSchema),
  LinkController.editLink
);

linkRouter.delete("/delete", authMiddleware, LinkController.deleteLink);
