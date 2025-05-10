import { LinkRepository } from "./link.repository";
import { LinkTypes } from "./link.types";

export class LinkService {
  static async createLink({ title, link, userId }: LinkTypes) {
    const checkIfLinkExists = await LinkRepository.findLink(link);

    if (checkIfLinkExists) throw new Error("This link already exists");

    return await LinkRepository.createLink({ title, link, userId });
  }

  static async editLink(id: string, title: string, link: string) {
    return await LinkRepository.editLink(id, title, link);
  }

  static async allLinks(userId: LinkTypes) {
    return await LinkRepository.listAllLinks(userId);
  }

  static async deleteLink(id: string) {
    return await LinkRepository.deleteLink(id);
  }
}
