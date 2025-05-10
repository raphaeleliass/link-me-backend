"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkSchema = void 0;
const zod_1 = require("zod");
exports.linkSchema = zod_1.z.object({
    title: zod_1.z.string().min(2, "Title must have at least 2 characters"),
    link: zod_1.z.string().url("Invalid href"),
    userId: zod_1.z.string().nonempty("User id cannot be empty"),
});
