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
exports.UserRepository = void 0;
const prisma_config_1 = require("../../config/prisma.config");
class UserRepository {
    static createUser(_a) {
        return __awaiter(this, arguments, void 0, function* ({ username, password, email, }) {
            return yield prisma_config_1.prisma.user.create({
                data: { username, password, email },
                select: { id: true, username: true, email: true, created_at: true },
            });
        });
    }
    static findEmailInUse(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_config_1.prisma.user.findUnique({ where: { email } });
        });
    }
    static findUsernameInUse(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_config_1.prisma.user.findUnique({ where: { username } });
        });
    }
}
exports.UserRepository = UserRepository;
