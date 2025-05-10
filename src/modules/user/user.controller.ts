import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { username, email, password, name } = req.body;

    const user = await UserService.createUser({
      username,
      email,
      password,
    });
    res.json(user);
  }

  static async authUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await UserService.authUser(email, password);

    res.json(user);
  }
}
