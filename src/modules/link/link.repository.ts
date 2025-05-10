import { prisma } from "../../config/prisma.config";
import { LinkTypes } from "./link.types";

export class LinkRepository {
  static async createLink(data: LinkTypes) {
    return await prisma.link.create({
      data,
      select: { title: true, link: true },
    });
  }

  static async editLink(id: string, title: string, link: string) {
    return await prisma.link.update({
      data: { link, title },
      where: { id: id, link, title },
    });
  }

  static async deleteLink(id: string) {
    return await prisma.link.delete({
      where: { id },
      select: { title: true, link: true },
    });
  }

  static async findLink(link: string) {
    return await prisma.link.findFirst({ where: { link } });
  }

  static async listAllLinks({ userId }: LinkTypes) {
    return await prisma.link.findMany({
      where: { userId },
      select: {
        id: true,
        link: true,
        title: true,
        created_at: true,
        updated_at: true,
      },
    });
  }
}
