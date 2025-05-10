"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
    const authToken = req.headers.authorization;
    if (!authToken) {
        res.status(401).json({ error: "User not authenticated" });
        return;
    }
    const [, token] = authToken.split(" ");
    if (!process.env.JWT_SECRET)
        throw new Error("Missing JWT_SECRET environment variable");
    const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
    req.userId = sub;
    next();
};
exports.authMiddleware = authMiddleware;
