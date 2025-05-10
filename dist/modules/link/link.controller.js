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
exports.LinkController = void 0;
const link_service_1 = require("./link.service");
class LinkController {
    static createLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, title, link } = req.body;
            const linkData = yield link_service_1.LinkService.createLink({ userId, title, link });
            res.json(linkData);
        });
    }
    static editLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, link } = req.body;
            const links = yield link_service_1.LinkService.editLink(id, title, link);
            res.json(links);
        });
    }
    static allLinks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.body;
            const links = yield link_service_1.LinkService.allLinks(userId);
            res.json(links);
        });
    }
    static deleteLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const deletedLink = yield link_service_1.LinkService.deleteLink(id);
            res.json(deletedLink);
        });
    }
}
exports.LinkController = LinkController;
