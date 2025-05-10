import { Request, Response } from "express";
import { LinkService } from "./link.service";
export class LinkController {
  static async createLink(req: Request, res: Response) {
    const { userId, title, link } = req.body;

    const linkData = await LinkService.createLink({ userId, title, link });

    res.json(linkData);
  }

  static async editLink(req: Request, res: Response) {
    const { id, title, link } = req.body;

    const links = await LinkService.editLink(id, title, link);

    res.json(links);
  }

  static async allLinks(req: Request, res: Response) {
    const { userId } = req.body;

    const links = await LinkService.allLinks(userId);

    res.json(links);
  }

  static async deleteLink(req: Request, res: Response) {
    const { id } = req.body;
    const deletedLink = await LinkService.deleteLink(id);

    res.json(deletedLink);
  }
}
