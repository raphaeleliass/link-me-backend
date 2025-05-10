"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validadeMiddleware = void 0;
const validadeMiddleware = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success)
        res.status(400).json({
            error: "Validation failed",
            message: "Please, check your input data and try again",
            issue: result.error.errors,
        });
    next();
};
exports.validadeMiddleware = validadeMiddleware;
