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
exports.LinkService = void 0;
const link_repository_1 = require("./link.repository");
class LinkService {
    static createLink(_a) {
        return __awaiter(this, arguments, void 0, function* ({ title, link, userId }) {
            const checkIfLinkExists = yield link_repository_1.LinkRepository.findLink(link);
            if (checkIfLinkExists)
                throw new Error("This link already exists");
            return yield link_repository_1.LinkRepository.createLink({ title, link, userId });
        });
    }
    static editLink(id, title, link) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield link_repository_1.LinkRepository.editLink(id, title, link);
        });
    }
    static allLinks(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield link_repository_1.LinkRepository.listAllLinks(userId);
        });
    }
    static deleteLink(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield link_repository_1.LinkRepository.deleteLink(id);
        });
    }
}
exports.LinkService = LinkService;
