import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .refine((val) => !val.includes(" "), "Username cannot contain spaces")
    .optional(),
  email: z.string().email("Email invalid"),
  password: z.string().min(8, "Password is too weak"),
  name: z.string().min(3, "Name is too short").optional(),
});

export const resetPasswordSchema = z.object({
  email: z.string().email(),
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8),
});
