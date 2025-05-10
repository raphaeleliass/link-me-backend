import { z } from "zod";

export const linkSchema = z.object({
  title: z.string().min(2, "Title must have at least 2 characters"),
  link: z.string().url("Invalid href"),
  userId: z.string().nonempty("User id cannot be empty"),
});

export const editLinkSchema = z.object({
  id: z.string().nonempty("Link id cannot be empty"),
  title: z.string().min(2, "Title must have at least 2 characters"),
  link: z.string().url("Invalid href"),
});
