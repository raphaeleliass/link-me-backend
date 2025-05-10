import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { username, email, password } = req.body;

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

  static async resetPassword(req: Request, res: Response) {
    const { email, oldPassword, newPassword } = req.body;

    const result = await UserService.resetPassword(
      email,
      oldPassword,
      newPassword
    );

    res.json({
      message: "Password updated successfully",
      user: result,
    });
  }
}
