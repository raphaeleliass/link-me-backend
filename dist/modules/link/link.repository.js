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
exports.LinkRepository = void 0;
const prisma_config_1 = require("../../config/prisma.config");
class LinkRepository {
    static createLink(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_config_1.prisma.link.create({
                data,
                select: { title: true, link: true },
            });
        });
    }
    static editLink(id, title, link) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_config_1.prisma.link.update({
                data: { link, title },
                where: { id: id, link, title },
            });
        });
    }
    static deleteLink(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_config_1.prisma.link.delete({
                where: { id },
                select: { title: true, link: true },
            });
        });
    }
    static findLink(link) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_config_1.prisma.link.findFirst({ where: { link } });
        });
    }
    static listAllLinks(_a) {
        return __awaiter(this, arguments, void 0, function* ({ userId }) {
            return yield prisma_config_1.prisma.link.findMany({
                where: { userId },
                select: {
                    id: true,
                    link: true,
                    title: true,
                    created_at: true,
                    updated_at: true,
                },
            });
        });
    }
}
exports.LinkRepository = LinkRepository;
