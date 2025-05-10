"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const user_repository_1 = require("./user.repository");
const bcryptjs_1 = require("bcryptjs");
class UserService {
    static createUser(_a) {
        return __awaiter(this, arguments, void 0, function* ({ username, email, password, }) {
            const checkIfEmailInUse = yield user_repository_1.UserRepository.findEmailInUse(email);
            const checkIfUsernameInUse = yield user_repository_1.UserRepository.findUsernameInUse(username);
            if (checkIfEmailInUse) {
                const error = new Error("Email already in use");
                error.statusCode = 400;
                throw error;
            }
            if (checkIfUsernameInUse) {
                const error = new Error("Username already in use");
                error.statusCode = 400;
                throw error;
            }
            const passwordHash = yield (0, bcryptjs_1.hash)(password, 8);
            return yield user_repository_1.UserRepository.createUser({
                username,
                email,
                password: passwordHash,
            });
        });
    }
    static authUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_repository_1.UserRepository.findEmailInUse(email);
            if (!user)
                throw new Error("Invalid email or password");
            const passwordMatcher = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!passwordMatcher)
                throw new Error("Invalid email or password");
            const JWT_SECRET = process.env.JWT_SECRET;
            if (!JWT_SECRET) {
                throw new Error("Invalid JWT_SECRET");
            }
            const token = (0, jsonwebtoken_1.sign)({ email: user.email }, JWT_SECRET, {
                subject: user.id,
                expiresIn: "30d",
            });
            return {
                id: user.id,
                email: user.email,
                token,
            };
        });
    }
}
exports.UserService = UserService;
