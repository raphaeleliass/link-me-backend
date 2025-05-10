"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, _req, res, _next) => {
    const statusCode = err.statusCode || err.status || 500;
    res
        .status(statusCode)
        .json({ error: err.message || "Internal server error" });
};
exports.errorMiddleware = errorMiddleware;
