import { prisma } from "../../config/prisma.config";
import { UserTypes } from "./user.types";
export class UserRepository {
  static async createUser({
    username,
    password,
    email,
  }: {
    username: string;
    password: string;
    email: string;
  }) {
    return await prisma.user.create({
      data: { username, password, email },
      select: { id: true, username: true, email: true, created_at: true },
    });
  }

  static async findEmailInUse(email: string) {
    return await prisma.user.findUnique({ where: { email } });
  }

  static async findUsernameInUse(username: string) {
    return await prisma.user.findUnique({ where: { username } });
  }

  static async updatePassword(email: string, newPassword: string) {
    return await prisma.user.update({
      where: { email },
      data: { password: newPassword },
      select: { id: true, email: true, updated_at: true },
    });
  }
}
