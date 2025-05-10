"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const user_routes_1 = require("./modules/user/user.routes");
const error_middleware_1 = require("./middlewares/error.middleware");
const link_routes_1 = require("./modules/link/link.routes");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
const limiter = (0, express_rate_limit_1.default)({
    limit: 15,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests, try again later please",
});
exports.app.use(limiter);
exports.app.use(express_1.default.json());
exports.app.use("/api/users", user_routes_1.userRouter);
exports.app.use("/api/links", link_routes_1.linkRouter);
exports.app.use(error_middleware_1.errorMiddleware);
