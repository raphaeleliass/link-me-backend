import { sign } from "jsonwebtoken";
import { UserRepository } from "./user.repository";
import { hash, compare } from "bcryptjs";

export class UserService {
  static async createUser({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) {
    const checkIfEmailInUse = await UserRepository.findEmailInUse(email);
    const checkIfUsernameInUse = await UserRepository.findUsernameInUse(
      username as string
    );

    if (checkIfEmailInUse) {
      const error: any = new Error("Email already in use");
      error.statusCode = 400;
      throw error;
    }

    if (checkIfUsernameInUse) {
      const error: any = new Error("Username already in use");
      error.statusCode = 400;
      throw error;
    }

    const passwordHash = await hash(password, 8);

    return await UserRepository.createUser({
      username,
      email,
      password: passwordHash,
    });
  }

  static async authUser(email: string, password: string) {
    const user = await UserRepository.findEmailInUse(email);

    if (!user) throw new Error("Invalid email or password");

    const passwordMatcher = await compare(password, user.password);
    if (!passwordMatcher) throw new Error("Invalid email or password");

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error("Invalid JWT_SECRET");
    }

    const token = sign({ email: user.email }, JWT_SECRET, {
      subject: user.id,
      expiresIn: "30d",
    });

    return {
      id: user.id,
      email: user.email,
      token,
    };
  }
}
