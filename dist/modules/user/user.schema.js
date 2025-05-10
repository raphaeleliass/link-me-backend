"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    username: zod_1.z
        .string()
        .refine((val) => !val.includes(" "), "Username cannot contain spaces").optional(),
    email: zod_1.z.string().email("Email invalid"),
    password: zod_1.z.string().min(8, "Password is too weak"),
    name: zod_1.z.string().min(3, "Name is too short").optional(),
});
