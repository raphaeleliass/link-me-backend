import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { validadeMiddleware } from "../../middlewares/validate.middleware";
import { linkSchema } from "./link.schema";
import { LinkController } from "./link.controller";

export const linkRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Link:
 *       type: object
 *       required:
 *         - title
 *         - link
 *         - userId
 *       properties:
 *         title:
 *           type: string
 *           minLength: 2
 *           description: Title of the link
 *         link:
 *           type: string
 *           format: uri
 *           description: URL to be linked
 *         userId:
 *           type: string
 *           description: ID of the user who owns the link
 */

/**
 * @swagger
 * /api/links/create:
 *   post:
 *     summary: Create a new link
 *     tags: [Links]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Link'
 *     responses:
 *       201:
 *         description: Link created successfully
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
linkRouter.post(
  "/create",
  authMiddleware,
  validadeMiddleware(linkSchema),
  LinkController.createLink
);

/**
 * @swagger
 * /api/links/all:
 *   get:
 *     summary: Get all links for authenticated user
 *     tags: [Links]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of links
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Link'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
linkRouter.get("/all", authMiddleware, LinkController.allLinks);

/**
 * @swagger
 * /api/links/edit:
 *   put:
 *     summary: Edit an existing link
 *     tags: [Links]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Link'
 *     responses:
 *       200:
 *         description: Link updated successfully
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Link not found
 *       500:
 *         description: Server error
 */
linkRouter.put(
  "/edit",
  authMiddleware,
  validadeMiddleware(linkSchema),
  LinkController.editLink
);

/**
 * @swagger
 * /api/links/delete:
 *   delete:
 *     summary: Delete a link
 *     tags: [Links]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - id
 *             properties:
 *               userId:
 *                 type: string
 *               id:
 *                 type: string
 *                 description: ID of the link to delete
 *     responses:
 *       200:
 *         description: Link deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Link not found
 *       500:
 *         description: Server error
 */
linkRouter.delete("/delete", authMiddleware, LinkController.deleteLink);
