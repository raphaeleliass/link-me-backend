import { Router } from "express";
import { UserController } from "./user.controller";
import { validadeMiddleware } from "../../middlewares/validate.middleware";
import { userSchema } from "./user.schema";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const userRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: Username without spaces
 *         email:
 *           type: string
 *           format: email
 *           description: User email
 *         password:
 *           type: string
 *           format: password
 *           minLength: 8
 *           description: User password (min 8 characters)
 *         name:
 *           type: string
 *           description: User's full name
 */

/**
 * @swagger
 * /api/users/create:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */
userRouter.post(
  "/create",
  validadeMiddleware(userSchema),
  UserController.createUser
);

/**
 * @swagger
 * /api/users/session:
 *   post:
 *     summary: Authenticate a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Authentication successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token
 *       401:
 *         description: Authentication failed
 *       500:
 *         description: Server error
 */
userRouter.post(
  "/session",
  validadeMiddleware(userSchema),
  UserController.authUser
);
